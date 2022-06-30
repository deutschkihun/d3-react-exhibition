import React, {useRef} from 'react'
import { AxisBasic } from './AxisBasic/AxisBasic'
import { AxisBasicDescription } from './AxisBasic/AxisBasicDescription'
import { BasicAxisScalerDescription } from './BasicAxisScaler/BasicAxisScalerDescription'
import {BasicAxisScaler} from './BasicAxisScaler/BasicAxisScaler'
import { CustomAxisLabel } from './CustomAxisLabel/CustomAxisLabel'
import { DataCoordinate } from './DataCoordinate/DataCoordinate'
import { refreshHandler } from '../../helper/refreshHandler'
import { CustomAxisLabelDescription } from './CustomAxisLabel/CustomAxisLabelDescription'
import {DataCoordinateDescription} from './DataCoordinate/DataCoordinateDescription'
import { ChartBackground } from './ChartBackground/ChartBackground'
import {ChartBackgroundDescription} from './ChartBackground/ChartBackgroundDescription'
import { Title, VizContainer, VizWrapper, Ref, Message, Btn} from '../../ui-lib/lib'
import {margin, width, height, pointer, band} from '../../data'

export const ChartBasic = () => {

    const DataCoordinateRef = useRef(null)
    const AxisBasicRef = useRef(null)
    const CustomAxisRef = useRef(null)

    return (
            <VizWrapper>

                {/* Chart basic: Basic Axis scaler */}
                    <VizContainer>
                        <Title>Chart basic: Basic Axis scaler</Title>
                        <Message>
                            Previously, we used only scalelinear for axis expression. In this time we'll use different scaler to customize axis.
                        </Message>
                        <Ref ref={CustomAxisRef}>          
                            <BasicAxisScaler
                                width={width}
                                height={height}
                                margin={margin}
                                pointer={pointer}
                                band={band}
                            />
                        </Ref>
                    </VizContainer>
                    <BasicAxisScalerDescription/>
                
                {/* Chart basic: Custom axis label */}
                    <VizContainer>
                        <Title>Chart basic: Custom axis label</Title>
                        <Ref ref={CustomAxisRef}>          
                            <CustomAxisLabel
                                width={width}
                                height={height}
                                margin={margin}
                                pointer={pointer}
                                band={band}
                            />
                        </Ref>
                    </VizContainer>
                    <CustomAxisLabelDescription/>

                {/* Chart basic: Random Axis range */}
                    <VizContainer>
                        <Title>Chart basic: Random Axis range
                                    <Btn onClick={() => refreshHandler( <AxisBasic
                                                                                width={width}
                                                                                height={height}
                                                                                margin={margin}
                                                                                refresh={true}
                                                                            />,AxisBasicRef)}>Click Me</Btn>
                        </Title>
                        <Message>
                            The first thing for drawing a chart is to build a coordinate system. The coordinate system is divided into x-axis and y-axis 
                            based on two dimensions. If it is three dimensions, we need the z-axis, but we will only deal with two dimensions in this time. 
                            In the following example, a coordinate system was drawn using various scale ranges.
                        </Message>
                        <Ref ref={AxisBasicRef}>
                        <AxisBasic
                            width={width}
                            height={height}
                            margin={margin}
                            refresh={false}
                        />
                        </Ref>
                    </VizContainer>
                    <AxisBasicDescription/>

                {/* Chart basic: Displaying random data on the random coordinates */}
                    <VizContainer>
                        <Title>Chart basic: Displaying random data on the random coordinates
                                    <Btn onClick={() => refreshHandler(<DataCoordinate
                                                                            width={width}
                                                                            height={height}
                                                                            margin={margin}
                                                                            refresh={true}
                                                                        />,DataCoordinateRef)}>Click Me</Btn>
                        </Title>
                        <Ref ref={DataCoordinateRef}>
                            <DataCoordinate
                                width={width}
                                height={height}
                                margin={margin}
                                refresh={false}
                            />
                        </Ref>
                    </VizContainer>
                    <DataCoordinateDescription/>

                {/* Chart basic: Displaying random data on the random coordinates */}
                    <VizContainer>
                        <Title>Chart Background</Title>
                        <Ref>
                        <ChartBackground
                                width={width}
                                height={height}
                                margin={margin}
                            />
                        </Ref>
                    </VizContainer>
                    <ChartBackgroundDescription/>
        </VizWrapper>
    )
}

