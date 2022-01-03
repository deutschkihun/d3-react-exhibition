import React from 'react'
import styled from 'styled-components'
import { PieChartBasic } from './PieChartBasic';
import { PieChartLabeling } from './PieChartLabeling';

export const Wrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 0px;
  padding-left: 5vw;
  padding-right: 5vw;
`;
export const Container = styled.form`
  width: 60vw;
  min-width: 400px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 6rem;
`;

export const Title = styled.h1`
    text-align:center;
`;

export const Pre = styled.pre`
    background-color:#eee;
    padding: 0.5em 1em 0.5em 1em;
`

export const Explanation = styled.form`
    margin: 0 auto;
    box-shadow: none;
    margin-top: 3rem;
    width: 60vw;
    min-width: 400px;
    max-width: 1200px;
`;

export const Content = styled.div`
    margin: 0 auto;
    box-shadow: none;
    margin-top: 3rem;
    width: 60vw;
    min-width: 400px;
    max-width: 1200px;
    justify-content:flex-end;
`;


export const Code = styled.code``;

export const PieChart = () => {
    
    return (
        <>
            <Wrapper>
                    <Content>
                        <Title>Welcome to Pie Chart Exhibition</Title>
                            <p>A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion. In a pie chart, 
                                the arc length of each slice, is proportional to the quantity it represents.Pie charts can be used to show percentages of a whole, 
                                and represents percentages at a set point in time. Unlike bar graphs and line graphs, pie charts do not show changes over time. 
                                The following pages describe the different parts of a pie chart. For Building a pie chart in with D3 library, d3.pie() is a function, that 
                                you can build a pie chart. This function transform the value of each group to a radius that will be displayed on the chart. This radius is then provided to the d3.arc() 
                                function that draws on arc per group.</p>
                    </Content>
            </Wrapper>
            
            <Wrapper>
                <Container>
                    <Title>Pie Chart basic</Title>     
                    <PieChartBasic/>
                </Container>
                <Explanation>
                    <h3>Creat a {"<svg> tag"} and wrap circle with {"<circle> tag"} </h3>
                    <Pre>
                    <Code>
                        <span>{'<svg>'}</span>
                        <br/>
                        <span>{'    <circle style={{fill:"#FFB900"}} stroke="black" cx="900" cy="100" r="48"></circle>'}</span>
                        <br/>
                        <span>{'<svg>'}</span>
                    </Code>
                    </Pre>
                    <h4>fill: Color of shape</h4>
                    <h4>stroke: Outline color of the shape</h4>
                    <h4>cx / cy / r: X-axis coordination / y-axis coordination / radius of circle</h4>
                </Explanation>
            </Wrapper>

            <Wrapper>
                <Container>
                    <Title>Pie Chart labeling</Title>
                    <PieChartLabeling/>
                </Container>
            </Wrapper>
        </>
    )
}

