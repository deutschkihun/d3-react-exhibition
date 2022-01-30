import * as d3 from 'd3'
export const updateChart = (element) => {

    // Get the selection coordinate
    const extent = d3.event.selection   // looks like [ [12,11], [132,178]]
  
    // Is the circle in the selection?
    let isBrushed = extent[0][0] <= element.attr("cx") && extent[1][0] >= element.attr("cx") && // Check X coordinate
                extent[0][1] <= element.attr("cy") && extent[1][1] >= element.attr("cy")  // And Y coordinate
  
    // Circle is green if in the selection, pink otherwise
    element.classed("selected", isBrushed)
  }