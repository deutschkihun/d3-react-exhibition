import React from 'react'
import { Explanation, Pre } from '../../../ui-lib/lib'

export function SVGRectangleDescription() {
  return (
    <Explanation>
      <Pre>
        <code>
          <span>rect.append(&quot;rect&quot;)</span>
          <br />
          <span>{'    .attr("y", 100)'}</span>
          <br />
          <span>{'    .attr("width", 600)'}</span>
          <br />
          <span>{'    .attr("height", 40)'}</span>
          <br />
          <span>{'    .attr("stroke", "black")'}</span>
          <br />
          <span>{'    .attr("fill", "#69a3b2")'}</span>
          <br />
          <span>{'<svg id="rect"/>'}</span>
        </code>
      </Pre>
    </Explanation>
  )
}
