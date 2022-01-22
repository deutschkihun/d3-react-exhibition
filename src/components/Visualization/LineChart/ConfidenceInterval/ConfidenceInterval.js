import React, { useEffect } from 'react'
import * as d3 from 'd3'

export const ConfidenceInterval = ({width,height,margin}) => {

    useEffect(() => {    
            let confidenceInterval = d3.select('#ci')
            .attr('width',width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
              .attr('transform',`translate(${margin.left},${margin.top})`)
                        
              d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_IC.csv",function(data) {

                // Add X axis --> it is a date format
                var x = d3.scaleLinear()
                  .domain([1,100])
                  .range([ 0, width ]);
                confidenceInterval.append("g")
                  .attr("transform", "translate(0," + height + ")")
                  .call(d3.axisBottom(x));
            
                // Add Y axis
                var y = d3.scaleLinear()
                  .domain([0, 13])
                  .range([ height, 0 ]);
                confidenceInterval.append("g")
                  .call(d3.axisLeft(y));
            
                // Show confidence interval
                /*confidenceInterval.append("path")
                  .datum(data)
                  .attr("fill", "#cce5df")
                  .attr("stroke", "none")
                  .attr("d", d3.area()
                    .x(function(d) { return x(d.x) })
                    .y0(function(d) { return y(d.CI_right) })
                    .y1(function(d) { return y(d.CI_left) })
                    )
            
                // Add the line
                confidenceInterval
                  .append("path")
                  .datum(data)
                  .attr("fill", "none")
                  .attr("stroke", "steelblue")
                  .attr("stroke-width", 1.5)
                  .attr("d", d3.line()
                    .x(function(d) { return x(d.x) })
                    .y(function(d) { return y(d.y) }))*/
                
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    return (
        <>
            <svg id="ci"/>
        </>
    )
}