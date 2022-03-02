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
import { VizWrapper, VizContainer, MainTitle, ContainerRef } from '../../ui-lib/lib';

export const LineChart = () => {

    let margin = {top: 10, right: 40, bottom: 30, left: 40}
    let width = 450 - margin.left - margin.right;
    let height = 400 - margin.top - margin.bottom;

    return (
        <>
            <VizWrapper>
                <>
                    {/* Line Chart Basic: importing data and demonstrating */}
                    <VizContainer>
                        <MainTitle>Line Chart Basic: importing data and demonstrating</MainTitle>
                        <p>Follwoing data shows the evolution of Coca cola, PepsiCo, Apple, and P&G stock price since 2017</p>
                        <ContainerRef>
                            <LineChartBasic
                                        width={width}
                                        height={height}
                                        margin={margin}
                            />
                        </ContainerRef>
                    </VizContainer>
                    <LineChartBasicDescription/>
                </>

                <>
                    {/* Line Chart with Confidence interval*/}
                        <VizContainer>
                            <MainTitle>Line Chart with Confidence interval</MainTitle>
                            <ContainerRef>
                                <ConfidenceIntervalBasic
                                            width={width}
                                            height={height}
                                            margin={margin}
                                />
                            </ContainerRef>
                        </VizContainer>
                        <ConfidenceIntervalDescription/>
                </>
                <>
                    {/* Line Chart advance: area chart*/}
                        <VizContainer>
                            <MainTitle>Line Chart advance: Area Chart</MainTitle>
                            <ContainerRef>
                                <AreaChartBasic
                                            width={width}
                                            height={height}
                                            margin={margin}
                                />
                            </ContainerRef>
                        </VizContainer>
                        <AreaChartBasicDescription/>
                </>
                <>
                    {/* Multiple line chart*/}
                        <VizContainer>
                            <MainTitle>Multiple line chart in single component</MainTitle>
                            <ContainerRef>
                                <MultipleChartBasic
                                            width={width}
                                            height={height}
                                            margin={margin}
                                />
                            </ContainerRef>
                        </VizContainer>
                        <MultipleChartBasicDescription />
                </>

                <>
                    {/* Multiple line chart with dropwdown filtering */}
                        <VizContainer>
                            <MainTitle>Multiple line chart with dropwdown filtering</MainTitle>
                            <ContainerRef>
                                <MultipleChartDropdownBasic
                                        width={width}
                                        height={height}
                                        margin={margin}
                                />
                            </ContainerRef>
                        </VizContainer>
                        <MultipleChartBasicDescription />
                </>

                <>
                    {/* D3 interactive : Brushing line chart */}
                    <VizContainer>
                        <MainTitle>D3 interactive : Brushing line chart</MainTitle>
                        <ContainerRef>
                            <InteractiveLineChart
                                width={width}
                                height={height}
                                margin={margin}
                            />
                        </ContainerRef>
                    </VizContainer>   
                </>
            </VizWrapper>
        </>
    )
}

