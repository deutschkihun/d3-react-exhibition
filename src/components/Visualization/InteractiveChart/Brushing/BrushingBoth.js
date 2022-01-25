import React, { useEffect } from 'react';
import * as d3 from 'd3'

export const BrushingBoth = ({margin,width,height}) => {
  useEffect(() => {
    let brushingBoth = d3.select('#brushingBoth')
            .attr('width',width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom * 2)
            .attr('stroke','red')
            .attr('stroke-width','10')
            .append('g')
            .attr('transform',`translate(${margin.left},${margin.top * 4})`)

          
            brushingBoth.append("svg")
                        .append("circle")
                          .attr("cx", 200)
                          .attr("cy", 200)
                          .attr("r", 40)
                          .attr("fill", "#69a3b2") 
            brushingBoth.call( d3.brush()                     
                        .extent([ [0,0], [width,height] ]))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  
      
  return (
    <>
      <svg id="brushingBoth"/>
    </>    
  )
};

