import React, {useEffect} from 'react'
import * as d3 from 'd3'
import { randomColorGenerator } from '../../../helper/randomColorGenerator'

export const CircleBottom = ({width,height,centerX,centerY,index,refresh,radius,opacity}) => {
    useEffect(() => {
        const circlebottomSVG = d3.select('#Bottom'+String(index)).attr('width',width).attr('height',height)
        refresh && circlebottomSVG.select('g').remove()
        circlebottomSVG.append('g')
            .attr('transform',`translate(${centerX},${centerY})`)
            .append('circle').attr("r",radius).style("fill",randomColorGenerator()).attr('fill-opacity',opacity)
        })

    return (
        <>
            <svg id={"Bottom"+String(index)}/>
        </>
    )
}
