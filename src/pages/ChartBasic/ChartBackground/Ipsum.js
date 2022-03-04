import React, { useEffect } from 'react'
import * as d3 from 'd3'

export const Ipsum = ({width,height,margin,index}) => {

    useEffect(() => {
            let x_scale_linear = d3.scaleLinear().domain([0,100]).range([0,width])
            let y_scale_linear = d3.scaleLinear().domain([0,100]).range([height,0])            
            let axisTemplate = d3.select('#ipsum')
                                .attr('width',width + margin.left + margin.right)
                                .attr('height', height + margin.top + margin.bottom + 50)
                                .append('g')
                                .attr('transform',`translate(${margin.left},${margin.top + 20})`)
                                
            axisTemplate.append('g')
                        .attr('transform',`translate(0,${height})`)
                        .call(d3.axisBottom(x_scale_linear)
                        .tickSize(-height*1.3).ticks(10))
                        .select('.domain').remove()
            axisTemplate.append('g')
                        .call(d3.axisLeft(y_scale_linear).tickSize(-width*1.3).ticks(7))
                        .select('.domain').remove()
            axisTemplate.selectAll(".tick line").attr("stroke", "#EBEBEB")


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
                .attr("y", (-margin.top))
                .attr("text-anchor", "middle")  
                .style("font-size", "16px") 
                .style("text-decoration", "underline")  
                .text(`Ipsum style`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <svg id="ipsum"/>
        </>
    )
}
