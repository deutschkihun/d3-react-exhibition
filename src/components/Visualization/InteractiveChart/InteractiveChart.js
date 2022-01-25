import React from 'react'
import { Wrapper,Container,Title,Element } from '../../../helper/helperComponents';
import { InteractiveLineChart } from './InteractiveLineChart/InteractiveLineChart';

export const InteractiveChart = () => {

    let margin = {top: 10, right: 40, bottom: 30, left: 40}
    let width = 450 - margin.left - margin.right;
    let height = 400 - margin.top - margin.bottom;


    return (
        <>
            <Wrapper>
                <Container>
                    <Title>Comming soon InteractiveChart</Title>
                    <Element>
                        <InteractiveLineChart
                            width={width}
                            height={height}
                            margin={margin}
                        />
                    </Element>
                </Container>   
            </Wrapper>

        </>
    )
}

