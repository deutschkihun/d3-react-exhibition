import React, { useEffect } from 'react'
import * as d3 from 'd3'

export const KO = ({width,height,margin}) => {

    useEffect(() => {    
            let appleChart = d3.select('#ko')
            .attr('width',width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom * 2)
            .append('g')
              .attr('transform',`translate(${margin.left},${margin.top * 4})`)
                         
            d3.csv('https://raw.githubusercontent.com/deutschkihun/vizDataRepo/main/csv/KO.csv',(d) => {
              return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
            }).then((data) => {
              const x = d3.scaleTime()
                .domain(d3.extent(data, function(d) { return d.date }))
                .range([ 0, width ]);
                
              appleChart.append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(x));
          
              const y = d3.scaleLinear()
                .domain([d3.min(data, function(d) { return d.value; })-3, d3.max(data, function(d) { return d.value; })])
                  .range([ height, 0 ]);
                appleChart.append("g")
                .call(d3.axisLeft(y));
          
              appleChart.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", "steelblue")
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
                .text(`Coca cola stock evolution`);
          })
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <svg id="ko"/>
        </>
    )
}

