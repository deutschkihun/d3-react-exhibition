import React, { useEffect } from 'react'
import * as d3 from 'd3'
import { color } from '../../../data';

export const MultipleChart = ({width,height,margin}) => {

            useEffect(() => {
              d3.csv('https://raw.githubusercontent.com/deutschkihun/vizDataRepo/main/csv/mock-data.csv').then((data) => {
              const group = d3.group(data, d => d.state)
              const svg = d3.select("#multiplechart")
                .selectAll("uniqueChart").data(group).enter()
                .append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                .append("g").attr("transform", `translate(${margin.left},${margin.top})`);
                
              const x = d3.scaleLinear()
                .domain(d3.extent(data, function(d) { return d.year; }))
                .range([ 0, width ]);
              svg
                .append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(x).ticks(3));

              
              //Add Y axis
              const y = d3.scaleLinear()
                .domain([0, d3.max(data, function(d) { return +d.pop; })])
                .range([ height, 0 ]);
              svg.append("g")
                .call(d3.axisLeft(y).ticks(5));
                
              svg.append("path")
                 .attr("fill", "none")
                 .attr("stroke", function(d){ return color(d[0]) })
                 .attr("stroke-width", 1.9)
                 .attr("d", function(d){
                  return d3.line()
                    .x(function(d) { return x(d.year); })
                    .y(function(d) { return y(d.pop); })
                    (d[1])
                  })


              svg.append("text")
                 .attr("x", (width / 2))             
                 .attr("y", (margin.top /2))
                 .attr("text-anchor", "middle")  
                 .style("font-size", "16px") 
                 .style("text-decoration", "underline")  
                 .text(function(d) { return d[0]})
                 .style("fill", function(d){ return color(d[0]) }) 
              })

            // eslint-disable-next-line react-hooks/exhaustive-deps
            }, []);
    return (
        <div id="multiplechart" /> 
    )
}

