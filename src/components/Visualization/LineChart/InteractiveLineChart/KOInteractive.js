import React, { useEffect } from 'react'
import * as d3 from 'd3'

export const KOInteractive = ({width,height,margin}) => {

    useEffect(() => {    
            let koInteractive = d3.select('#koInteractive')
            .attr('width',width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom * 2)
            .append('g')
              .attr('transform',`translate(${margin.left},${margin.top * 4})`)
                         
            d3.csv('https://raw.githubusercontent.com/deutschkihun/vizDataRepo/main/csv/KO.csv',(d) => {
              return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
            }).then((data) => {
              const x = d3.scaleTime()
                .domain(d3.extent(data, function(d) { return d.date }))
                .range([ 0, width ]);
                
              const xAxis =  koInteractive.append("g")
                .attr("transform", `translate(0, ${height})`)
                .call(d3.axisBottom(x));
          
              const y = d3.scaleLinear()
                          .domain([d3.min(data, function(d) { return d.value; })-3, d3.max(data, function(d) { return d.value; })])
                          .range([ height, 0 ]);
              koInteractive.append("g")
                .call(d3.axisLeft(y));
              
              koInteractive.append("defs").append("svg:clipPath")
                .attr("id", "clip")
                .append("svg:rect")
                .attr("width", width )
                .attr("height", height )
                .attr("x", 0)
                .attr("y", 0);
        
              const brush = d3.brushX()                   // Add the brush feature using the d3.brush function
                .extent( [ [0,0], [width,height] ] )  // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
                .on("end", updateChart)               // Each time the brush selection changes, trigger the 'updateChart' function
        
                // Create the line variable: where both the line and the brush take place
              const line = koInteractive.append('g')
                .attr("clip-path", "url(#clip)")

          
              koInteractive.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                  .x(function(d) { return x(d.date) })
                  .y(function(d) { return y(d.value) }))

              // Add the brushing
              line
              .append("g")
                .attr("class", "brush")
                .call(brush);


              koInteractive.append("text")
                .attr("text-anchor", "end")
                .attr("x", width)
                .attr("y", height + margin.top + 20)
                .text("Year");

              koInteractive.append("text")
                .attr("text-anchor", "end")
                .attr("transform", "rotate(-90)")
                .attr("y", -margin.left+10)
                .attr("x", -margin.top)
                .text("Price in $")

              koInteractive.append("text")
                .attr("x", (width / 2))             
                .attr("y", (margin.top /2))
                .attr("text-anchor", "middle")  
                .style("font-size", "16px") 
                .style("text-decoration", "underline")  
                .text(`Interactive Coca cola stock evolution`);

                let idleTimeout
                function idled() { idleTimeout = null; }
            
                // A function that update the chart for given boundaries
                function updateChart(event,d) {
            
                  // What are the selected boundaries?
                  let extent = event.selection
                  console.log("extent",extent)
                  // If no selection, back to initial coordinate. Otherwise, update X axis domain
                  if(!extent){
                    if (!idleTimeout) return idleTimeout = setTimeout(idled, 350); // This allows to wait a little bit
                    x.domain([ 4,8])
                  }else{
                    x.domain([ x.invert(extent[0]), x.invert(extent[1]) ])
                    line.select(".brush").call(brush.move, null) // This remove the grey brush area as soon as the selection has been done
                  }
            
                  // Update axis and line position
                  xAxis.transition().duration(1000).call(d3.axisBottom(x))
                  line
                      .select('.line')
                      .transition()
                      .duration(1000)
                      .attr("d", d3.line()
                        .x(function(d) { return x(d.date) })
                        .y(function(d) { return y(d.value) })
                      )
                }
            
          })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    return (
        <>
            <svg id="koInteractive"/>
        </>
    )
}
