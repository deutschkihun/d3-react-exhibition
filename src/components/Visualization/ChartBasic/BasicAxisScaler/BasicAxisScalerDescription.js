/* eslint-disable no-template-curly-in-string */
import React from 'react'
import {Code,Pre,Explanation} from '../../SVG/SVG';

export const BasicAxisScalerDescription = () => {
    return (
        <Explanation>
            <Pre>
                <Code>
                    <span>{'let x_scale_linear = d3.scaleLinear().domain([0,100]).range([0,width])'}</span>
                    <br/>
                    <span>{'let y_scale_linear = d3.scaleLinear().domain([0,100]).range([height,0])'}</span>
                    <br/>
                    <span>{'let axisTemplate = d3.select("#linearScaler")'}</span>
                    <br/>
                    <span>{'let axisTemplate = d3.select("#linearScaler")'}</span>
                    <br/>
                    <span>{'                    .attr("width",width + margin.left + margin.right)'}</span>
                    <br/>
                    <span>{'                    .attr("height", height + margin.top + margin.bottom)'}</span>
                    <br/>
                    <span>{'                    .attr("height", height + margin.top + margin.bottom)'}</span>
                    <br/>
                    <span>{'                    .append("g")'}</span>
                    <br/>
                    <span>{'                    .attr("transform",`translate(${margin.left},${margin.top})`)'}</span>
                    <br/>
                    <span>{'                    .attr("transform",`translate(${margin.left},${margin.top})`)'}</span>
                    <br/>
                    <span>{'axisTemplate.append("g").append("g").attr("transform",`translate(0,${height})`).call(d3.axisBottom(x_scale_linear))'}</span>
                    <br/>
                    <span>{'axisTemplate.append("g").call(d3.axisLeft(y_scale_linear));'}</span>
                    <br/>
                    <br/>
                    <span>{'let x_scale_log = d3.scaleLog().domain([1,1000]).range([0,width]).base(2)'}</span>
                    <br/>
                    <span>{'let y_scale_log = d3.scaleLog().domain([1,1000]).range([height,0]).base(2)'}</span>
                    <br/>
                    <span>{'let axisTemplate = d3.select("#linearScaler")'}</span>
                    <br/>
                    <span>{'let axisTemplate = d3.select("#linearScaler")'}</span>
                    <br/>
                    <span>{'                    .attr("width",width + margin.left + margin.right)'}</span>
                    <br/>
                    <span>{'                    .attr("height", height + margin.top + margin.bottom)'}</span>
                    <br/>
                    <span>{'                    .attr("height", height + margin.top + margin.bottom)'}</span>
                    <br/>
                    <span>{'                    .append("g")'}</span>
                    <br/>
                    <span>{'                    .attr("transform",`translate(${margin.left},${margin.top})`)'}</span>
                    <br/>
                    <span>{'                    .attr("transform",`translate(${margin.left},${margin.top})`)'}</span>
                    <br/>
                    <span>{'axisTemplate.append("g").append("g").attr("transform",`translate(0,${height})`).call(d3.axisBottom(x_scale_log))'}</span>
                    <br/>
                    <span>{'axisTemplate.append("g").call(d3.axisLeft(y_scale_log));'}</span>
                    <br/>
                </Code>
            </Pre>
        </Explanation>
    )
}

