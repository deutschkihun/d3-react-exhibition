import React from 'react'
import { Wrapper,Container,Title,Element } from '../SVG/SVG';
import { LineChartBasic } from './LineChartBasic/LineChartBasic';
import {ConfidenceIntervalBasic} from './ConfidenceInterval/ConfidenceIntervalBasic'

export const LineChart = () => {

    let margin = {top: 10, right: 40, bottom: 30, left: 40}
    let width = 450 - margin.left - margin.right;
    let height = 400 - margin.top - margin.bottom;

    return (
        <>
            <Wrapper>
               <>
               {/* Line Chart Basic: importing data and demonstrating */}
                    <Container>
                        <Title>Line Chart Basic: importing data and demonstrating</Title>
                        <p>Follwoing data shows the evolution of Coca cola, PepsiCo, Apple, and P&G stock price since 2017</p>
                        <Element>
                            <LineChartBasic
                                        width={width}
                                        height={height}
                                        margin={margin}
                            />
                        </Element>
                    </Container>
                </>

                <>
                {/* Line Chart with Confidence interval*/}
                    <Container>
                        <Title>Line Chart with Confidence interval</Title>
                        <Element>
                            <ConfidenceIntervalBasic
                                        width={width}
                                        height={height}
                                        margin={margin}
                            />
                        </Element>
                    </Container>
                </>

                <>
                {/* Multiple line chart*/}
                    <Container>
                        <Title>Multiple line chart</Title>
                        <Element>
                           
                        </Element>
                    </Container>
                </>
                
            </Wrapper>
        </>
    )
}

