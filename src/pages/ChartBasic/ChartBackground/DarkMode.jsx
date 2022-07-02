import React, { useEffect } from 'react'
import * as d3 from 'd3'

export function DarkMode({ width, height, margin, index }) {
  useEffect(() => {
    const xSaleLinear = d3.scaleLinear().domain([0, 100]).range([0, width])
    const yScaleLinear = d3.scaleLinear().domain([0, 100]).range([height, 0])
    const axisTemplate = d3
      .select('#darkmode')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom + 50)
      .style('background-color', 'black')
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top + 20})`)

    axisTemplate
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('height', height)
      .attr('width', width)
      .style('fill', 'black')

    axisTemplate
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(
        d3
          .axisBottom(xSaleLinear)
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

    axisTemplate.selectAll('.tick line').attr('stroke', 'white')
    axisTemplate.selectAll('.tick text').attr('stroke', 'white')

    // Add X axis label:
    axisTemplate
      .append('text')
      .attr('text-anchor', 'end')
      .attr('x', width)
      .attr('y', height + margin.top + 20)
      .text('X axis')
      .style('fill', 'white')

    // Y axis label:
    axisTemplate
      .append('text')
      .attr('text-anchor', 'end')
      .attr('transform', 'rotate(-90)')
      .attr('y', -margin.left + 10)
      .attr('x', -margin.top)
      .text('Y axis')
      .style('fill', 'white')

    axisTemplate
      .append('text')
      .attr('x', width / 2)
      .attr('y', -margin.top)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .style('fill', 'white')
      .style('text-decoration', 'underline')
      .text(`Dark mode`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <svg id="darkmode" />
}
