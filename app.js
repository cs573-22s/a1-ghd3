

//Make an SVG Container
var svg = d3.select("body")
    .append("svg")
    .attr("width", 650)
    .attr("height", 400);
//.style('background-color', 'lightgrey');

var circle = svg.append("circle")
    .attr("cx", 250)
    .attr("cy", 200)
    .attr("r", 40)
    //.attr('stroke', 'black')
    .attr('fill', function (d) {
        return '#69a3b2'
    })

    .on('mouseover', function (d) {
        d3.select(this)
            .transition()
            .duration('500')
            .style("fill","#D77FA1");
    })

    .on('mouseout', function (d) {
        d3.select(this)
            .transition()
            .duration('5000')
            .style("fill","#69a3b2");
    })


var rectangle = svg.append("rect")
    .attr("x", 600)
    .attr("y", 150)
    .attr("width", 50)
    .attr("height", 100)
    .attr('fill', function (d) {
        return '#2E5E4E'
    })

    .on('mouseover', function (d) {
        d3.select(this)
            .transition()
            .duration('500')
            .style("fill","#BAABDA");
    })

    .on('mouseout', function (d) {
        d3.select(this)
            .transition()
            .duration('5000')
            .style("fill","#2E5E4E");
    })



var path = svg.append("path")
    .attr("d", "M 400 150 L 400 250 L 500 250 Z")
    .attr('fill', function (d) {
        return '#D96098'
    })

    .on('mouseover', function (d) {
        d3.select(this)
            .transition()
            .duration('500')
            .style("fill","D6E5FA");
    })

    .on('mouseout', function (d) {
        d3.select(this)
            .transition()
            .duration('500')
            .style("fill","#D96098");
    })



function Transition() {
    d3.selectAll('circle')
        .transition()
        .duration(2000)
        .ease(d3.easeExpOut)
        .attr("r", 40)
        .attr("cx", 410)
        .attr("cy", 110)

    d3.selectAll('rect')
        .transition()
        .ease(d3.easeExpOut)
        .duration(2000)
        .attr("width", 50)
        .attr("height", 100)
        .attr("y", 150)
        .attr("x", 510)

}


function Cool() {
    d3.selectAll('circle')
        .transition()
        .duration(2000)
        .ease(d3.easeExpOut)
        .attr("r", 50)
        .attr("cx", 580)
        .attr("cy", 200)

    d3.selectAll('rect')
        .transition()
        .ease(d3.easeExpOut)
        .duration(2000)
        .attr("x", 400)
        .attr("y", 100)
        .attr("width", 220)
        .attr("height", 50)
}
