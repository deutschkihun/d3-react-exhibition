import React from 'react'
import { Wrapper,Container,Title,Element } from '../../../helper/helperComponents';
import { InteractiveLineChart } from './InteractiveLineChart/InteractiveLineChart';
import { margin,width,height } from '../../../helper/positionData';
import { Brushing } from './Brushing/Brushing';

export const InteractiveChart = () => {

    return (
        <>
            <Wrapper>
                <>
                {/* D3 interactive : brushing */}
                    <Container>
                        <Title>D3 interactive : Brushing </Title>
                        <p> Brushing is the interactive specification a one- or two-dimensional selected region using a pointing gesture, such as by 
                            clicking and dragging the mouse. Brushing is often used to select discrete elements, such as dots in a scatterplot or files on a desktop. 
                            It can also be used to zoom-in to a region of interest, or to select continuous regions for cross-filtering data or live histograms</p>
                        <Element>
                            <Brushing
                                width={width}
                                height={height}
                                margin={margin}
                            />
                        </Element>
                    </Container> 
                </>

                <>
                {/* D3 interactive : brushing event triggering */}
                    <Container>
                        <Title>D3 interactive : Brushing event triggering </Title>
                            <p>Trigger a change with on or classed</p>
                        <Element>
                            <Brushing
                                width={width}
                                height={height}
                                margin={margin}
                            />
                        </Element>
                    </Container> 
                </>

                <>
                    {/* D3 interactive : Brushing line chart */}
                    <Container>
                        <Title>D3 interactive : brushing line chart</Title>
                        <Element>
                            <InteractiveLineChart
                                width={width}
                                height={height}
                                margin={margin}
                            />
                        </Element>
                    </Container>   
                </>

                <>
                    {/* D3 interactive : Brushing scatter plot */}
                    <Container>
                        <Title>D3 interactive : Brushing scatter plot</Title>
                        <Element>
                            <InteractiveLineChart
                                width={width}
                                height={height}
                                margin={margin}
                            />
                        </Element>
                    </Container>   
                </>

                <>
                {/* D3 interactive : Switching */}
                    <Container>
                        <Title>D3 interactive : Switching </Title>
                        <p>Switching</p>
                    </Container> 
                </>
            </Wrapper>
        </>
    )
}

