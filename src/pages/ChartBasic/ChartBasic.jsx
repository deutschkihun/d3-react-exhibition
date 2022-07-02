import React, { useRef } from 'react'
import { AxisBasic } from './AxisBasic/AxisBasic'
import { AxisBasicDescription } from './AxisBasic/AxisBasicDescription'
import { BasicAxisScalerDescription } from './BasicAxisScaler/BasicAxisScalerDescription'
import { BasicAxisScaler } from './BasicAxisScaler/BasicAxisScaler'
import { CustomAxisLabel } from './CustomAxisLabel/CustomAxisLabel'
import { DataCoordinate } from './DataCoordinate/DataCoordinate'
import { refreshHandler } from '../../helper/refreshHandler'
import { CustomAxisLabelDescription } from './CustomAxisLabel/CustomAxisLabelDescription'
import { DataCoordinateDescription } from './DataCoordinate/DataCoordinateDescription'
import { ChartBackground } from './ChartBackground/ChartBackground'
import { ChartBackgroundDescription } from './ChartBackground/ChartBackgroundDescription'
import { Title, VizContainer, VizWrapper, Ref, Message, RenderButton } from '../../ui-lib/lib'
import { margin, width, height, pointer, band } from '../../data'

export function ChartBasic() {
  const DataCoordinateRef = useRef(null)
  const AxisBasicRef = useRef(null)
  const CustomAxisRef = useRef(null)

  return (
    <VizWrapper>
      <VizContainer>
        <Title>Chart basic: Basic Axis scaler</Title>
        <Message>
          Previously, we used only scalelinear for axis expression. In this time we&apos;ll use different scaler to
          customize axis.
        </Message>
        <Ref ref={CustomAxisRef}>
          <BasicAxisScaler width={width} height={height} margin={margin} pointer={pointer} band={band} />
        </Ref>
      </VizContainer>
      <BasicAxisScalerDescription />

      <VizContainer>
        <Title>Chart basic: Custom axis label</Title>
        <Ref ref={CustomAxisRef}>
          <CustomAxisLabel width={width} height={height} margin={margin} pointer={pointer} band={band} />
        </Ref>
      </VizContainer>
      <CustomAxisLabelDescription />

      <VizContainer>
        <Title>
          Chart basic: Random Axis range
          <RenderButton
            onClick={() =>
              refreshHandler(<AxisBasic width={width} height={height} margin={margin} refresh />, AxisBasicRef)
            }
          >
            Click me
          </RenderButton>
        </Title>
        <Message>
          The first thing for drawing a chart is to build a coordinate system. The coordinate system is divided into
          x-axis and y-axis based on two dimensions. If it is three dimensions, we need the z-axis, but we will only
          deal with two dimensions in this time. In the following example, a coordinate system was drawn using various
          scale ranges.
        </Message>
        <Ref ref={AxisBasicRef}>
          <AxisBasic width={width} height={height} margin={margin} refresh={false} />
        </Ref>
      </VizContainer>
      <AxisBasicDescription />

      <VizContainer>
        <Title>
          Chart basic: Displaying random data on the random coordinates
          <RenderButton
            onClick={() =>
              refreshHandler(
                <DataCoordinate width={width} height={height} margin={margin} refresh />,
                DataCoordinateRef,
              )
            }
          >
            Click me
          </RenderButton>
        </Title>
        <Ref ref={DataCoordinateRef}>
          <DataCoordinate width={width} height={height} margin={margin} refresh={false} />
        </Ref>
      </VizContainer>
      <DataCoordinateDescription />

      <VizContainer>
        <Title>Chart Background</Title>
        <Ref>
          <ChartBackground width={width} height={height} margin={margin} />
        </Ref>
      </VizContainer>
      <ChartBackgroundDescription />
    </VizWrapper>
  )
}
