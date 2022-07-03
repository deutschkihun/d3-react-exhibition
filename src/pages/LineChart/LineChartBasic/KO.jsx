import React, { useEffect } from 'react'
import * as d3 from 'd3'

export function KO({ width, height, margin }) {
  useEffect(() => {
    const koChart = d3
      .select('#ko')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom * 2)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top * 4})`)

    d3.csv('https://raw.githubusercontent.com/deutschkihun/vizDataRepo/main/csv/KO.csv', d => {
      return { date: d3.timeParse('%Y-%m-%d')(d.date), value: d.value }
    }).then(data => {
      const x = d3
        .scaleTime()
        .domain(
          d3.extent(data, d => {
            return d.date
          }),
        )
        .range([0, width])

      koChart.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x))

      const y = d3
        .scaleLinear()
        .domain([
          d3.min(data, d => {
            return d.value
          }) - 3,
          d3.max(data, d => {
            return d.value
          }),
        ])
        .range([height, 0])
      koChart.append('g').call(d3.axisLeft(y))

      koChart
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
              return x(d.date)
            })
            .y(d => {
              return y(d.value)
            }),
        )

      koChart
        .append('text')
        .attr('text-anchor', 'end')
        .attr('x', width)
        .attr('y', height + margin.top + 20)
        .text('Year')

      koChart
        .append('text')
        .attr('text-anchor', 'end')
        .attr('transform', 'rotate(-90)')
        .attr('y', -margin.left + 10)
        .attr('x', -margin.top)
        .text('Price in $')

      koChart
        .append('text')
        .attr('x', width / 2)
        .attr('y', margin.top / 2)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('text-decoration', 'underline')
        .text(`Coca cola stock evolution`)
    })
  }, [height, margin.bottom, margin.left, margin.right, margin.top, width])

  return <svg id="ko" />
}
