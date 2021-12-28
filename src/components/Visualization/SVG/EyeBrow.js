import React from 'react'
import * as d3 from 'd3'

export const EyeBrow = () => {
    const leftEyeBrow = [{x: -20, y: -20}, {x: -45, y: -45}]
    const rightEyeBrow = [{x: 20, y: -20}, {x: 45, y: -45}]

    const eyebrow =  d3.line().x(function(d) {return d.x}).y(function(d) {return d.y})




    return (
    <>
        <path d={eyebrow(leftEyeBrow)} style={{stroke:"black",strokeWidth:"5"}} />
        <path d={eyebrow(rightEyeBrow)} style={{stroke:"black",strokeWidth:"5"}} />
    </>
)}

