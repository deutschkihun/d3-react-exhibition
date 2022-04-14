import React, {useEffect} from 'react'
import * as d3 from 'd3'
import {range} from 'd3'


export const Flag = ({width,height,centerX,centerY,radius,strokeWidth}) => {
    const array = range(5);
    const loop = range(2);
    const cx = [110,240,370,175,305]
    const cy = [100,100,100,175,175]
    const color = ["blue","black","red","yellow","green"]

    useEffect(() => {
        // eslint-disable-next-line array-callback-return
        loop.map((k) => {
            let olympicFlag = d3.select('#olympicflag'+String(k))
            .attr('width',width)
            .attr('height',height)
            .append('g')
            .attr('transform',`translate(${centerX},${centerY})`)
        
            array.map((i) => (
                olympicFlag.append('circle')
                .attr('r',radius)
                .attr('cx',cx[i])
                .attr('cy',cy[i])
                .attr('stroke',color[i])
                .attr('stroke-width',strokeWidth)
                .style("fill-opacity","0")
            ))
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {loop.map((k) => (
                <svg id={"olympicflag"+String(k)} key={k}/>
            ))}
        </>
    )
}
