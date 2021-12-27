import React from 'react'
import { Container, Wrapper,Title } from '../SVG/SVG'

export const LineChart = () => {



    return (
        <>
            <Wrapper>
                <Container>
                    <Title>Linear line with d3.line()</Title>
                </Container>
            </Wrapper>

        <Wrapper>
            <Container>
                <Title>Curve line with d3.line() </Title>
            </Container>
        </Wrapper>

        <Wrapper>
            <Container>
                <Title>Function's area with d3.area()</Title>
            </Container>
        </Wrapper>
    </>
    )
}

