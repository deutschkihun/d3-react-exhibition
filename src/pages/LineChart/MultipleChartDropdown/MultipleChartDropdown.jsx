import React, { useEffect } from 'react'
import * as d3 from 'd3'

export function MultipleChartDropdown({ width, height, margin }) {
  useEffect(() => {
    const svg = d3
      .select('#multiplechartdropdown')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    d3.csv('https://raw.githubusercontent.com/deutschkihun/vizDataRepo/main/csv/mock-data.csv').then(data => {
      const uniqueKey = Array.from(new Set(data.map(d => d.state)))
      const x = d3
        .scaleLinear()
        .domain(
          d3.extent(data, d => {
            return d.year
          }),
        )
        .range([0, width])
      const y = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, d => {
            return +d.pop
          }),
        ])
        .range([height, 0])
      svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x).ticks(3))
      svg.append('g').call(d3.axisLeft(y).ticks(5))

      const line = svg
        .append('path')
        .datum(
          data.filter(d => {
            return d.state === 'California'
          }),
        )
        .attr(
          'd',
          d3
            .line()
            .x(k => {
              return x(k.year)
            })
            .y(k => {
              return y(k.pop)
            }),
        )
        .attr('fill', 'none')
        .attr('stroke', 'red')
        .attr('stroke-width', 1.9)

      d3.select('#selectButton')
        .selectAll('myOptions')
        .data(uniqueKey)
        .enter()
        .append('option')
        .text(d => {
          return d
        })
        .attr('value', d => {
          return d
        })

      d3.select('#selectButton').on('change', () => {
        const selectedOption = d3.select('#selectButton').property('value')
        line
          .datum(
            data.filter(d => {
              return d.state === selectedOption
            }),
          )
          .transition()
          .duration(1000)
          .attr(
            'd',
            d3
              .line()
              .x(k => {
                return k.year
              })
              .y(k => {
                return k.pop
              }),
          )
          .attr('fill', 'none')
          .attr('stroke', 'red')
          .attr('stroke-width', 1.9)
      })
    })
  }, [height, margin.bottom, margin.left, margin.right, margin.top, width])

  return (
    <>
      <select id="selectButton" aria-label="button" />
      <div id="multiplechartdropdown" />
    </>
  )
}
