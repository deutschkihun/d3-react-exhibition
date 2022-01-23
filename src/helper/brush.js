import * as d3 from 'd3'

export let brush = (width,height,updateChart) => d3.brushX()                   
    // Add the brush feature using the d3.brush function
    // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
    .extent( [ [0,0], [width,height] ] )  
    .on("end", updateChart) 