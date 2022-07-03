import React from 'react'
import { Pre, Explanation } from '../../../ui-lib/lib'

export function MultipleChartBasicDescription() {
  return (
    <Explanation>
      <Pre>
        <code>
          <span>Use d3.group to clustering different data</span>
          <br />
          <br />
          <span>
            {
              'd3.csv("https://raw.githubusercontent.com/deutschkihun/vizDataRepo/main/csv/mock-data.csv").then((data) => {'
            }
          </span>
          <br />
          <span>{'const group = d3.group(data, d => d.state)'}</span>
          <br />
          <span>const svg = d3.select(&quot;#multiplechart&quot;)</span>
          <br />
          <span>{'              .selectAll("uniqueChart").data(group).enter()'}</span>
          <br />
          <span>{'              .append("svg")'}</span>
          <br />
          <span>{'                .attr("width", width + margin.left + margin.right)'}</span>
          <br />
          <span>{'                .attr("height", height + margin.top + margin.bottom)'}</span>
          <br />
          <span>{'              .append("g").attr("transform", "translate(margin.left,margin.top)");'}</span>
          <br />
          <span>Other things like axis and label are same as other example</span>
        </code>
      </Pre>
    </Explanation>
  )
}
