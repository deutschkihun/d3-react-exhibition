import React, { useEffect } from 'react'
import * as d3 from 'd3'

export const APPLArea = ({width,height,margin}) => {

    useEffect(() => {    
            let appleAreaChart = d3.select('#applArea')
            .attr('width',width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom * 2)
            .append('g')
              .attr('transform',`translate(${margin.left},${margin.top * 4})`)
                         
            d3.csv('https://raw.githubusercontent.com/deutschkihun/vizDataRepo/main/csv/APPLE.csv',(d) => {
              return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
            }).then((data) => {
    
              const x = d3.scaleTime()
                .domain(d3.extent(data, function(d) { return d.date }))
                .range([ 0, width ]);

              appleAreaChart.append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(x));
          
              const y = d3.scaleLinear()
                .domain([0, 200])
                  .range([ height, 0 ]);
              appleAreaChart.append("g")
                .call(d3.axisLeft(y));
          
              appleAreaChart.append("path")
                .datum(data)
                .attr("fill", "#819993")
                .attr("stroke", "green")
                .attr("stroke-width", 1.5)
                .attr("d", d3.area()
                  .x(function(d) { return x(d.date) })
                  .y0(y(0))
                  .y1(function(d) { return y(d.value) })
                )

              appleAreaChart.append("text")
                .attr("text-anchor", "end")
                .attr("x", width)
                .attr("y", height + margin.top + 20)
                .text("Year");

              appleAreaChart.append("text")
                .attr("text-anchor", "end")
                .attr("transform", "rotate(-90)")
                .attr("y", -margin.left+10)
                .attr("x", -margin.top)
                .text("Price in $")

              appleAreaChart.append("text")
                .attr("x", (width / 2))             
                .attr("y", (margin.top /2))
                .attr("text-anchor", "middle")  
                .style("font-size", "16px") 
                .style("text-decoration", "underline")  
                .text(`Apple stock evolution`);
          })
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <svg id="applArea"/>
        </>
    )
}
