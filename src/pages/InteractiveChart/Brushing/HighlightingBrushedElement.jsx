import React, { useEffect } from 'react'
import * as d3 from 'd3'
import { brushBoth } from '../../../helper/brush'
import { updateChart } from '../../../helper/chartUpdate'

export function HighlightingBrushedElement({ margin, width, height }) {
  useEffect(() => {
    const brushingBoth = d3
      .select('#HighlightingBrushedElement')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom * 2)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top * 4})`)

    brushingBoth
      .append('svg')
      .append('circle')
      .attr('cx', 200)
      .attr('cy', 200)
      .attr('r', 40)
      .attr('stroke', 'black')
      .attr('stroke-width', '1')
      .attr('fill', 'skyblue')
    brushingBoth.call(brushBoth(width, height)).on('start brush', (element, event, d) => updateChart(element, event)) // Each time the brush selection changes, trigger the 'updateChart' function
  }, [height, margin.bottom, margin.left, margin.right, margin.top, width])

  return <svg id="HighlightingBrushedElement" />
}
