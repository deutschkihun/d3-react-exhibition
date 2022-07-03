import React, { useEffect } from 'react'
import * as d3 from 'd3'

export function ConfidenceInterval({ width, height, margin }) {
  useEffect(() => {
    const confidenceInterval = d3
      .select('#ci')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    const x = d3.scaleLinear().domain([1, 100]).range([0, width])
    confidenceInterval.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x))

    const y = d3.scaleLinear().domain([0, 13]).range([height, 0])
    confidenceInterval.append('g').call(d3.axisLeft(y))

    d3.csv('https://raw.githubusercontent.com/deutschkihun/vizDataRepo/main/csv/CI.csv').then(data => {
      confidenceInterval
        .append('path')
        .datum(data)
        .attr('fill', '#cce5df')
        .attr('stroke', 'none')
        .attr(
          'd',
          d3
            .area()
            .x(d => {
              return x(d.x)
            })
            .y0(d => {
              return y(d.CI_right)
            })
            .y1(d => {
              return y(d.CI_left)
            }),
        )

      confidenceInterval
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
        .attr(
          'd',
          d3
            .line()
            .x(d => {
              return x(d.x)
            })
            .y(d => {
              return y(d.y)
            }),
        )
      confidenceInterval
        .append('text')
        .attr('text-anchor', 'end')
        .attr('x', width)
        .attr('y', height + margin.top + 20)
        .text('X axis')

      // Y axis label:
      confidenceInterval
        .append('text')
        .attr('text-anchor', 'end')
        .attr('transform', 'rotate(-90)')
        .attr('y', -margin.left + 10)
        .attr('x', -margin.top)
        .text('Y axis')

      confidenceInterval
        .append('text')
        .attr('x', width / 2)
        .attr('y', margin.top / 2)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('text-decoration', 'underline')
        .text('Confidence interval')
    })
  }, [height, margin.bottom, margin.left, margin.right, margin.top, width])

  return <svg id="ci" />
}
