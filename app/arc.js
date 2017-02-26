const d3 = require('d3');

let body = d3.select('body');

const arcs = [{
    r: 100,
    start: -Math.PI * 0.5,
    end: Math.PI * 0.5,
    fill: 'yellow'
}, {
    r: 100,
    start: Math.PI * 0.5,
    end: Math.PI * 1.5,
    fill: 'blue'
}];

let svg = body
    .append('svg')
    .attr('width', 200)
    .attr('height', 200);

let arc = d3.arc()
    .innerRadius(0)
    .outerRadius(data => data.r)
    .startAngle(data => data.start)
    .endAngle(data => data.end);

svg.append('g')
    .attr('transform', 'translate(100, 100)')
    .selectAll('path')
    .data(arcs)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', data => data.fill);