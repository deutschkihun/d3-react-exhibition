/* eslint-disable no-template-curly-in-string */
import React from 'react'
import {Code,Pre,Explanation} from '../../../ui-lib/lib';

export const MultipleChartBasicDescription = () => {
    return (
        <Explanation>
            <Pre>
                <Code>
                    <span>{'Use d3.group to clustering different data'}</span>
                    <br/>  
                    <br/>  
                    <span>{'d3.csv("https://raw.githubusercontent.com/deutschkihun/vizDataRepo/main/csv/mock-data.csv").then((data) => {'}</span>
                    <br/>
                    <span>{'const group = d3.group(data, d => d.state)'}</span>
                    <br/>
                    <span>{'const svg = d3.select("#multiplechart")'}</span>
                    <br/>
                    <span>{'              .selectAll("uniqueChart").data(group).enter()'}</span>
                    <br/>
                    <span>{'              .append("svg")'}</span>
                    <br/>
                    <span>{'                .attr("width", width + margin.left + margin.right)'}</span>
                    <br/>
                    <span>{'                .attr("height", height + margin.top + margin.bottom)'}</span>
                    <br/>
                    <span>{'              .append("g").attr("transform", `translate(${margin.left},${margin.top})`);'}</span>
                    <br/>
                    <span>{'Other things like axis and label are same as other example'}</span>
                </Code>
            </Pre>
        </Explanation>
    )
}

