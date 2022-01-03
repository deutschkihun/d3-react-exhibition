import React, { useEffect } from 'react'
import * as d3 from 'd3'
import { range } from 'd3';
import styled from 'styled-components'
import { Face } from './Face';

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

export const SVG = () => {

    const width = 160;
    const height = 160;
    const array = range(6 * 3);
    
    useEffect(() => {
        var svg = d3.select("#ex_rect1").attr('width','55vw')
        svg.append("circle")
            .attr("cx", 6).attr("cy", 6).attr("r", 70).style("fill", "blue").attr('fill-opacity','0.6');
        svg.append("circle")
            .attr("cx", 10).attr("cy", 10).attr("r", 80).style("fill", "black").attr('fill-opacity','0.6');
        svg.append("circle")
            .attr("cx", 10).attr("cy", 10).attr("r", 90).style("fill", "yello").attr('fill-opacity','0.6');
        svg.append("circle")
            .attr("cx", 10).attr("cy", 10).attr("r", 100).style("fill", "grey").attr('fill-opacity','0.6');
        svg.append("circle")
            .attr("cx", 200).attr("cy", 70).attr("r", 40).style("fill", "red");
        svg.append("circle")
            .attr("cx", 300).attr("cy", 100).attr("r", 40).style("fill", "blue");
        svg.append("circle")
            .attr("cx", 400).attr("cy", 70).attr("r", 40).style("fill", "black");
        svg.append("circle")
            .attr("cx", 500).attr("cy", 100).attr("r", 40).style("fill", "green");
        svg.append("circle")
            .attr("cx", 600).attr("cy", 70).attr("r", 40).style("fill", "yellow");
        svg.append("circle")
            .attr("cx", 700).attr("cy", 100).attr("r", 40).style("fill", "pink");
        svg.append("circle")
            .attr("cx", 800).attr("cy", 70).attr("r", 40).style("fill", "yellow");
        svg.append("circle")
            .attr("cx", 900).attr("cy", 100).attr("r", 40).style("fill", "pink");

        var olympicFlag = d3.select('#olympic_flag').attr('width','55vw').attr('height',"250px")
        olympicFlag.append('circle')
            .attr("cx", 110).attr("cy", 100).attr("r", 60).attr('stroke',"blue").style("stroke-width", 4).style("fill-opacity","0")
        olympicFlag.append('circle')
            .attr("cx", 240).attr("cy", 100).attr("r", 60).attr('stroke',"black").style("stroke-width", 4).style("fill-opacity","0")
        olympicFlag.append('circle')
            .attr("cx", 370).attr("cy", 100).attr("r", 60).attr('stroke',"red").style("stroke-width", 4).style("fill-opacity","0")
        olympicFlag.append('circle')
            .attr("cx", 175).attr("cy", 175).attr("r", 60).attr('stroke',"yellow").style("stroke-width", 4).style("fill-opacity","0")
        olympicFlag.append('circle')
            .attr("cx", 305).attr("cy", 175).attr("r", 60).attr('stroke',"green").style("stroke-width", 4).style("fill-opacity","0")
        
        olympicFlag.append('circle')
            .attr("cx", 500).attr("cy", 100).attr("r", 40).attr('stroke',"blue").style("stroke-width", 4).style("fill-opacity","0")
        olympicFlag.append('circle')
            .attr("cx", 600).attr("cy", 100).attr("r", 40).attr('stroke',"black").style("stroke-width", 4).style("fill-opacity","0")
        olympicFlag.append('circle')
            .attr("cx", 700).attr("cy", 100).attr("r", 40).attr('stroke',"red").style("stroke-width", 4).style("fill-opacity","0")
        olympicFlag.append('circle')
            .attr("cx", 550).attr("cy", 150).attr("r", 40).attr('stroke',"yellow").style("stroke-width", 4).style("fill-opacity","0")
        olympicFlag.append('circle')
            .attr("cx", 650).attr("cy", 150).attr("r", 40).attr('stroke',"green").style("stroke-width", 4).style("fill-opacity","0")
         
        olympicFlag.append('circle')
            .attr("cx", 500).attr("cy", 100).attr("r", 20).attr('stroke',"blue").style("stroke-width", 4).style("fill-opacity","0")
        olympicFlag.append('circle')
            .attr("cx", 600).attr("cy", 100).attr("r", 20).attr('stroke',"black").style("stroke-width", 4).style("fill-opacity","0")
        olympicFlag.append('circle')
            .attr("cx", 700).attr("cy", 100).attr("r", 20).attr('stroke',"red").style("stroke-width", 4).style("fill-opacity","0")
        olympicFlag.append('circle')
            .attr("cx", 550).attr("cy", 150).attr("r", 20).attr('stroke',"yellow").style("stroke-width", 4).style("fill-opacity","0")
        olympicFlag.append('circle')
            .attr("cx", 650).attr("cy", 150).attr("r", 20).attr('stroke',"green").style("stroke-width", 4).style("fill-opacity","0")
      

        var rect = d3.select("#rect").attr("width", '55vw')
        rect.append('rect')
            .attr('x', 10)
            .attr('y', 100)
            .attr('width', 600)
            .attr('height', 40)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2');

        rect.append('rect')
            .attr('x', 10)
            .attr('y', 50)
            .attr('width', 400)
            .attr('height', 40)
            .attr('stroke', 'yellow')
            .attr('stroke-width',5)
            .attr('fill', 'blue');

        rect.append('rect')
            .attr('x', 10)
            .attr('y', 10)
            .attr('width', 200)
            .attr('height', 40)
            .attr('stroke', 'red')
            .attr('stroke-width',2)
            .attr('fill', 'green');
    }, [])

    return (
        <>
            <Wrapper>
                    <Content>
                        <Title>Welcome to SVG exhibition</Title>
                            <p>Scalable Vector Graphics (SVG) are an XML-based markup language for describing two-dimensional based vector graphics.SVG is open Web standard 
                            for describing images that can be rendered cleanly at any size and are designed specifically to work well with other web standards including CSS, 
                            DOM, JavaScript, and SMIL. SVG is, essentially, to graphics what HTML is to text. SVG images and their related behaviors are defined in XML text 
                            files, which means they can be searched, indexed, scripted, and compressed. Additionally, this means they can be created and edited with any text 
                            editor or with drawing software. Compared to classic bitmapped image formats such as JPEG or PNG, SVG-format vector images can be rendered at any 
                            size without loss of quality and can be easily localized by updating the text within them, without the need of a graphical editor to do so.</p>
                    </Content>
            </Wrapper>
            
            <Wrapper>
                <Container>
                <Title>SVG without D3: Circle</Title>
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
                    <Title>SVG with D3: circle</Title>
                    <svg id="ex_rect1"/>
                </Container>
                <Explanation>
                    <h3>Creat a {"<svg> tag"} and wrap circle with {"<circle> tag"}. This should be selectd by d3.select</h3>
                    <Pre>
                    <Code>
                     
                        <span>{'    var svg = d3.select("#ex_rect1").attr("width","55vw")'}</span>
                            <br/>
                        <span>{'    svg.append("circle")'}</span>
                            <br/>
                        <span>{`        .attr("cx", 6).attr("cy", 6).attr("r", 70).style("fill", "blue").attr('fill-opacity','0.6')`}</span>
                            <br/>
                        <span>{'    svg.append("circle")'}</span>
                            <br/>
                        <span>{`        .attr("cx", 200).attr("cy", 70).attr("r", 40).style("fill", "red")`}</span>
                            <br/>
                        <span>{'}, [])'}</span>
                            <br/>
                            <br/>
                        <span>{'<svg id="ex_rect1"/>'}</span>
                    </Code>
                    </Pre>
                    <h4>style: CSS styling</h4>
                    <h4>attr: Abbrevitation for attribute. With this keyword, we can add new attribute in svg</h4>
                    <h4>cx / cy / r: X-axis coordination / y-axis coordination / radius of circle</h4>
                </Explanation>
            </Wrapper>

            <Wrapper>
                <Container>
                    <Title>SVG with D3: Rectangle </Title>
                    <svg id="rect"/>
                </Container>
                <Explanation>
                    <Pre>
                    <Code>
                        <span>{'rect.append("rect")'}</span>
                        <br/>
                        <span>{'    .attr("y", 100)'}</span>
                        <br/>
                        <span>{'    .attr("width", 600)'}</span>
                        <br/>
                        <span>{'    .attr("height", 40)'}</span>
                        <br/>
                        <span>{'    .attr("stroke", "black")'}</span>
                        <br/>
                        <span>{'    .attr("fill", "#69a3b2")'}</span>
                        <br/>
                        <span>{'<svg id="rect"/>'}</span>
                    </Code>
                    </Pre>
                </Explanation>
            </Wrapper>

            <Wrapper>
                <Container>
                    <Title>Ex.1) Olympic flag</Title>
                    <svg id="olympic_flag"/>
                </Container>
                <Explanation>
                    <h3>Building a olympic flag by d3 and React</h3>
                    <Pre>
                    <Code>
                        <span>{'useEffect(() => {'}</span>
                            <br/>
                        <span>{'    var olympicFlag = d3.select("#olympic_flag").attr("width","55vw").attr("height","250px")'}</span>
                            <br/>
                        <span>{'     olympicFlag.append("circle")'}</span>   
                            <br/>
                        <span>{`        .attr("cx", 500).attr("cy", 100).attr("r", 40).attr('stroke',"blue").style("stroke-width", 4).style("fill-opacity","0")`}</span>
                            <br/>
                        <span>{`        .attr("cx", 600).attr("cy", 100).attr("r", 40).attr('stroke',"black").style("stroke-width", 4).style("fill-opacity","0")`}</span>
                            <br/>
                        <span>{`        .attr("cx", 700).attr("cy", 100).attr("r", 40).attr('stroke',"red").style("stroke-width", 4).style("fill-opacity","0")`}</span>
                            <br/>
                        <span>{`        .attr("cx", 550).attr("cy", 150).attr("r", 20).attr('stroke',"yellow").style("stroke-width", 4).style("fill-opacity","0")`}</span>
                            <br/>
                        <span>{`        .attr("cx",650).attr("cy", 150).attr("r", 20).attr('stroke',"green").style("stroke-width", 4).style("fill-opacity","0")`}</span>
                            <br/>
                        <span>{'}, [])'}</span>
                            <br/>
                            <br/>
                        <span>{'<svg id="olympic_flag"/>'}</span>
                    </Code>
                    </Pre>
                    <h4>stroke-width: width of stroke on svg</h4>
                </Explanation>
            </Wrapper>

            <Wrapper>
                <Container>
                    <Title>Ex.2) Emoji Basic: Smile,Bad,Crying,Angry</Title>
                        <Face
                            width={width}
                            height={height}
                            centerX={width / 2}
                            centerY={height / 2}
                            strokeWidth={9}
                            eyeOffsetX={29}
                            eyeOffsetY={35}
                            eyeRadius={10}
                            mouthWidth={10}
                            mouthRadius={35}
                            type={"smile"}
                        />
                        <Face
                            width={width}
                            height={height}
                            centerX={width / 2}
                            centerY={height / 2}
                            strokeWidth={9}
                            eyeOffsetX={29}
                            eyeOffsetY={35}
                            eyeRadius={10}
                            mouthWidth={10}
                            mouthRadius={35}
                            type={"bad"}
                        />
                         <Face
                            width={width}
                            height={height}
                            centerX={width / 2}
                            centerY={height / 2}
                            strokeWidth={9}
                            eyeOffsetX={29}
                            eyeOffsetY={35}
                            eyeRadius={10}
                            mouthWidth={10}
                            mouthRadius={35}
                            type={"crying"}
                        />
                         <Face
                            width={width}
                            height={height}
                            centerX={width / 2}
                            centerY={height / 2}
                            strokeWidth={9}
                            eyeOffsetX={29}
                            eyeOffsetY={35}
                            eyeRadius={10}
                            mouthWidth={10}
                            mouthRadius={35}
                            type={"angry"}
                        />
                </Container>
                <Explanation>
                <Pre>
                        <Code>
                            <span>{' <Face '} </span>
                            <br/>
                            <span>{'    width={width} '} </span>
                            <br/>
                            <span>{'    height={height}'} </span>
                            <br/>
                            <span>{'    centerX={width / 2} '} </span>
                            <br/>
                            <span>{'    strokeWidth={9} '} </span>
                            <br/>
                            <span>{'    eyeOffsetX={29} '} </span>
                            <br/>
                            <span>{'    eyeOffsetY={35} '} </span>
                            <br/>
                            <span>{'    eyeRadius={10} '} </span>
                            <br/>
                            <span>{'    mouthRadius={35} '} </span>
                            <br/>
                            <span>{'    type={"angry"} '} </span>     
                            <br/> 
                            <span>{' />'} </span>                                                     
                        </Code>
                </Pre>
                        <h4>Face is a functional component that takes width,height,centerX,strokeWidth,eyeOffSetX,eyeOffSetY,mouthRadius,type as a properties to make a different emoji.</h4>
                        <h4>The face component is composed of several child components for example, Mouth, FaceContainer, Eye, Tear, EyeBrow. </h4>
                <Pre>
                        <Code>
                            <span>**Eyes component**</span>
                            <br/> 
                            <br/> 
                            <span>{'export const Eyes = ({eyeOffsetX, eyeOffsetY, eyeRadius}) => ('} </span>
                            <br/> 
                            <span>{'<>'} </span>
                            <br/> 
                            <span>{'    <circle'} </span>
                            <br/> 
                            <span>{'        cx={-eyeOffsetX}'} </span>
                            <br/> 
                            <span>{'        cy={-eyeOffsetY}'} </span>
                            <br/> 
                            <span>{'        r={eyeRadius}'} </span>
                            <br/> 
                            <span>{'    <circle'} </span>
                            <br/> 
                            <span>{'        cx={eyeOffsetX}'} </span>
                            <br/> 
                            <span>{'        cy={-eyeOffsetY}'} </span>
                            <br/> 
                            <span>{'        r={eyeRadius}'} </span>
                            <br/> 
                            <span>{'    />'} </span>
                            <br/> 
                            <span>{'</>'} </span>                               
                        </Code>
                </Pre>
                <Pre>
                        <Code>
                            <span>**Tears component**</span>
                            <br/> 
                            <br/> 
                            <span>{'export const EyeBrow = () => {'} </span>
                            <br/> 
                            <span>{'    const leftEyeBrow = [{x: -20, y: -20}, {x: -45, y: -45}]'} </span>
                            <br/> 
                            <span>{'    const rightEyeBrow = [{x: 20, y: -20}, {x: 45, y: -45}]'} </span>
                            <br/> 
                            <span>{'    const eyebrow =  d3.line().x(function(d) {return d.x}).y(function(d) {return d.y})'} </span>
                            <br/> 
                            <span>{'        return ('} </span>
                            <br/> 
                            <span>{'            <>'} </span>
                            <br/> 
                            <span>{'                <path d={eyebrow(leftEyeBrow)} style={{stroke:"black",strokeWidth:"5"}} />'} </span>
                            <br/> 
                            <span>{'                <path d={eyebrow(rightEyeBrow)} style={{stroke:"black",strokeWidth:"5"}} />'} </span>
                            <br/> 
                            <span>{'            </>'} </span>
                            <br/> 
                            <span>{')}'} </span>                               
                        </Code>
                </Pre>
                </Explanation>

            </Wrapper>

            <Wrapper>
                <Container>
                    <Title>Ex.2) Random Emoji</Title>
                    {array.map(() => (
                        <Face
                        width={width}
                        height={height}
                        centerX={width / 2}
                        centerY={height / 2}
                        strokeWidth={6 + Math.random() * 3}
                        eyeOffsetX={20 + Math.random() * 9}
                        eyeOffsetY={20 + Math.random() * 15}
                        eyeRadius={5 + Math.random() * 10}
                        mouthWidth={7 + Math.random() * 9}
                        mouthRadius={30 + Math.random() * 10}
                        type={"random"}
                        />
                    ))}
                </Container>
                <Explanation>
                        <h3>This exmaple shows an 16 random designed emoji. All emojis that appear here are generated randomly without specific rules. 
                        Therefore, all 16 emojis have different designs. </h3>
                </Explanation>
            </Wrapper>

            <Wrapper>
                <Container>
                <Title>Ex.4) SVG with GSAP</Title>
                <p>GSAP is one of the most powerful javascript library for web animation. With this library, we can make a svg animation, such as transform or morph</p>
                </Container>
            </Wrapper>
        </>
    )
}

