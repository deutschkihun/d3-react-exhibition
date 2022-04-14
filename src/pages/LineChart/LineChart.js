import React from 'react'
import { LineChartBasic } from './LineChartBasic/LineChartBasic';
import {ConfidenceIntervalBasic} from './ConfidenceInterval/ConfidenceIntervalBasic'
import {ConfidenceIntervalDescription} from './ConfidenceInterval/ConfidenceIntervalDescription'
import { LineChartBasicDescription } from './LineChartBasic/LineChartBasicDesscription';
import {AreaChartBasic} from './AreaChartBasic/AreaChartBasic'
import {AreaChartBasicDescription} from './AreaChartBasic/AreaChartBasicDescription'
import { MultipleChartBasic } from './MultipleChart/MultipleChartBasic';
import {InteractiveLineChart} from './InteractiveLineChart/InteractiveLineChart'
import {MultipleChartBasicDescription} from './MultipleChart/MultipleChartBasicDescription'
import {MultipleChartDropdownBasic} from './MultipleChartDropdown/MultipleChartDropdownBasic'
import { VizWrapper, VizContainer, Title, Ref, Message } from '../../ui-lib/lib';

export const LineChart = () => {

    let margin = {top: 10, right: 40, bottom: 30, left: 40}
    let width = 450 - margin.left - margin.right;
    let height = 400 - margin.top - margin.bottom;

    return (
            <VizWrapper>
                    {/* Line Chart Basic: importing data and demonstrating */}
                        <VizContainer>
                            <Title>Line Chart Basic: importing data and demonstrating</Title>
                            <Message>
                                Follwoing data shows the evolution of Coca cola, PepsiCo, Apple, and P&G stock price since 2017
                            </Message>
                            <Ref>
                                <LineChartBasic
                                            width={width}
                                            height={height}
                                            margin={margin}
                                />
                            </Ref>
                        </VizContainer>
                        <LineChartBasicDescription/>

                    {/* Line Chart with Confidence interval*/}
                        <VizContainer>
                            <Title>Line Chart with Confidence interval</Title>
                            <Ref>
                                <ConfidenceIntervalBasic
                                            width={width}
                                            height={height}
                                            margin={margin}
                                />
                            </Ref>
                        </VizContainer>
                        <ConfidenceIntervalDescription/>

                    {/* Line Chart advance: area chart*/}
                        <VizContainer>
                            <Title>Line Chart advance: Area Chart</Title>
                            <Ref>
                                <AreaChartBasic
                                            width={width}
                                            height={height}
                                            margin={margin}
                                />
                            </Ref>
                        </VizContainer>
                        <AreaChartBasicDescription/>

                    {/* Multiple line chart*/}
                        <VizContainer>
                            <Title>Multiple line chart in single component</Title>
                            <Ref>
                                <MultipleChartBasic
                                            width={width}
                                            height={height}
                                            margin={margin}
                                />
                            </Ref>
                        </VizContainer>
                        <MultipleChartBasicDescription />

                    {/* Multiple line chart with dropwdown filtering */}
                        <VizContainer>
                            <Title>Multiple line chart with dropwdown filtering</Title>
                            <Ref>
                                <MultipleChartDropdownBasic
                                        width={width}
                                        height={height}
                                        margin={margin}
                                />
                            </Ref>
                        </VizContainer>
                        <MultipleChartBasicDescription />

                    {/* D3 interactive : Brushing line chart */}
                        <VizContainer>
                            <Title>D3 interactive : Brushing line chart</Title>
                            <Ref>
                                <InteractiveLineChart
                                    width={width}
                                    height={height}
                                    margin={margin}
                                />
                            </Ref>
                        </VizContainer>   
            </VizWrapper>
    )
}

