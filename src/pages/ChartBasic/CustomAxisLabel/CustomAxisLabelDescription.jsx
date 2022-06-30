/* eslint-disable no-template-curly-in-string */
import React from 'react'
import {Pre,Explanation} from '../../../ui-lib/lib';

export const CustomAxisLabelDescription = () => {
    return (
        <Explanation>
            <Pre>
                <code>
                    <span>{'const band = ["C","B","B+","A","A+","A++"]'}</span>
                    <br/>
                    <span>{'            let x_scale_pointer = d3.scaleBand().domain(pointer).range([0,width])'}</span>
                    <br/>
                    <span>{'            let y_scale_pointer = d3.scaleBand().domain(pointer).range([height,0])'}</span>
                    <br/>
                    <span>{'            let axisTemplate = d3.select("#axislabel")'}</span>
                    <br/>
                    <span>{'                     .attr("width",width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom)'}</span>
                    <br/>
                    <span>{'                     .append("g").attr("transform",`translate(${margin.left},${margin.top})`)'}</span>
                    <br/>
                    <span>{'            axisTemplate.append("g").attr("transform",`translate(0,${height})`)'}</span>
                    <br/>
                    <span>{'                                    .call(d3.axisBottom(x_scale_pointer))'}</span>
                    <br/>
                    <span>{'                                    .selectAll("text")'}</span>
                    <br/>
                    <span>{'                                    .attr("transform", "translate(15,0)")'}</span>
                    <br/>
                    <span>{'                                    .style("text-anchor", "end")'}</span>
                    <br/>
                    <span>{'                                    .style("fill", "#69a3b2")'}</span>
                    <br/>
                    <span>{'             axisTemplate.append("g").call(d3.axisBottom(y_scale_pointer))'}</span>
                    <br/>
                    <span>{'                                     .selectAll("text")'}</span>
                    <br/>
                    <span>{'                                     .attr("transform", "translate(-15,-25)rotate(-90)")'}</span>
                    <br/>
                    <span>{'                                     .style("text-anchor", "end")'}</span>
                    <br/>
                    <span>{'                                     .style("fill", "#69a3b2")'}</span>
                </code>
            </Pre>
        </Explanation>
    )
}

