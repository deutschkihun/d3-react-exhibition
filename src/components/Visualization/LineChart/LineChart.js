import React from 'react'
import { Wrapper,Container,Title,Element } from '../../../helper/helperComponents';
import { LineChartBasic } from './LineChartBasic/LineChartBasic';
import {ConfidenceIntervalBasic} from './ConfidenceInterval/ConfidenceIntervalBasic'
import {ConfidenceIntervalDescription} from './ConfidenceInterval/ConfidenceIntervalDescription'
import { LineChartBasicDescription } from './LineChartBasic/LineChartBasicDesscription';
import {AreaChartBasic} from './AreaChartBasic/AreaChartBasic'
import {AreaChartBasicDescription} from './AreaChartBasic/AreaChartBasicDescription'
import { MultipleChartBasic } from './MultipleChart/MultipleChartBasic';
import {InteractiveLineChart} from './InteractiveLineChart/InteractiveLineChart'
import {MultipleChartBasicDescription} from './MultipleChart/MultipleChartBasicDescription'

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
                    <LineChartBasicDescription/>
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
                        <ConfidenceIntervalDescription/>
                </>
                <>
                    {/* Line Chart advance: area chart*/}
                        <Container>
                            <Title>Line Chart advance: Area Chart</Title>
                            <Element>
                                <AreaChartBasic
                                            width={width}
                                            height={height}
                                            margin={margin}
                                />
                            </Element>
                        </Container>
                        <AreaChartBasicDescription/>
                </>
                <>
                    {/* Multiple line chart*/}
                        <Container>
                            <Title>Multiple line chart in single component</Title>
                            <Element>
                                <MultipleChartBasic
                                            width={width}
                                            height={height}
                                            margin={margin}
                                />
                            </Element>
                        </Container>
                        <MultipleChartBasicDescription />
                </>

                <>
                    {/* D3 interactive : Brushing line chart */}
                    <Container>
                        <Title>D3 interactive : Brushing line chart</Title>
                        <Element>
                            <InteractiveLineChart
                                width={width}
                                height={height}
                                margin={margin}
                            />
                        </Element>
                    </Container>   
                </>
            </Wrapper>
        </>
    )
}

