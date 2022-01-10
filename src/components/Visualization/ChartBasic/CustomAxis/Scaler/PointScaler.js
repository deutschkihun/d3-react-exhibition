import React, { useEffect } from 'react'
import * as d3 from 'd3'

export const PointScaler = ({width,height,margin,pointer}) => {

    useEffect(() => {
            const random = Math.random().toFixed(1)
            let x_scale_linear = d3.scaleLinear().domain([0,100*random]).range([0,width])
            let y_scale_linear = d3.scaleLinear().domain([0,100*random]).range([height,0])            
            let axisTemplate = d3.select('#pointScaler')
                                .attr('width',width + margin.left + margin.right)
                                .attr('height', height + margin.top + margin.bottom)
                                .append('g')
                                .attr('transform',`translate(${margin.left},${margin.top})`)

            axisTemplate.append('g').append('g').attr('transform',`translate(0,${height})`).call(d3.axisBottom(x_scale_linear));
            axisTemplate.append('g').call(d3.axisLeft(y_scale_linear));
            let x_scale_point = d3.scalePoint().domain(pointer).range([0,width])
            let y_scale_point = d3.scalePoint().domain(pointer).range([height,0])

       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <svg id="pointScaler"/>
        </>
    )
}

