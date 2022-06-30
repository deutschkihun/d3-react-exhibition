import React, { useEffect } from 'react'
import * as d3 from 'd3'

export const MultipleChartDropdown = ({width,height,margin}) => {

  useEffect(() => {

    const svg = d3.select("#multiplechartdropdown")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    d3.csv('https://raw.githubusercontent.com/deutschkihun/vizDataRepo/main/csv/mock-data.csv').then((data) => {
    
      const uniqueKey = Array.from(new Set(data.map(d => d.state)))
      const x = d3.scaleLinear()
        .domain(d3.extent(data, function(d) { return d.year; }))
        .range([ 0, width ]);
      const y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return +d.pop; })])
        .range([ height, 0 ]);
      svg.append("g")
          .attr("transform", `translate(0, ${height})`)
          .call(d3.axisBottom(x).ticks(3));
      svg.append("g")
          .call(d3.axisLeft(y).ticks(5));

      let line = svg
        .append("path")
        .datum(data.filter(function(d){return d.state==="California"}))
        .attr("d", d3.line()
            .x(function(d) { return x(d.year); })
            .y(function(d) { return y(d.pop); })
          )
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 1.9)

     d3.select("#selectButton")
       .selectAll('myOptions')
       .data(uniqueKey)
       .enter()
       .append('option')
       .text(function (d) { return d; }) // text showed in the menu
       .attr("value", function (d) { return d; }) // corresponding value returned by the button

      d3.select("#selectButton").on("change", () => {
        const selectedOption = d3.select("#selectButton").property('value')
        line.datum(data.filter(d => {return d.state === selectedOption}))
        .transition()
        .duration(1000)  
        .attr("d", d3.line()
          .x(function(d) { return (d.year) })
          .y(function(d) { return (d.pop) })
        )
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 1.9)      
      })
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <select id="selectButton" />
      <div id="multiplechartdropdown" /> 
    </>
  )
  
}

