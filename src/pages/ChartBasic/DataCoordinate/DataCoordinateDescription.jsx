/* eslint-disable no-template-curly-in-string */
import React from 'react'
import {Pre,Explanation} from '../../../ui-lib/lib'

export const DataCoordinateDescription = () => {
    return (
        <Explanation>
            <Pre>
                <code>
                    <span>{'const random = Math.random().toFixed(1)'}</span>
                    <br/>
                    <span>{'let x_scale_axis = d3.scaleLinear().domain([0,100*random]).range([0,width])'}</span>
                    <br/>
                    <span>{'let y_scale_axis = d3.scaleLinear().domain([0,100*random]).range([height,0])'}</span>
                    <br/>
                    <span>{'let axisTemplate = d3.select("#datacoordinate"+String(index))'}</span>
                    <br/>
                    <span>{'                     .attr("width",width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom)'}</span>
                    <br/>
                    <span>{'refresh && axisTemplate.selectChildren("g").remove()'}</span>
                    <br/>
                    <span>{'refresh && axisTemplate.selectChildren("circle").remove()'}</span>
                    <br/>
                    <span>{'let axisTemplateElement = axisTemplate.append("g").attr("transform",`translate(${margin.left},${margin.top})`)'}</span>
                    <br/>
                    <span>{'axisTemplateElement.append("g").attr("transform",`translate(0,${height})`).call(d3.axisBottom(x_scale_axis));'}</span>
                    <br/>
                    <span>{'axisTemplateElement.append("g").call(d3.axisLeft(y_scale_axis));'}</span>
                    <br/>
                    <span>{'axisTemplateElement.selectAll("#datacoordinate"+String(index)).data(getRandomInRange(0,100*random)).enter().append("circle")'}</span>
                    <br/>
                    <span>{'                   .attr("cx", function(d){ return x_scale_axis(d.x) })'}</span>
                    <br/>
                    <span>{'                   .attr("cy", function(d){ return y_scale_axis(d.y) })'}</span>
                    <br/>
                    <span>{'                   .attr("r", 7)'}</span>
                    <br/>
                    <br/>

                    <span>{'export const getRandomInRange = (from, to,arr=[],obj={}) => {'}</span>
                    <br/>
                    <span>{'     obj["x"] = randomGenerator(from,to)'}</span>
                    <br/>
                    <span>{'     obj["y"] = randomGenerator(from,to)'}</span>
                    <br/>
                    <span>{'     return appendObjTo(arr,obj)'}</span>
                    <br/>
                    <span>{'}'}</span>
                    <br/>
                    <br/>
                    <span>{'const appendObjTo = (thatArray, newObj) => {'}</span>
                    <br/>
                    <span>{'     const frozenObj = Object.freeze(newObj);'}</span>
                    <br/>
                    <span>{'     return Object.freeze(thatArray.concat(frozenObj));'}</span>
                    <br/>
                    <span>{'}'}</span>
                    <br/>
                    <span>{'const randomGenerator = (from,to) => {'}</span>
                    <br/>
                    <span>{'    return (Math.random() * (to - from) + from).toFixed(0) * 1;'}</span>
                    <br/>
                    <span>{'}'}</span>
                    <br/>
                </code>
            </Pre>
        </Explanation>
    )
}

