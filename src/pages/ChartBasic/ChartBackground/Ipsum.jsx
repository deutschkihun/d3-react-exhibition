import React, { useEffect } from 'react'
import * as d3 from 'd3'

export function Ipsum({ width, height, margin, index }) {
  useEffect(() => {
    const xScaleLinear = d3.scaleLinear().domain([0, 100]).range([0, width])
    const yScaleLinear = d3.scaleLinear().domain([0, 100]).range([height, 0])
    const axisTemplate = d3
      .select('#ipsum')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom + 50)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top + 20})`)

    axisTemplate
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(
        d3
          .axisBottom(xScaleLinear)
          .tickSize(-height * 1.3)
          .ticks(10),
      )
      .select('.domain')
      .remove()
    axisTemplate
      .append('g')
      .call(
        d3
          .axisLeft(yScaleLinear)
          .tickSize(-width * 1.3)
          .ticks(7),
      )
      .select('.domain')
      .remove()
    axisTemplate.selectAll('.tick line').attr('stroke', '#EBEBEB')

    axisTemplate
      .append('text')
      .attr('text-anchor', 'end')
      .attr('x', width)
      .attr('y', height + margin.top + 20)
      .text('X axis')

    axisTemplate
      .append('text')
      .attr('text-anchor', 'end')
      .attr('transform', 'rotate(-90)')
      .attr('y', -margin.left + 10)
      .attr('x', -margin.top)
      .text('Y axis')

    axisTemplate
      .append('text')
      .attr('x', width / 2)
      .attr('y', -margin.top)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .style('text-decoration', 'underline')
      .text(`Ipsum style`)
  }, [height, margin.bottom, margin.left, margin.right, margin.top, width])

  return <svg id="ipsum" />
}
