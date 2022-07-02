/* eslint-disable no-template-curly-in-string */
import React from 'react'
import { Pre, Explanation } from '../../../ui-lib/lib'

export function ChartBackgroundDescription() {
  return (
    <Explanation>
      <Pre>
        <code>
          <span>ex.) ggplot2 style</span>
          <br />
          <span>let x_scale_axis = d3.scaleLinear().domain([0,100*random]).range([0,width])</span>
          <br />
          <span>let y_scale_axis = d3.scaleLinear().domain([0,100*random]).range([height,0])</span>
          <br />
          <span>let axisTemplate = d3.select(&ldquo;#GGplot2&ldquo;)</span>
          <br />
          <span>{'                     .attr("width",width + margin.left + margin.right)'}</span>
          <br />
          <span>{'                     .attr("height", height + margin.top + margin.bottom + 50)'}</span>
          <br />
          <span>{'                     .append("g")'}</span>
          <br />
          <span>{'                     .attr("transform",`translate(${margin.left},${margin.top + 20})`)'}</span>
          <br />
          <span>
            axisTemplate.append(&ldquo;rect&ldquo;).attr(&ldquo;x&ldquo;,0).attr(&ldquo;y&ldquo;,0).attr(&ldquo;height&ldquo;,
            height).attr(&ldquo;width&ldquo;, height).style(&ldquo;fill&ldquo;, &ldquo;EBEBEB&ldquo;)
          </span>
          <br />
          <span>axisTemplate.append(&ldquo;g&ldquo;)</span>
          <br />
          <span>{'                 .attr("transform",`translate(0,${height})`)'}</span>
          <br />
          <span>{'                 .call(d3.axisBottom(x_scale_linear).tickSize(-height*1.3).ticks(10))'}</span>
          <br />
          <span>{'                 .select(".domain").remove()'}</span>
          <br />
          <span>
            axisTemplate.append(&ldquo;g&ldquo;).call(d3.axisLeft(y_scale_linear).tickSize(-width*1.3).ticks(7));
          </span>
          <br />
          <span>axisTemplate.selectAll(&ldquo;.tick line&ldquo;).attr(&ldquo;stroke&ldquo;, &ldquo;white&ldquo;)</span>
          <br />
        </code>
      </Pre>
    </Explanation>
  )
}
