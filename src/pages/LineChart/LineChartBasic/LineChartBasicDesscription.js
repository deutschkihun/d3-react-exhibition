/* eslint-disable no-template-curly-in-string */
import React from 'react'
import {Code,Pre,Explanation} from '../../../ui-lib/lib';

export const LineChartBasicDescription = () => {
    return (
        <Explanation>
            <Pre>
                <Code>
                    <span>{'Data reference: https://finance.yahoo.com/'}</span>
                    <br/>
                    <br/>
                    <span>{'Ex.) Coca cola stock evolution'}</span>
                    <br/>
                    <br/>
                    <span>{'d3.csv("https://raw.githubusercontent.com/deutschkihun/vizDataRepo/main/csv/KO.csv",(d) => {'}</span>
                    <br/>
                    <span>{'    return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }'}</span>
                    <br/>
                    <span>{'}).then((data) => {'}</span>
                    <br/>
                    <span>{'   const x = d3.scaleTime()'}</span>
                    <br/>
                    <span>{'               .domain(d3.extent(data, function(d) { return d.date }))'}</span>
                    <br/>
                    <span>{'               .range([ 0, width ]);'}</span>
                    <br/>
                    <span>{'   appleChart.append("g")'}</span>
                    <br/>
                    <span>{'             .attr("transform", `translate(0, ${height})`)'}</span>
                    <br/>
                    <span>{'             .call(d3.axisBottom(x));'}</span>
                    <br/>
                    <span>{'   const y = d3.scaleLinear()'}</span>
                    <br/>
                    <span>{'               .domain([d3.min(data, function(d) { return d.value; })-3, d3.max(data, function(d) { return d.value; })])'}</span>
                    <br/>
                    <span>{'               .range([ height, 0 ]);'}</span>
                    <br/>
                    <span>{'   appleChart.append("g")'}</span>
                    <br/>
                    <span>{'             .call(d3.axisLeft(y));'}</span>
                    <br/>
                    <span>{'   appleChart.append("path")'}</span>
                    <br/>
                    <span>{'             .datum(data)'}</span>
                    <br/>
                    <span>{'             .attr("fill", "none")'}</span>
                    <br/>
                    <span>{'             .attr("stroke", "steelblue")'}</span>
                    <br/>
                    <span>{'             .attr("stroke-width", 1.5)'}</span>
                    <br/>
                    <span>{'             .attr("d", d3.line()'}</span>
                    <br/>
                    <span>{'             .x(function(d) { return x(d.date) })'}</span>
                    <br/>
                    <span>{'             .y(function(d) { return y(d.value) }))'}</span>
                    <br/>
                </Code>
            </Pre>
        </Explanation>
    )
}

