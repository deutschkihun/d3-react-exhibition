import React from 'react'
import { range } from 'd3';
import styled from 'styled-components'
import { Face } from './Face';
import {SVGWithoutD3} from './SVGWithoutD3/SVGWithoutD3';
import { SVGWithoutD3Description } from './SVGWithoutD3/SVGWithoutD3Description';
import {SVGWithD3Description} from './SVGWithD3/SVGWithD3Description'
import { SVGWithD3 } from './SVGWithD3/SVGWithD3';
import { SVGCircleAdvance } from './SVGCircleAdvance/SVGCircleAdvance';
import {SVGRectangle} from './SVGRectangle/SVGRectangle'
import {SVGRectangleDescription} from './SVGRectangle/SVGRectangleDescription'
import { OlympicFlagDescription } from './OlympicFlag/OlympicFlagDescription';
import {OlympicFlag} from './OlympicFlag/OlympicFlag'

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
    const stroke = "black"

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

                {/* SVG without D3: Circle */}
                <>
                    <Container>
                        <Title>SVG without D3: Circle</Title>
                        {array.map((i) => (
                            <SVGWithoutD3
                            width={width / 4}
                            height={height / 4}
                            centerX={width / 8}
                            centerY={width / 8}
                            stroke={stroke}
                            radius={i*1.15}
                            />
                        ))}
                    </Container>
                    <SVGWithoutD3Description/>
                </>

                {/* SVG with D3: Circle */}
                <>
                    <Container>
                        <Title>SVG with D3: circle</Title>
                        {array.map((i) => (
                            <SVGWithD3
                            width={width / 4}
                            height={height / 4}
                            centerX={width / 8}
                            centerY={width / 8}
                            radius={20}
                            index={i}
                            opacity={0.6}
                            />
                        ))}
                    </Container>
                    <SVGWithD3Description/>
                </>

                  {/* SVG with D3: Circle-Advance */}
                  <>
                    <Container>
                        <Title>SVG with D3: Circle-Advance</Title>
                        {array.map(() => (
                            <SVGCircleAdvance
                                width={width / 2}
                                height={height / 2} 
                                centerX={width / 32}
                                centerY={width / 32}
                                radius={40}
                                index={0}
                                opacity={0.6}
                            />
                        ))}
                    </Container>
                    <SVGWithD3Description/>
                </>
              
                {/* SVG with D3: Rectangle (Descending order) */}
                <>
                    <Container>
                        <Title>SVG with D3: Rectangle (Descending order)</Title>
                        {array.reverse().map((i) => (
                            <SVGRectangle
                                width={width}
                                height={height}
                                centerX={0}
                                centerY={0}
                                stroke={stroke}    
                                strokeWidth={10}
                                index={i}                              
                            />
                        ))}
                    </Container>
                    <SVGRectangleDescription/>
                </>

                <>
                    <Container>
                            <Title>Ex.1) Olympic flag</Title>
                            <OlympicFlag
                                width={400}
                                height={230} 
                                centerX={-35}
                                centerY={-35}
                                radius={60}
                                strokeWidth={4}
                                stroke={stroke}
                            />
                    </Container>
                    <OlympicFlagDescription/>
                </>

        
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
            
                {/* Ex.3) Random Emoji */}
                <>
                    <Container>
                        <Title>Ex.3) Random Emoji</Title>
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
                </>

                {/* Ex.4) SVG with GSAP */}
                <>
                    <Container>
                        <Title>Ex.4) SVG with GSAP</Title>
                        <p>GSAP is one of the most powerful javascript library for web animation. With this library, we can make a svg animation, such as transform or morph</p>
                    </Container>
                </>
              
            </Wrapper>

        </>
    )
}

