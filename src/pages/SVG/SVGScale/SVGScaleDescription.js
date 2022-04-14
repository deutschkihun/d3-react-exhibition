/* eslint-disable no-template-curly-in-string */
import React from 'react'
import { Explanation,Pre } from '../../../ui-lib/lib'

export const SVGScaleDescription = () => {
    return (
        <Explanation>
                    <Pre>
                    <code>
                        <span>{'let scaler = d3.scaleLinear().domain([0,100]).range([0,100]) '}</span>
                        <br/>
                        <span>{'let scaler_modified = d3.scaleLinear().domain([0,50]).range([0,300])'}</span>
                        <br/>
                        <span>{'    <svg width={width * 2} height={height * 2}>'}</span>
                        <br/>
                        <span>{'        <g transform={`translate(${centerX},${centerY})`}>'}</span>
                        <br/>
                        <span>{'            <circle fill={"black"} stroke={stroke} r={radius} cx={scaler(20)} cy={scaler(20)}></circle>'}</span>
                        <br/>
                        <span>{'            <circle fill={"blue"} stroke={stroke} r={radius} cx={scaler_modified(20)} cy={scaler(20)}></circle>'}</span>
                        <br/>
                        <span>{'            <circle fill={"yellow"} stroke={stroke} r={radius} cx={scaler(20)} cy={scaler_modified(20)}></circle>'}</span>
                        <br/>
                        <span>{'            <circle fill={"red"} stroke={stroke} r={radius} cx={scaler_modified(20)} cy={scaler_modified(20)}></circle>'}</span>
                        
                        <span>{'        </g>'}</span>
                        <br/>
                        <span>{'    </svg>'}</span>
                    </code>
                    </Pre>
        </Explanation>
    )
}

