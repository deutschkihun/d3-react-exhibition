import React, {useEffect} from 'react'
import * as d3 from 'd3'
import { getRandomColor } from '../Face'


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


    /*

     <svg id="example" width={width} height={height}> 
            <g transform={`translate(${centerX},${centerY})`}>
                <circle fill={getRandomColor()} stroke={stroke} r={radius}></circle>
            </g>
        </svg>


    var svg = d3.select("#ex_rect1").attr('width','55vw')

svg.append("circle")
    .attr("cx", 6).attr("cy", 6).attr("r", 70).style("fill", "blue").attr('fill-opacity','0.6');
svg.append("circle")
    .attr("cx", 10).attr("cy", 10).attr("r", 80).style("fill", "black").attr('fill-opacity','0.6');
svg.append("circle")
    .attr("cx", 10).attr("cy", 10).attr("r", 90).style("fill", "yello").attr('fill-opacity','0.6');
svg.append("circle")
    .attr("cx", 10).attr("cy", 10).attr("r", 100).style("fill", "grey").attr('fill-opacity','0.6');*/

    return (
        <svg id={"Bottom"+String(index)}/>
    )
}
