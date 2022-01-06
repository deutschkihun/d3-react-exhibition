import React, {useEffect} from 'react'
import * as d3 from 'd3'
import { getRandomColor } from '../Face'


export const CircleTop = ({width,height,centerX,centerY,radius,index,opacity}) => {
    useEffect(() => {
            d3.select('#Top'+String(index))
            .attr('width',width)
            .attr('height',height)
            .append('g')
            .attr('transform',`translate(${centerX},${centerY})`)
            .append('circle').attr("r",radius).style("fill",getRandomColor()).attr('fill-opacity',opacity)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <svg id={"Top"+String(index)}/>
        </>
    )
}
