import React from 'react'
import {Code,Pre,Explanation} from '../../../ui-lib/lib';

export const ConfidenceIntervalDescription = () => {
    return (
        <Explanation>
            <Pre>
                <Code>
                    <span>{'** Data reference: https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_IC.csv'}</span>
                    <br/>
                    <br/>
                    <span>{'Key point: use d3.area() to represents the confidence interval'}</span>
                    <br/>
                    <br/>
                    <span>{'confidenceInterval.append("path")'}</span>
                    <br/>
                    <span>{'                  .datum(data)'}</span>
                    <br/>
                    <span>{'                  .attr("fill", "#cce5df")'}</span>
                    <br/>
                    <span>{'                   .attr("stroke", "none")'}</span>
                    <br/>
                    <span>{'                   .attr("d", d3.area()'}</span>
                    <br/>
                    <span>{'                        .x((d) => { return x(d.x) })'}</span>
                    <br/>
                    <span>{'                        .y0((d) => { return y(d.CI_right) })'}</span>
                    <br/>
                    <span>{'                        .y1((d) => { return y(d.CI_left) }))'}</span>
                    <br/>
                    <br/>
                    <span>{'** Confidence interval: A confidence interval displays the probability that a parameter will fall between a pair of values around the mean. '}</span>
                    <br/>
                    <span>{'Confidence intervals measure the degree of uncertainty or certainty in a sampling method.'}</span>
                    <br/>
                </Code>
            </Pre>
        </Explanation>
    )
}

