import React, {useEffect} from 'react'
import * as d3 from 'd3'
import { getRandomColor } from '../Face/Face'


export const CircleBottom = ({width,height,centerX,centerY,radius,index,opacity}) => {
    useEffect(() => {
            d3.select('#Bottom'+String(index))
            .attr('width',width)
            .attr('height',height)
            .append('g')
            .attr('transform',`translate(${centerX},${centerY})`)
            .append('circle').attr("r",radius).style("fill",getRandomColor()).attr('fill-opacity',opacity)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <svg id={"Bottom"+String(index)}/>
    )
}
