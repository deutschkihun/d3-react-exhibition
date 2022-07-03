import React, { useEffect } from 'react'
import * as d3 from 'd3'

export function PGArea({ width, height, margin }) {
  useEffect(() => {
    const pgAreaChart = d3
      .select('#pgArea')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom * 2)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top * 4})`)

    d3.csv('https://raw.githubusercontent.com/deutschkihun/vizDataRepo/main/csv/PG.csv', d => {
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

      pgAreaChart.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x))

      const y = d3.scaleLinear().domain([60, 200]).range([height, 0])
      pgAreaChart.append('g').call(d3.axisLeft(y))

      pgAreaChart
        .append('path')
        .datum(data)
        .attr('fill', '#819993')
        .attr('stroke', 'orange')
        .attr('stroke-width', 1.5)
        .attr(
          'd',
          d3
            .area()
            .x(d => {
              return x(d.date)
            })
            .y0(y(60))
            .y1(d => {
              return y(d.value)
            }),
        )

      pgAreaChart
        .append('text')
        .attr('text-anchor', 'end')
        .attr('x', width)
        .attr('y', height + margin.top + 20)
        .text('Year')

      pgAreaChart
        .append('text')
        .attr('text-anchor', 'end')
        .attr('transform', 'rotate(-90)')
        .attr('y', -margin.left + 10)
        .attr('x', -margin.top)
        .text('Price in $')

      pgAreaChart
        .append('text')
        .attr('x', width / 2)
        .attr('y', margin.top / 2)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('text-decoration', 'underline')
        .text(`Procter and Gamble stock evolution with area`)
    })
  }, [height, margin.bottom, margin.left, margin.right, margin.top, width])

  return <svg id="pgArea" />
}
