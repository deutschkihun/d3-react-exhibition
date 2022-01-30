import * as d3 from 'd3'
export let brushBoth = (width,height) => d3.brush().extent( [ [0,0], [width,height] ] )  
export let brushX = (width,height) => d3.brushX().extent( [ [0,0], [width,height] ] )  
export let brushY = (width,height) => d3.brushY().extent( [ [0,0], [width,height] ] )  