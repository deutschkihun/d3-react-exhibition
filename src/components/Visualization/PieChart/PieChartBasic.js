import React, {useEffect} from 'react'
import * as d3 from 'd3'


export const PieChartBasic = () => {

    useEffect(() => {
        
        let svg = d3.select('#piechart_basic').attr('width','55vw')
            .append('g')

         /*var data = {a: 9, b: 20, c:30, d:8, e:12}
        var color = d3.scaleOrdinal()
            .domain(sample)
            .range(d3.schemeCategory10)*/

        const data = [
            {"number":  4, "name": "Locke"},
            {"number":  8, "name": "Reyes"},
            {"number": 15, "name": "Ford"},
            {"number": 16, "name": "Jarrah"},
            {"number": 23, "name": "Shephard"},
            {"number": 42, "name": "Kwon"}
        ];

        //let pie = d3.pie().value(data.map(d => d.number))

        svg
            .data(data)
            .enter()
            .append('path')
            .attr('d', d3.arc()
                .innerRadius(0)
                .outerRadius(10)
            )
            .attr("stroke", "black")
            .style("stroke-width", "2px")
            .style("opacity", 0.7)
    }, [])

    return (
        <>
           <svg id="piechart_basic"/> 
        </>
    )
}

