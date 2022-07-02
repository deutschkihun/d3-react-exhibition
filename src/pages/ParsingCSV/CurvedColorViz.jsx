import React, { useEffect } from 'react'
import * as d3 from 'd3'

export function CurvedColorViz({ data, height, margin }) {
  const pieArc = d3.arc().innerRadius(0).outerRadius(1000)
  const colorPie = d3.pie().value(1)
  useEffect(() => {
    const parsedCSV = d3
      .select('#parsedCSV')
      .style('width', '100%')
      .attr('height', height + margin.top + margin.bottom * 2)
      .append('g')
      .style('transform', 'translate(50%,50%)')

    colorPie(data).map(d => parsedCSV.append('path').attr('fill', d.data['RGB hex value']).attr('d', pieArc(d)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <svg id="parsedCSV" />
}
