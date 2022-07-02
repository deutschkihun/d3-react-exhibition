import React from 'react'
import { Explanation, Pre } from '../../../ui-lib/lib'

export function SVGWithD3Description() {
  return (
    <Explanation>
      <h3>
        Creat a {'<svg> tag'} and wrap circle with {'<circle> tag'}. This should be selectd by d3.select
      </h3>
      <Pre>
        <code>
          <span>{'    var svg = d3.select("#ex_rect1").attr("width","55vw")'}</span>
          <br />
          <span>{'    svg.append("circle")'}</span>
          <br />
          <span>{`        .attr("cx", 6).attr("cy", 6).attr("r", 70).style("fill", "blue").attr('fill-opacity','0.6')`}</span>
          <br />
          <span>{'    svg.append("circle")'}</span>
          <br />
          <span>{`        .attr("cx", 200).attr("cy", 70).attr("r", 40).style("fill", "red")`}</span>
          <br />
          <span>{'}, [])'}</span>
          <br />
          <br />
          <span>{'<svg id="ex_rect1"/>'}</span>
        </code>
      </Pre>
    </Explanation>
  )
}
