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
import { VizWrapper, VizContainer, Title, ContainerRef, Message } from '../../ui-lib/lib';

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
                            <ContainerRef>
                                <LineChartBasic
                                            width={width}
                                            height={height}
                                            margin={margin}
                                />
                            </ContainerRef>
                        </VizContainer>
                        <LineChartBasicDescription/>

                    {/* Line Chart with Confidence interval*/}
                        <VizContainer>
                            <Title>Line Chart with Confidence interval</Title>
                            <ContainerRef>
                                <ConfidenceIntervalBasic
                                            width={width}
                                            height={height}
                                            margin={margin}
                                />
                            </ContainerRef>
                        </VizContainer>
                        <ConfidenceIntervalDescription/>

                    {/* Line Chart advance: area chart*/}
                        <VizContainer>
                            <Title>Line Chart advance: Area Chart</Title>
                            <ContainerRef>
                                <AreaChartBasic
                                            width={width}
                                            height={height}
                                            margin={margin}
                                />
                            </ContainerRef>
                        </VizContainer>
                        <AreaChartBasicDescription/>

                    {/* Multiple line chart*/}
                        <VizContainer>
                            <Title>Multiple line chart in single component</Title>
                            <ContainerRef>
                                <MultipleChartBasic
                                            width={width}
                                            height={height}
                                            margin={margin}
                                />
                            </ContainerRef>
                        </VizContainer>
                        <MultipleChartBasicDescription />

                    {/* Multiple line chart with dropwdown filtering */}
                        <VizContainer>
                            <Title>Multiple line chart with dropwdown filtering</Title>
                            <ContainerRef>
                                <MultipleChartDropdownBasic
                                        width={width}
                                        height={height}
                                        margin={margin}
                                />
                            </ContainerRef>
                        </VizContainer>
                        <MultipleChartBasicDescription />

                    {/* D3 interactive : Brushing line chart */}
                        <VizContainer>
                            <Title>D3 interactive : Brushing line chart</Title>
                            <ContainerRef>
                                <InteractiveLineChart
                                    width={width}
                                    height={height}
                                    margin={margin}
                                />
                            </ContainerRef>
                        </VizContainer>   
            </VizWrapper>
    )
}

