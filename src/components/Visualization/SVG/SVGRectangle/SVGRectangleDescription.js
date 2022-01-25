import React from 'react'
import { Explanation,Pre,Code } from '../../../../helper/helperComponents'

export const SVGRectangleDescription = () => {
    return (
        <Explanation>
                    <Pre>
                    <Code>
                        <span>{'rect.append("rect")'}</span>
                        <br/>
                        <span>{'    .attr("y", 100)'}</span>
                        <br/>
                        <span>{'    .attr("width", 600)'}</span>
                        <br/>
                        <span>{'    .attr("height", 40)'}</span>
                        <br/>
                        <span>{'    .attr("stroke", "black")'}</span>
                        <br/>
                        <span>{'    .attr("fill", "#69a3b2")'}</span>
                        <br/>
                        <span>{'<svg id="rect"/>'}</span>
                    </Code>
                    </Pre>
        </Explanation>
    )
}

