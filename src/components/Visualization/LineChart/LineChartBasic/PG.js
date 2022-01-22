import React, { useEffect } from 'react'
import * as d3 from 'd3'

export const PG = ({width,height,margin}) => {

    useEffect(() => {    
            let appleChart = d3.select('#pg')
            .attr('width',width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom * 2)
            .append('g')
              .attr('transform',`translate(${margin.left},${margin.top * 4})`)
                         
            d3.csv('https://raw.githubusercontent.com/deutschkihun/vizDataRepo/main/csv/PG.csv',

            function(d){
              return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
            }).then(
          
            // Now I can use this dataset:
            function(data) {
          
              const x = d3.scaleTime()
                .domain(d3.extent(data, function(d) { return d.date }))
                .range([ 0, width ]);

          
                appleChart.append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(x));
          
              // Add Y axis
              const y = d3.scaleLinear()
                .domain([60, 200])
                  .range([ height, 0 ]);
                appleChart.append("g")
                .call(d3.axisLeft(y));
          
              // Add the line
              appleChart.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", "grey")
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                  .x(function(d) { return x(d.date) })
                  .y(function(d) { return y(d.value) })
                )

              appleChart.append("text")
                .attr("text-anchor", "end")
                .attr("x", width)
                .attr("y", height + margin.top + 20)
                .text("Year");

              // Y axis label:
              appleChart.append("text")
                .attr("text-anchor", "end")
                .attr("transform", "rotate(-90)")
                .attr("y", -margin.left+10)
                .attr("x", -margin.top)
                .text("Price in $")

                appleChart.append("text")
                .attr("x", (width / 2))             
                .attr("y", (margin.top /2))
                .attr("text-anchor", "middle")  
                .style("font-size", "16px") 
                .style("text-decoration", "underline")  
                .text(`Procter and Gamble evolution`);
          
          })
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <svg id="pg"/>
        </>
    )
}

