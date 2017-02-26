var d3 = require('d3');

const circles = [{
    cx: 25,
    cy: 25,
    r: 25,
    fill: 'purple'
}, {
    cx: 75,
    cy: 75,
    r: 25,
    fill: 'orange'
}, {
    cx: 100,
    cy: 60,
    r: 25,
    fill: 'yellow'
}];

let body = d3.select('body');


let svg = body
    .append('svg')
    .attr('width', 200)
    .attr('height', 200);

body
    .append('button')
    .text('Random Redraw')
    .on('click', () => random());

draw();

function draw() {
    let circlesSelection = svg.selectAll('circle')
        .data(circles);

    circlesSelection
        .attr('cx', data => data.cx)
        .attr('cy', data => data.cy)
        .attr('r', data => data.r)
        .style('fill', data => data.fill);

    circlesSelection
        .enter()
        .append('circle')
        .attr('cx', data => data.cx)
        .attr('cy', data => data.cy)
        .attr('r', data => data.r)
        .style('fill', data => data.fill);

    circlesSelection
        .exit()
        .remove();
}

function random() {
    circles.forEach(circle => {
        circle.cx = Number(Math.random() * 150) + 25;
        circle.cy = Number(Math.random() * 150) + 25;
    });

    draw();
}

window.random = random;