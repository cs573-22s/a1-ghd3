###### Marcus Chalmers
###### Project A1

[Link to Page](https://mchalmers.github.io/a1-ghd3/index.html)

In the link above you can find the Live URL to my "D3 Experience"
Upon first viewing the webpage You're greeted with three buttons and a blank graph.

![Random Shapes Example](https://github.com/mchalmers/a1-ghd3/blob/gh-pages/MainScreen.JPG?raw=true)

The basic requirements for this project include creating circles, rectangles, lines, and polygons in different colors
and different areas. These three buttons will generate a circle, square, or six-sided polygon of random size, color,
and position. (While lines are another requirement for the project, I didn't think they would look good with the other shapes,
so I just made one line to show the start and boundaries of the graph).

For each shape generated, the graph will update a specific path in the graph to show the new random size created.

![Welcome Page](https://github.com/mchalmers/a1-ghd3/blob/gh-pages/RandomlyGeneratedArt.JPG?raw=true)

The webpage is very straightforward in its functionality, but it does extend beyond the baseline requirements for this project:

###### Technical Acheivement: 
In an attempt to go beyond just creating a couple of random shapes of different colors and sizes I figured I would generate the process 
allowing the user to create an unlimited number of different shapes if they wanted to. This took more research than I was expecting
to pull off. I haven't included any code references in this README because I started my index.html from scratch, however, I did make use of
the code example used in class as well as the D3 API and general syntax references online. Using a method similar to what we learned in class
I wanted to use a data array to hold the values of the different shapes and then add to that data to create new shapes. It didn't work exactly
like how I was expecting it to so I used the update on each button press to reset all the shapes of that type. There is probably a better
way to accomplish updating data/variables in D3 but for what I wanted to accomplish this worked perfectly. Not only did I work towards fully
generating all of the shapes on the webpage (aside from the line), I decided to make a graph based on the shapes using paths. 
I got the idea from how most people tend to create line graphs in D3. I was able to find out how to use paths one point at a time through
the API and was eventually able to implement it through the button updates as well.

###### Design Acheivement:
When we were told about SVG paths in class I immediately realized that there's already a file type called SVG that's used for vector graphics.
Since we were supposed to create something using these paths I hoped that I would be able to get the path from within an SVG type file.
The SVG file type normally opens in a browser as an image but I soon figured out that you can get the path by inspecting the page source.
Now that I knew I could get the path from an SVG file, I found [this one editor online](https://yqnn.github.io/svg-path-editor/) that allows you to
build and run simple transformations on complex paths. From there the only thing I needed was an actual SVG. I didn't want to use anything someone
else had made so, I found a drawing I had made previously of this character. It was saved as a PNG but using photoshop I was able to eventually
convert it to a vector and save both colors (linework and shading) as SVG files. From there I could size them more correctly in the online editor
and I was able to paste the path strings into my code. The reason I consider this process part of the Design achievement is because It's mainly a 
test of how much is reasonably possible with SVG paths. I would consider myself fairly proficient in photoshop, and while illustrator would be a
better program to use for this scenario, the simple fact that I was able to recreate my drawing with essentially no detail lost within D3 opens the
door for so many design opportunities in the future. I need to learn more about D3 to figure out what's possible but if paths can be 
created with an insane amount of detail in a reasonable amount of time, I am very excited for future project possibilities.
![Character Portrait](https://github.com/mchalmers/a1-ghd3/blob/gh-pages/SVGpathPortrait.JPG?raw=true)
