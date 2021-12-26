import React, { useEffect } from 'react'
import * as d3 from 'd3'
import styled from 'styled-components'

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

export const Code = styled.code``;

export const SVG = () => {

    // 8 to 10 different variation
    
    useEffect(() => {
        var svg = d3.select("#ex_rect1").attr('width','55vw')
        svg.append("circle")
            .attr("cx", 2).attr("cy", 2).attr("r", 40).style("fill", "blue");
        svg.append("circle")
            .attr("cx", 140).attr("cy", 70).attr("r", 40).style("fill", "red");
        svg.append("circle")
            .attr("cx", 300).attr("cy", 100).attr("r", 40).style("fill", "green");

        d3.select('#target')
        .style("stroke-width", 8) // change their style: stroke width is not equal to 8 pixels

        var rect = d3.select("#rect").append("svg").attr("width", 800).attr("height", 200)
        rect.append('rect')
            .attr('x', 10)
            .attr('y', 120)
            .attr('width', 600)
            .attr('height', 40)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2');
    }, [])

    return (
        <>
            <Wrapper>
                <Container>
                <Title>SVG without D3</Title>
                <svg style={{width:'55vw'}}> 
                    <circle style={{fill:"#69b3a2"}} stroke="black" cx="50" cy="100" r="5"></circle>
                    <circle style={{fill:"#5EBD3E"}} stroke="black" cx="100" cy="100" r="10"></circle>
                    <circle style={{fill:"#FFB900"}} stroke="black" cx="200" cy="100" r="15"></circle>
                    <circle style={{fill:"#F78200"}} stroke="black" cx="300" cy="100" r="20"></circle>
                    <circle style={{fill:"#E23838"}} stroke="black" cx="400" cy="100" r="25"></circle>
                    <circle style={{fill:"#973999"}} stroke="black" cx="500" cy="100" r="30"></circle>
                    <circle style={{fill:"#009CDF"}} stroke="black" cx="600" cy="100" r="35"></circle>
                    <circle style={{fill:"#69b3a2"}} stroke="black" cx="700" cy="100" r="40"></circle>
                    <circle style={{fill:"#5EBD3E"}} stroke="black" cx="800" cy="100" r="45"></circle>
                    <circle style={{fill:"#FFB900"}} stroke="black" cx="900" cy="100" r="48"></circle>
                </svg>
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
            <svg id="ex_rect1" height="200" width="450" />
                </Container>
            </Wrapper>
            <Wrapper>
                <Container>
                <svg> 
                    <circle id="target" style={{fill:"#69b3a2"}} stroke="black" cx="50" cy="50" r="40"></circle>
                </svg>
                </Container>
            </Wrapper>
            <Wrapper>
                <Container>
                {/* smile svg */}
                </Container>
            </Wrapper>
            <Wrapper>
                <Container>
                <svg id="rect"/>
                </Container>
            </Wrapper>
            <Wrapper>
                <Container>
                <svg id="rect"/>
                </Container>
            </Wrapper>
            <Wrapper>
                <Container>
                <svg id="rect"/>
                </Container>
            </Wrapper>
            <Wrapper>
                <Container>
                <svg id="rect"/>
                </Container>
            </Wrapper>
        </>
    )
}

