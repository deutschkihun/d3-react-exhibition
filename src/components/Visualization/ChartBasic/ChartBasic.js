import React, {useRef} from 'react'
import { Container, Wrapper,Title,ButtonContainer,Element } from '../SVG/SVG'
import {Button} from 'antd'
import { AxisBasic } from './AxisBasic/AxisBasic'
import { AxisBasicDescription } from './AxisBasic/AxisBasicDescription'
import { BasicAxisScalerDescription } from './BasicAxisScaler/BasicAxisScalerDescription'
import {BasicAxisScaler} from './BasicAxisScaler/BasicAxisScaler'
import { CustomAxisLabel } from './CustomAxisLabel/CustomAxisLabel'
import { DataCoordinate } from './DataCoordinate/DataCoordinate'
import { refreshHandler } from '../../../helper/refreshHandler'
import { CustomAxisLabelDescription } from './CustomAxisLabel/CustomAxisLabelDescription'
import {DataCoordinateDescription} from './DataCoordinate/DataCoordinateDescription'
export const ChartBasic = () => {

    let margin = {top: 10, right: 40, bottom: 30, left: 40}
    let width = 450 - margin.left - margin.right;
    let height = 400 - margin.top - margin.bottom;
    const pointer = ["Apple","Grape","Banana","StrawBerry","Watermelon"]
    const band = ["C","B","B+","A","A+","A++"]
    const DataCoordinateRef = useRef(null)
    const AxisBasicRef = useRef(null)
    const CustomAxisRef = useRef(null)

    return (
        <>
            <Wrapper>
                {/* Chart basic: Basic Axis scaler */}
                <>
                    <Container>
                        <Title>Chart basic: Basic Axis scaler</Title>
                        <p>Previously, we used only scalelinear for axis expression. In this time we'll use different scaler to customize axis.</p>
                        <Element ref={CustomAxisRef}>          
                            <BasicAxisScaler
                                width={width}
                                height={height}
                                margin={margin}
                                pointer={pointer}
                                band={band}
                            />
                        </Element>
                    </Container>
                    <BasicAxisScalerDescription/>
                </>

                 {/* Chart basic: Custom axis label */}
                 <>
                    <Container>
                        <Title>Chart basic: Custom axis label</Title>
                        <p>Previously, we used only scalelinear for axis expression. In this time we'll use different scaler to customize axis.</p>
                        <Element ref={CustomAxisRef}>          
                            <CustomAxisLabel
                                width={width}
                                height={height}
                                margin={margin}
                                pointer={pointer}
                                band={band}
                            />
                        </Element>
                    </Container>
                    <CustomAxisLabelDescription/>
                </>

                {/* Chart basic: Random Axis range */}
                <>
                    <Container>
                        <Title>Chart basic: Random Axis range
                            <ButtonContainer>
                                    <Button onClick={() => refreshHandler( <AxisBasic
                                                                                width={width}
                                                                                height={height}
                                                                                margin={margin}
                                                                                refresh={true}
                                                                            />,AxisBasicRef)}>Click Me</Button>
                            </ButtonContainer>
                        </Title>
                        <p>The first thing to do to draw a chart is to build a coordinate system. The coordinate system is divided into x-axis and y-axis based on two dimensions. If it is three dimensions, we need the z-axis, but we will only deal with two dimensions in this time. In the following example, a coordinate system was drawn using various scale ranges.</p>
                        <Element ref={AxisBasicRef}>
                        <AxisBasic
                            width={width}
                            height={height}
                            margin={margin}
                            refresh={false}
                        />
                        </Element>
                        <p>The most basic scale expression method is scale-linar. That is, the scale in the form of a linear function is applied to the axis coordinates.</p>
                    </Container>
                    <AxisBasicDescription/>
                </>
    
                {/* Chart basic: Displaying random data on the random coordinates */}
                <>
                    <Container>
                        <Title>Chart basic: Displaying random data on the random coordinates
                            <ButtonContainer>
                                    <Button onClick={() => refreshHandler(<DataCoordinate
                                                                            width={width}
                                                                            height={height}
                                                                            margin={margin}
                                                                            refresh={true}
                                                                        />,DataCoordinateRef)}>Click Me</Button>
                            </ButtonContainer>
                        </Title>
                        <Element ref={DataCoordinateRef}>
                            <DataCoordinate
                                width={width}
                                height={height}
                                margin={margin}
                                refresh={false}
                            />
                       </Element>
                    </Container>
                    <DataCoordinateDescription/>
                </>
        </Wrapper>
    </>
    )
}

