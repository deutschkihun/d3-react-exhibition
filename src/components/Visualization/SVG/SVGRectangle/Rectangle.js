import React, {useEffect} from 'react'
import * as d3 from 'd3'
import { getRandomColor } from '../Face'


export const Rectangle = ({width,height,centerX,centerY,index,stroke,strokeWidth}) => {
    useEffect(() => {
            d3.select('#rectangle'+String(index))
            .attr('width',width)
            .attr('height',height)
            .append('g')
            .append('rect')
            .attr('width',width)
            .attr('height',height)
            .attr('transform',`translate(${centerX},${centerY})`)
            .style("fill",getRandomColor())
            .attr('stroke',stroke)
            .attr('stroke-width',strokeWidth)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <svg id={"rectangle"+String(index)}/>
        </>
    )
}
