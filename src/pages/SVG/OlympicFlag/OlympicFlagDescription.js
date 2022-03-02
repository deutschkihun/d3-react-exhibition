import React from 'react'
import { Explanation,Pre,Code } from '../../../ui-lib/lib'

export const OlympicFlagDescription = () => {
    return (
        <Explanation>
            <h3>Building a olympic flag by d3 and React</h3>
                <Pre>
                <Code>
                    <span>{'useEffect(() => {'}</span>
                        <br/>
                    <span>{'    var olympicFlag = d3.select("#olympic_flag").attr("width","55vw").attr("height","250px")'}</span>
                        <br/>
                    <span>{'     olympicFlag.append("circle")'}</span>   
                        <br/>
                    <span>{`        .attr("cx", 500).attr("cy", 100).attr("r", 40).attr('stroke',"blue").style("stroke-width", 4).style("fill-opacity","0")`}</span>
                        <br/>
                    <span>{`        .attr("cx", 600).attr("cy", 100).attr("r", 40).attr('stroke',"black").style("stroke-width", 4).style("fill-opacity","0")`}</span>
                        <br/>
                    <span>{`        .attr("cx", 700).attr("cy", 100).attr("r", 40).attr('stroke',"red").style("stroke-width", 4).style("fill-opacity","0")`}</span>
                        <br/>
                    <span>{`        .attr("cx", 550).attr("cy", 150).attr("r", 20).attr('stroke',"yellow").style("stroke-width", 4).style("fill-opacity","0")`}</span>
                        <br/>
                    <span>{`        .attr("cx",650).attr("cy", 150).attr("r", 20).attr('stroke',"green").style("stroke-width", 4).style("fill-opacity","0")`}</span>
                        <br/>
                    <span>{'}, [])'}</span>
                        <br/>
                        <br/>
                    <span>{'<svg id="olympic_flag"/>'}</span>
                </Code>
                </Pre>
            <h4>stroke-width: width of stroke on svg</h4>
        </Explanation>
    )
}

