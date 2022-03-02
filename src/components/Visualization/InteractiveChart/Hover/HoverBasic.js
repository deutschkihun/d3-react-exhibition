import React, { useEffect } from 'react';
import * as d3 from 'd3'

export const HoverBasic = ({margin,width,height}) => {
  useEffect(() => {
    const rectangle = d3.select('#hover_rect').attr('width',width / 2).attr('height',height / 2)
    rectangle.append('g')
                .append('rect')
                .attr('width',width / 2)
                .attr('height',height / 2)
                .style("fill",'yellow')
                .attr('stroke','red')
                .attr('stroke-width',width / 10)

    var hoverEvent = d3.select("#hover_rect")
                        .append("div")
                        .style("position", "absolute")
                        .style("visibility", "hidden")
                        .text("I'm a circle!")

    d3.select("#hover_rect")
    .on("mouseover", () => {return hoverEvent.style("visibility", "visible")})
    // https://www.pluralsight.com/guides/create-tooltips-in-d3js
    //.on("mousemove", () => {return hoverEvent.style("top", (event.pageY-800)+"px").style("right",(event.pageX-800)+"px");})
    .on("mouseout", () => {return hoverEvent.style("visibility", "hidden");});


  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      <svg id="hover_rect"/>
    </>    
  )
};

