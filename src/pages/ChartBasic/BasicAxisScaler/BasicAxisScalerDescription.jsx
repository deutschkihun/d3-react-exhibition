import React from 'react'
import { Pre, Explanation } from '../../../ui-lib/lib'

export function BasicAxisScalerDescription() {
  return (
    <Explanation>
      <Pre>
        <code>
          <span>{'let x_scale_linear = d3.scaleLinear().domain([0,100]).range([0,width]) '}</span>
          <br />
          <span>let y_scale_linear = d3.scaleLinear().domain([0,100]).range([height,0])</span>
          <br />
          <span>let axisTemplate = d3.select(&apos;#linearScaler&apos;)</span>
          <br />
          <span>let axisTemplate = d3.select(&apos;#linearScaler&apos;)</span>
          <br />
          <span>{'                    .attr("width",width + margin.left + margin.right)'}</span>
          <br />
          <span>{'                    .attr("height", height + margin.top + margin.bottom)'}</span>
          <br />
          <span>{'                    .attr("height", height + margin.top + margin.bottom)'}</span>
          <br />
          <span>{'                    .append("g")'}</span>
          <br />
          <span>{'                    .attr("transform",`translate(margin.left,margin.top)`)'}</span>
          <br />
          <span>{'                    .attr("transform",`translate(margin.left,margin.top)`)'}</span>
          <br />
          <span>
            axisTemplate.append(&quot;g&quot;).append(&quot;g&quot;).attr(&quot;transform&quot;,`translate(0,height)`).call(d3.axisBottom(x_scale_linear))
          </span>
          <br />
          <span>axisTemplate.append(&apos;g&apos;).call(d3.axisLeft(y_scale_linear));</span>
          <br />
          <br />
          <span>let x_scale_log = d3.scaleLog().domain([1,1000]).range([0,width]).base(2)</span>
          <br />
          <span>let y_scale_log = d3.scaleLog().domain([1,1000]).range([height,0]).base(2)</span>
          <br />
          <span>let axisTemplate = d3.select(&apos;#linearScaler&apos;)</span>
          <br />
          <span>let axisTemplate = d3.select(&apos;#linearScaler&apos;)</span>
          <br />
          <span>{'                    .attr("width",width + margin.left + margin.right)'}</span>
          <br />
          <span>{'                    .attr("height", height + margin.top + margin.bottom)'}</span>
          <br />
          <span>{'                    .attr("height", height + margin.top + margin.bottom)'}</span>
          <br />
          <span>{'                    .append("g")'}</span>
          <br />
          <span>{'                    .attr("transform",`translate(margin.left,margin.top)`)'}</span>
          <br />
          <span>{'                    .attr("transform",`translate(margin.left,margin.top)`)'}</span>
          <br />
          <span>
            axisTemplate.append(&quot;g&quot;).append(&quot;g&quot;).attr(&quot;transform&quot;,`translate(0,height)`).call(d3.axisBottom(x_scale_log))
          </span>
          <br />
          <span>axisTemplate.append(&apos;g&apos;).call(d3.axisLeft(y_scale_log));</span>
          <br />
        </code>
      </Pre>
    </Explanation>
  )
}
