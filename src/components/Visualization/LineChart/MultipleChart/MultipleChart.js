import React, { useEffect } from 'react'
import * as d3 from 'd3'

export const MultipleChart = ({width,height,margin}) => {

            d3.csv('https://raw.githubusercontent.com/deutschkihun/vizDataRepo/main/csv/us_state_pop.csv').then((data) => {
            // data grouping
            const grouping = d3.group(data, d => d.state)
            console.log("grouping",grouping)
            const uniqueKeys = new Set(data.map(d=>d.state))
            const multiplechart = d3.select("#multiplechart")
                                    .selectAll("uniqueChart")
                                    .data(grouping)
                                    .enter()
                                    .append("svg")
                                      .attr("width", width + margin.left + margin.right)
                                      .attr("height", height + margin.top + margin.bottom)
                                    .append("g")
                                      .attr("transform", 
                                            `translate(${margin.left},${margin.top})`);
                     
            /*console.log(multiplechart._groups[0])
            multiplechart._groups[0].forEach(element => {
                console.log(element.__data__)
            });*/

             // Add X axis --> it is a date format
                                    const x = d3.scaleLinear()
                                    .domain(d3.extent(data, function(d) { return d.year; }))
                                    .range([ 0, width ]);
                                    multiplechart
                                    .append("g")
                                    .attr("transform", `translate(0, ${height})`)
                                    .call(d3.axisBottom(x).ticks(3));

                                    console.log(d3.max(data, function(d) { return +d.population; }))
                                    //Add Y axis
                                    const y = d3.scaleLinear()
                                    .domain([0, d3.max(data, function(d) { return +d.population; })])
                                    .range([ height, 0 ]);
                                    multiplechart.append("g")
                                    .call(d3.axisLeft(y).ticks(5));


            
            /*const x = d3.scaleLinear()
                        .domain(d3.extent(data, function(d) { return d.year; }))
                        .range([ 0, width ]);
            multiplechart.append("g")
                         .attr("transform", `translate(0, ${height})`)
                         .call(d3.axisBottom(x));

            
            const y = d3.scaleLinear()
                        .domain([0, d3.max(data, (d) => {return d.population})])
                        .range([ height, 0 ]);
            multiplechart.append("g")
                        .call(d3.axisLeft(y));*/

            
            // color palette
            const color = d3.scaleOrdinal()
            //.domain(allKeys)
            .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])
          })
            
    // eslint-disable-next-line react-hooks/exhaustive-deps

    return (
        <div id="multiplechart">
        </div>
    )
}

