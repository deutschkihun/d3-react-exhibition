import React, { useEffect } from 'react'
import * as d3 from 'd3'

export const AxisLabel = ({width,height,margin,band}) => {

    useEffect(() => {
            let x_scale_band = d3.scaleBand().domain(band).range([0,width])
            let y_scale_band = d3.scaleBand().domain(band).range([height,0])


            let axisTemplate = d3.select('#axislabeladvance')
                                  .attr('width',width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom)
                                  .append('g').attr('transform',`translate(${margin.left},${margin.top})`)
            axisTemplate.append('g').attr('transform',`translate(0,${height})`).call(d3.axisBottom(x_scale_band));
            axisTemplate.append('g').call(d3.axisLeft(y_scale_band));
          
            // Add X axis label:
            axisTemplate.append("text")
                        .attr("text-anchor", "end")
                        .attr("x", width)
                        .attr("y", height + margin.top + 20)
                        .text("X axis");

            // Y axis label:
            axisTemplate.append("text")
                        .attr("text-anchor", "end")
                        .attr("transform", "rotate(-90)")
                        .attr("y", -margin.left+10)
                        .attr("x", -margin.top)
                        .text("Y axis")

            axisTemplate.append("text")
                        .attr("x", (width / 2))             
                        .attr("y", (margin.top /2))
                        .attr("text-anchor", "middle")  
                        .style("font-size", "16px") 
                        .style("text-decoration", "underline")  
                        .text(`Custom Axis: Non numeric axis`);

        })
    return (
        <>
            <svg id="axislabeladvance"/>
        </>
    )
}

