import React, { useEffect } from 'react'
import * as d3 from 'd3'
import {range} from 'd3'

export const Axis = ({width,height,margin,pointer,band}) => {
    const array = range(4);

    useEffect(() => {

        // eslint-disable-next-line array-callback-return
        array.reverse().map((i) => {
            const random = Math.random().toFixed(1)
            let x_scale_linear = d3.scaleLinear().domain([0,100*random]).range([0,width])
            let y_scale_linear = d3.scaleLinear().domain([0,100*random]).range([height,0])

            let x_scale_log = d3.scaleLog().domain([1,100]).range([0,width]) // default is 10 
            let y_scale_log = d3.scaleLog().domain([1,100]).range([height,0]).base(10) // default is 10 

            let x_scale_point = d3.scalePoint().domain(pointer).range([0,width])
            let y_scale_point = d3.scalePoint().domain(pointer).range([height,0])

            let x_scale_band = d3.scaleBand().domain(band).range([0,width])
            let y_scale_band = d3.scaleBand().domain(band).range([height,0])

            /*
            // Create the scale
                var x = d3.scaleBand()
                    .domain(["Long name", "Another One", "Here", "And this is", "The end", "ouuuu", "not yet"])         // This is what is written on the Axis: from 0 to 100
                    .range([0, 800]);         // Note it is reversed

                // Draw the axis
                svg
                .append("g")
                .attr("transform", "translate(100,100)")      // This controls the rotate position of the Axis
                .call(d3.axisBottom(x))
                .selectAll("text")
                    .attr("transform", "translate(-10,10)rotate(-45)")
                    .style("text-anchor", "end")
                    .style("font-size", 20)
                    .style("fill", "#69a3b2")
            */


            let axisTemplate = d3.select('#chart_scaler'+String(i))
            .attr('width',width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform',`translate(${margin.left},${margin.top})`)
        
        axisTemplate.append('g').append('g').attr('transform',`translate(0,${height})`).call(d3.axisBottom(x_scale_log));
        axisTemplate.append('g').call(d3.axisLeft(y_scale_log));
        
        
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {array.reverse().map((k) =>(
                <svg id={"chart_scaler"+String(k)}/>
            ))}
        </>
    )
}

