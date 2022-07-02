import React from 'react'
import { VizContainer, Title, VizWrapper, Message } from '../../ui-lib/lib'
import { BarChartBasic } from './BarChartBasic/BarChartBasic'
import { height, width } from '../../data'

export function BarChart() {
  return (
    <VizWrapper>
      <VizContainer>
        <Title>BarChart</Title>
        <Message>
          A bar chart or bar graph is a chart or graph that presents categorical data with rectangular bars with heights
          or lengths proportional to the values that they represent. A bar graph shows comparisons among discrete
          categories. One axis of the chart shows the specific categories being compared, and the other axis represents
          a measured value. Some bar graphs present bars clustered in groups of more than one, showing the values of
          more than one measured variable.
        </Message>
      </VizContainer>

      <VizContainer>
        <Title>Ex.1) Bar chart with parsed csv data</Title>
        <BarChartBasic width={width} height={height} />
      </VizContainer>
    </VizWrapper>
  )
}
