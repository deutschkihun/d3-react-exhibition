/* eslint-disable no-underscore-dangle */
import * as d3 from 'd3'

export function updateChart(element, e, d) {
  // Get the selection coordinate
  const { extent } = e._groups[0][0].__brush
  console.log('extent', extent[0])
  console.log('extent', extent[1])

  return false
  // Is the circle in the selection?
  /* let isBrushed = extent[0][0] <= element.attr("cx") && extent[1][0] >= element.attr("cx") && // Check X coordinate
                extent[0][1] <= element.attr("cy") && extent[1][1] >= element.attr("cy")  // And Y coordinate
  
    // Circle is green if in the selection, pink otherwise
    element.classed("selected", isBrushed) */
}
