import React from 'react'
import { Wrapper,Container,Title,Element } from '../SVG/SVG';
import { LineChartBasic } from './LineChartBasic/LineChartBasic';

export const LineChart = () => {

    let margin = {top: 10, right: 40, bottom: 30, left: 40}
    let width = 450 - margin.left - margin.right;
    let height = 400 - margin.top - margin.bottom;
    return (
        <>
            <Wrapper>
               {/* Chart basic: Displaying random data on the random coordinates */}
               <>
                    <Container>
                        <Title>Line Chart Basic: importing data and demonstrating</Title>
                        <p>Previously, we used only scalelinear for axis expression. In this time we'll use different scaler to customize axis.</p>
                        <Element>
                            <LineChartBasic
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

