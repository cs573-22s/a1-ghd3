# Assignment 1 - Hello World: GitHub and d3  
**[Demo Link]**

## Project Contents
### Adding Circles
I started my project by generating some random data. For my data, I decided to start with a list of circles with random
positions, colors, and radius's.
```javascript
const dataset = [];

// Fill dataset with randomly placed circles
buildDataset: while (dataset.length < numPoints) {
    const x = maxRadius + (width - 2 * maxRadius) * Math.random();
    const y = maxRadius + (height - 2 * maxRadius) * Math.random();
    const radius = minRadius + (maxRadius - minRadius) * Math.random();
    const color = colors[0 | (colors.length * Math.random())];

    // Ensure no circles overlap or are drawn too close to eachother
    for (const circle of dataset) {
        const distSquared = (x - circle.x) * (x - circle.x) + (y - circle.y) * (y - circle.y);

        if (distSquared < 4 * maxRadius * maxRadius) {
            continue buildDataset;
        }
    }
    
    dataset.push({x, y, radius, color, shapeType});
}
```
Once I had some data to play with, I started by drawing a circle with its color, radius and position.
```javascript
// Create a new canvas within the provided element
const canvas = d3.select("#canvas")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Add the created circles to the image
canvas.selectAll("circle")
    .data(dataset).enter()
    .append("circle")
    .attr("r", x => x.radius)
    .attr("cx", x => x.x)
    .attr("cy", x => x.y)
    .attr("fill", x => x.color);
```
![Colored Circles]

### Adding Connecting Line Segments
At this point, I was still a bit unsure where I was going with this project. However, since lines were next on the list
of suggested additions, I thought it might be interesting to connect all the circles in a web to their closest
neighbors. Since I was unsure how this could be done using d3 alone, I created a list for line segments and slowly
attempted to add line segments between all the circles. Upon an intersection being found, the longer of the two segments
would be removed.
```javascript
const lines = [];

for (let a = 0; a < dataset.length - 1; a++) {
    check: for (let b = a + 1; b < dataset.length; b++) {
        const ca = dataset[a];
        const cb = dataset[b];
        const hypot2 = (ca.x - cb.x) * (ca.x - cb.x) + (ca.y - cb.y) * (ca.y - cb.y);

        for (let i = 0; i < lines.length; i++) {
            if (intersects(ca, cb, lines[i].ca, lines[i].cb)) {
                // Check for false positive where segments share a point
                if (ca === lines[i].ca || ca === lines[i].cb || cb === lines[i].ca || cb === lines[i].cb) {
                    continue;
                }

                if (hypot2 < lines[i].hypot2) {
                    // If this line is shorter it takes priority and bumps the other line out
                    lines.splice(i, 1);
                    i--;
                } else {
                    // An existing line is shorter and is a better candidate for this position
                    continue check;
                }
            }
        }

        lines.push({ca, cb, hypot2});
    }
}

// Add the connecting lines
canvas.selectAll("line")
    .data(lines).enter()
    .append("line")
    .attr("x1", x => x.ca.x)
    .attr("x2", x => x.cb.x)
    .attr("y1", x => x.ca.y)
    .attr("y2", x => x.cb.y)
    .attr("stroke", "black")
    .attr("stroke-width", 5);
```
I then scaled back the endpoints of each line segment, so they would not cover the circles. Afterwards it occurred to me
that I could have put the line segments behind the circles and applied a white stroke to the shapes to give the same
effect, but since I already had this I decided to leave it as it was.
```javascript
for (const line of lines) {
    // Calculate a unit vector from ca to cb
    const length = Math.sqrt(line.hypot2);
    const ux = (line.cb.x - line.ca.x) / length;
    const uy = (line.cb.y - line.ca.y) / length;

    // Adjust end points to not overlap with circles
    line.ca = {
        ...line.ca,
        x: line.ca.x + ux * (circleBorder + line.ca.radius),
        y: line.ca.y + uy * (circleBorder + line.ca.radius),
    };
    line.cb = {
        ...line.cb,
        x: line.cb.x - ux * (circleBorder + line.cb.radius),
        y: line.cb.y - uy * (circleBorder + line.cb.radius),
    };
}
```

![Connected Circles]

### Fixing Overlaps
At this point I began to notice an issue where line segments on the outer bounds of the image could partially cover up
some circles.

![Overlap Issue]

After adding some code to check if any line segments intersected with the boundary area of each circle this issue was
resolved.
```javascript
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    for (const shape of dataset) {
        if (shape === line.ca || shape === line.cb) {
            continue;
        }

        if (distanceSegmentToPoint(line.ca, line.cb, shape) < shape.radius + circleBorder) {
            lines.splice(i, 1);
            i--;
            break;
        }
    }
}
```

![Fixed Overlap]

### Adding Rectangles
Going down the list I saw that I still needed to include rectangles and paths to the project. I considered a few
different options, however the most straightforward approach seemed to be replacing some circles with alternate shapes.
I started by adding a `shapeType` attribute to each data point.
```javascript
const shapeTypes = ["circle", "rect", "pentagon"];
const shapeType = shapeTypes[0 | (shapeTypes.length * Math.random())];
dataset.push({x, y, radius, color, shapeType});
```
I started with the rectangles and filtered the dataset for each time I added items.
```javascript
canvas.selectAll("rect")
    .data(dataset.filter(x => x.shapeType === "rect"))
    .enter()
    .append("rect")
    .attr("x", x => x.x - x.radius * Math.sqrt(2) / 2)
    .attr("y", x => x.y - x.radius * Math.sqrt(2) / 2)
    .attr("width", x => x.radius * Math.sqrt(2))
    .attr("height", x => x.radius * Math.sqrt(2))
    .attr("fill", x => x.color);
```
![With Rects]

### Adding Pentagons
Lastly, to use path elements I decided to add pentagons. I wrote a simple function to trace the shape of a path then
applied it for each pentagon in the dataset.

```javascript
function buildPolygon(context, sides = 5, x, y, r) {
    context.moveTo(x, y - r);

    for (let i = 1; i < sides; i++) {
        const angle = Math.PI * (0.5 + 2 * i / sides);
        context.lineTo(x + r * Math.cos(angle), y - r * Math.sin(angle));
    }

    context.closePath();
    return context;
}

canvas.selectAll("path")
    .data(dataset.filter(x => x.shapeType === "pentagon"))
    .enter()
    .append("path")
    .attr("d", x => buildPolygon(d3.path(), 5, x.x, x.y, x.radius))
    .attr("fill", x => x.color);
```
With this I was then left with my final product.
![With Pentagons]


## Technical and Design Achievement
I did not add anything to this project specifically for technical and design achievement. I suppose I could have
completed the project by creating a completely random output with the minimum design requirements of randomly placed
circles, rectangles, lines, and paths. However, other than attempting to make the web layout visually pleasing I can not
think of anything that might constitute a design or technical achievement.

  [Demo Link]: https://jmeggitt.github.io/a1-ghd3/index.html
  [Colored Circles]: imgs/coloredCircles.png
  [Connected Circles]: imgs/connectedCircles.png
  [Overlap Issue]: imgs/overlapIssue.png
  [Fixed Overlap]: imgs/fixedOverlap.png
  [With Rects]: imgs/withRects.png
  [With Pentagons]: imgs/withPentagons.PNG
