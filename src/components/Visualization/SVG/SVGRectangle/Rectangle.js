import React, {useEffect} from 'react'
import * as d3 from 'd3'
import { randomColorGenerator } from '../../../../helper/randomColorGenerator'


export const Rectangle = ({width,height,centerX,centerY,index,stroke,strokeWidth,refresh}) => {
    useEffect(() => {
        const circletopSVG = d3.select('#rectangle'+String(index)).attr('width',width).attr('height',height)
        refresh && circletopSVG.select('g').remove()
        circletopSVG.append('g')
                    .append('rect')
                    .attr('width',width)
                    .attr('height',height)
                    .attr('transform',`translate(${centerX},${centerY})`)
                    .style("fill",randomColorGenerator())
                    .attr('stroke',stroke)
                    .attr('stroke-width',strokeWidth)
    })

    return (
        <>
            <svg id={"rectangle"+String(index)}/>
        </>
    )
}
