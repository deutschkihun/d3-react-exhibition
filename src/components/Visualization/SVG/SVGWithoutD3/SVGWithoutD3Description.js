import React from 'react'
import {Code,Pre,Explanation} from '../SVG';

export const SVGWithoutD3Description = () => {
    return (
        <Explanation>
        <h3>Creat a {"<svg> tag"} and wrap circle with {"<circle> tag"} </h3>
        <Pre>
        <Code>
            <span>{'<svg>'}</span>
            <br/>
            <span>{'    <circle style={{fill:"#FFB900"}} stroke="black" cx="900" cy="100" r="48"></circle>'}</span>
            <br/>
            <span>{'<svg>'}</span>
        </Code>
        </Pre>
        <h4>fill: Color of shape</h4>
        <h4>stroke: Outline color of the shape</h4>
        <h4>cx / cy / r: X-axis coordination / y-axis coordination / radius of circle</h4>
    </Explanation>

    )
}

