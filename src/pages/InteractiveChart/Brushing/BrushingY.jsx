import React, { useEffect } from 'react'
import * as d3 from 'd3'
import { brushY } from '../../../helper/brush'

export function BrushingY({ margin, width, height }) {
  useEffect(() => {
    const brushingBoth = d3
      .select('#brushingY')
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
      .attr('stroke', 'red')
      .attr('stroke-width', '10')
      .attr('fill', 'black')
    brushingBoth.call(brushY(width, height))
  }, [height, margin.bottom, margin.left, margin.right, margin.top, width])

  return <svg id="brushingY" />
}
