import React, { useEffect } from 'react'
import * as d3 from 'd3'
import {range} from 'd3'

export const Axis = ({width,height,margin}) => {
    const array = range(4);

    useEffect(() => {

        // eslint-disable-next-line array-callback-return
        array.reverse().map((i) => {
            const random = Math.random().toFixed(1)
            let x_scale_axis = d3.scaleLinear().domain([0,100*random]).range([0,width])
            let y_scale_axis = d3.scaleLinear().domain([0,100*random]).range([height,0])

            let axisTemplate = d3.select('#chart'+String(i))
            .attr('width',width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform',`translate(${margin.left},${margin.top})`)
        
        axisTemplate.append('g').append('g').attr('transform',`translate(0,${height})`).call(d3.axisBottom(x_scale_axis));
        axisTemplate.append('g').call(d3.axisLeft(y_scale_axis));
        
        
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {array.reverse().map((k) =>(
                <svg id={"chart"+String(k)}/>
            ))}
        </>
    )
}

