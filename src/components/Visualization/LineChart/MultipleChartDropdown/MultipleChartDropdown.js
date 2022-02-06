import React, { useEffect } from 'react'
import * as d3 from 'd3'

export const MultipleChartDropdown = ({width,height,margin}) => {

            useEffect(() => {
              d3.csv('https://raw.githubusercontent.com/deutschkihun/vizDataRepo/main/csv/mock-data.csv').then((data) => {
              
              const uniqueKey = new Set(data.map(d => d.state))
              d3.select("#selectButton")
                .selectAll('myOptions')
                .data(uniqueKey)
                .enter()
                .append('option')
                .text(function (d) { return d; }) // text showed in the menu
                .attr("value", function (d) { return d; }) // corresponding value returned by the button
              
              const svg = d3.select("#multiplechartdropdown")
                            .append("svg")
                            .attr("width", width + margin.left + margin.right)
                            .attr("height", height + margin.top + margin.bottom)
                            .append("g")
                            .attr("transform", `translate(${margin.left},${margin.top})`);
                               
              const color = d3.scaleOrdinal()
                              .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])
              
              const x = d3.scaleLinear()
                .domain(d3.extent(data, function(d) { return d.year; }))
                .range([ 0, width ]);
              svg
                .append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(x).ticks(3));

              const y = d3.scaleLinear()
                .domain([0, d3.max(data, function(d) { return +d.pop; })])
                .range([ height, 0 ]);
              svg.append("g")
                .call(d3.axisLeft(y).ticks(5));
           
              var line = svg.append('g')
                            .append("path")
                            .datum(data.filter(function(d){return d.state === uniqueKey[0]}))
                            .attr("d", d3.line()
                              .x(function(d) { return x(d.year) })
                              .y(function(d) { return y(+d.pop) }))
                .attr("stroke", function(d){ return color(0) })
                .style("stroke-width", 4)
                .style("fill", "none")


                function update(selectedGroup) {
                  var dataFilter = data.filter(function(d){return d.state === selectedGroup})
                  line
                      .datum(dataFilter)
                      .transition()
                      .duration(1000)
                      .attr("d", d3.line()
                        .x(function(d) { return x(d.year) })
                        .y(function(d) { return y(+d.pop) })
                      )
                      .attr("stroke", function(d){ return color(selectedGroup) })
                }
  
                d3.select("#selectButton").on("change", (e,d) => 
                  console.log(e,d)
                  //console.log("selectedOption",selectedOption)
                  //update(selectedOption)
              )

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

