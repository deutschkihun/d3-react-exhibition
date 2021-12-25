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
export const ProjectContainer = styled.form`
  width: 60vw;
  margin: 0 auto;
  margin-top: 6rem;
`;


export const SVG = () => {

    // 8 to 10 different variation
    
    useEffect(() => {
        var svg = d3.select("#dataviz_area").attr('width','55vw')
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
                <ProjectContainer>
                {/* svg without d3 */}
                <svg>
                    <circle style={{fill:"#69b3a2"}} stroke="black" cx="100" cy="100" r="10"></circle>
                    <circle style={{fill:"#69b3a2"}} stroke="black" cx="150" cy="130" r="20"></circle>
                    <circle style={{fill:"#69b3a2"}} stroke="black" cx="300" cy="130" r="20"></circle>
                </svg>
                <svg>
                </svg>
                </ProjectContainer>
            </Wrapper>
            <Wrapper>
                <ProjectContainer>
            {/* svg with d3 */}
            <svg id="dataviz_area" height="200" width="450" />
                </ProjectContainer>
            </Wrapper>
            <Wrapper>
                <ProjectContainer>
                <svg> 
                    <circle id="target" style={{fill:"#69b3a2"}} stroke="black" cx="50" cy="50" r="40"></circle>
                </svg>
                </ProjectContainer>
            </Wrapper>
            <Wrapper>
                <ProjectContainer>
                <svg id="rect"/>
                </ProjectContainer>
            </Wrapper>
            <Wrapper>
                <ProjectContainer>
                <svg id="rect"/>
                </ProjectContainer>
            </Wrapper>
            <Wrapper>
                <ProjectContainer>
                <svg id="rect"/>
                </ProjectContainer>
            </Wrapper>
            <Wrapper>
                <ProjectContainer>
                <svg id="rect"/>
                </ProjectContainer>
            </Wrapper>
            <Wrapper>
                <ProjectContainer>
                <svg id="rect"/>
                </ProjectContainer>
            </Wrapper>
        </>
    )
}

