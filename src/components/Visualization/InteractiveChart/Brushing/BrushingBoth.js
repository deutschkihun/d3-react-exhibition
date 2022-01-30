import React, { useEffect } from 'react';
import * as d3 from 'd3'
import {brushBoth} from '../../../../helper/brush'

export const BrushingBoth = ({margin,width,height}) => {
  useEffect(() => {
    let brushingBoth = d3.select('#brushingBoth')
    .attr('width',width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom * 2)
    .attr('transform',`translate(${margin.left},${margin.top * 4})`)

    brushingBoth.append("svg")
                .append("circle")
                  .attr("cx", 200)
                  .attr("cy", 200)
                  .attr("r", 40)
                  .attr('stroke','red')
                  .attr('stroke-width','10')
                  .attr("fill", "black") 
    
    brushingBoth.call(brushBoth(width,height))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      <svg id="brushingBoth"/>
    </>    
  )
};

