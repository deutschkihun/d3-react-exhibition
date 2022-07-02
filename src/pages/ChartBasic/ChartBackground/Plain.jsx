import React, { useEffect } from 'react'
import * as d3 from 'd3'

export function Plain({ width, height, margin, index }) {
  useEffect(() => {
    const xScaleLinear = d3.scaleLinear().domain([0, 100]).range([0, width])
    const yScaleLinear = d3.scaleLinear().domain([0, 100]).range([height, 0])
    const axisTemplate = d3
      .select('#plain')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom + 50)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top + 20})`)

    axisTemplate.append('g').append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(xScaleLinear))
    axisTemplate.append('g').call(d3.axisLeft(yScaleLinear))

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
      .text(`Plain`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <svg id="plain" />
}
