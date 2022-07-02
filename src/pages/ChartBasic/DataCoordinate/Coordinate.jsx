/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react'
import * as d3 from 'd3'
import { getRandomInRange } from '../../../helper/randomCoordinateGenerator'

export function Coordinate({ width, height, margin, refresh, index }) {
  useEffect(() => {
    const random = Math.random().toFixed(1)
    const xScaleAxis = d3
      .scaleLinear()
      .domain([0, 100 * random])
      .range([0, width])
    const yScaleAxis = d3
      .scaleLinear()
      .domain([0, 100 * random])
      .range([height, 0])

    const axisTemplate = d3
      .select(`#datacoordinate${String(index)}`)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)

    refresh && axisTemplate.selectChildren('g').remove()
    refresh && axisTemplate.selectChildren('circle').remove()
    const axisTemplateElement = axisTemplate.append('g').attr('transform', `translate(${margin.left},${margin.top})`)
    axisTemplateElement.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(xScaleAxis))
    axisTemplateElement.append('g').call(d3.axisLeft(yScaleAxis))
    axisTemplateElement
      .selectAll(`#datacoordinate${String(index)}`)
      .data(getRandomInRange(0, 100 * random))
      .enter()
      .append('circle')
      .attr('cx', d => {
        return xScaleAxis(d.x)
      })
      .attr('cy', d => {
        return yScaleAxis(d.y)
      })
      .attr('r', 7)

    // Add X axis label:
    axisTemplateElement
      .append('text')
      .attr('text-anchor', 'end')
      .attr('x', width)
      .attr('y', height + margin.top + 20)
      .text('X axis')

    // Y axis label:
    axisTemplateElement
      .append('text')
      .attr('text-anchor', 'end')
      .attr('transform', 'rotate(-90)')
      .attr('y', -margin.left + 10)
      .attr('x', -margin.top)
      .text('Y axis')

    axisTemplateElement
      .append('text')
      .attr('x', width / 2)
      .attr('y', margin.top / 2)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .style('text-decoration', 'underline')
      .text(`Coordinate Sample ${index + 1}`)
  })
  return <svg id={`datacoordinate${String(index)}`} />
}
