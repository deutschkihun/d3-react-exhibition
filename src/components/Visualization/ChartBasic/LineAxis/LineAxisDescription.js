/* eslint-disable no-template-curly-in-string */
import React from 'react'
import { Explanation,Pre,Code } from '../../SVG/SVG'

export const LineAxisDescription = () => {
    return (
        <Explanation>
                <Pre>
                        <Code>
                            <span>{'useEffect(() => {'} </span>
                            <br/>
                            <span>{'    array.reverse().map((i) => { '} </span>
                            <br/>
                            <span>{'        const random = Math.random().toFixed(1)'} </span>
                            <br/>
                            <span>{'        let x_scale_axis = d3.scaleLinear().domain([0,100*random]).range([0,width])'} </span>
                            <br/>
                            <span>{'        let y_scale_axis = d3.scaleLinear().domain([0,100*random]).range([height,0]) '} </span>
                            <br/>
                            <span>{'        let axisTemplate = d3.select("#chart"+String(i)) '} </span>
                            <br/>
                            <span>{'            .attr("width",width + margin.left + margin.right) '} </span>
                            <br/>
                            <span>{'            .attr("width",width + margin.left + margin.right)'} </span>
                            <br/>
                            <span>{'            .append("g")'} </span>
                            <br/>
                            <span>{'            .attr("transform",`translate(${margin.left},${margin.top})`) '} </span>     
                            <br/> 
                            <span>{'       axisTemplate.append("g").append("g").attr("transform",`translate(0,${height})`).call(d3.axisBottom(x_scale_axis))'} </span>
                            <br/>
                            <span>{'       axisTemplate.append("g").call(d3.axisLeft(y_scale_axis))'} </span>
                            <br/>
                            <span>{'        })'} </span>
                            <br/>
                            <span>{'       }, [])'} </span>
                            <br/>
                            <span>{'        return ('} </span>
                            <br/>
                            <span>{'              <>'} </span>
                            <br/>
                            <span>{'                  {array.reverse().map((k) =>('} </span>
                            <br/>
                            <span>{'                         <svg id={"chart"+String(k)}/>'} </span>
                            <br/>
                            <span>{'                  ))}'} </span>
                            <br/>
                            <span>{'              </>'} </span>  
                            <br/>
                            <span>{'            )'} </span>                                                                                                        
                        </Code>
                </Pre>
                </Explanation>
    )
}

