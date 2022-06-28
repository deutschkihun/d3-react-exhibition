import React, {useEffect,useState} from 'react'
import { randomColorGenerator } from '../../../helper/randomColorGenerator'
import * as d3 from 'd3'

export const BarChartBasic = ({width,height}) => {
    const [data, setData] = useState(null);
    const csvUrl = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv';

    useEffect(() => {
        let barchart = d3.select('#barchartbasic')
                         .style('width','100%')
                         .attr('height','400px')
        const row = (d) => {
            d.Population = +d['2020'];
            return d;
        };

        d3.csv(csvUrl,row).then(data => {
            setData(data.slice(0, 10));
        })

        if(data) {
            const yScale = d3.scaleBand()
                              .domain(data.map((d) => (d['Country'])))
                              .range([0, height]);

            const xScale = d3.scaleLinear()
                             .domain([0, d3.max(data, (d) => d.Population)])
                             .range([0, width]);
            data.map(d => (
                barchart.append('g')
                    .append('rect')
                    .attr('y',yScale(d['Country']))
                    .attr('width',xScale(d.Population))
                    .attr('height',yScale.bandwidth())
                    .style("fill",randomColorGenerator())
            ))
        }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <svg id='barchartbasic' />
}

