import React from 'react'
import { Explanation, Pre } from '../../../ui-lib/lib'

export function AxisBasicDescription() {
  return (
    <Explanation>
      <Pre>
        <code>
          <span>const random = Math.random().toFixed(1) </span>
          <br />
          <span>let x_scale_axis = d3.scaleLinear().domain([0,100*random]).range([0,width]) </span>
          <br />
          <span>{'let y_scale_axis = d3.scaleLinear().domain([0,100*random]).range([height,0]) '} </span>
          <br />
          <span>{'let axisTemplate = d3.select("#chart"+String(i)) '} </span>
          <br />
          <span>{'                     .attr("width",width + margin.left + margin.right) '} </span>
          <br />
          <span>{'                     .attr("height", height + margin.top + margin.bottom)'} </span>
          <br />
          <span>{'refresh && axisTemplate.selectChildren("g").remove() '}</span>
          <br />
          <span>
            let axisTemplateElement =
            axisTemplate.append(&quot;g&quot;).attr(&quot;transform&quot;,`translate(margin.left,margin.top)`)
          </span>
          <br />
          <span>
            axisTemplateElement.append(&quot;g&quot;).append(&quot;g&quot;).attr(&quot;transform&quot;,`translate(0,height)`).call(d3.axisBottom(x_scale_axis))
          </span>
          <br />
          <span>{'axisTemplateElement.append("g").call(d3.axisLeft(y_scale_axis)) '}</span>
        </code>
      </Pre>
    </Explanation>
  )
}
