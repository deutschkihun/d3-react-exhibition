/* eslint-disable jsx-a11y/iframe-has-title */
import React,{ useRef }   from 'react'
import { range } from 'd3';
import {Button} from 'antd';
import styled from 'styled-components'
import { Face } from './Face/Face';
import {SVGWithoutD3} from './SVGWithoutD3/SVGWithoutD3';
import { SVGWithoutD3Description } from './SVGWithoutD3/SVGWithoutD3Description';
import {SVGWithD3Description} from './SVGWithD3/SVGWithD3Description'
import { SVGWithD3 } from './SVGWithD3/SVGWithD3';
import { SVGCircleAdvance } from './SVGCircleAdvance/SVGCircleAdvance';
import {SVGRectangle} from './SVGRectangle/SVGRectangle'
import {SVGRectangleDescription} from './SVGRectangle/SVGRectangleDescription'
import { OlympicFlagDescription } from './OlympicFlag/OlympicFlagDescription';
import {OlympicFlag} from './OlympicFlag/OlympicFlag'
import {FaceDescription} from './Face/FaceDescription'
import {SVGScale} from './SVGScale/SVGScale'
import { SVGScaleDescription } from './SVGScale/SVGScaleDescription';
import {refreshHandler} from '../../../helper/refreshHandler'
import { Emoji } from './Emoji/Emoji';

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

export const ButtonContainer = styled.div`
    font-family: var(--headingFont);
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: var(--letterSpacing);
`;


export const Code = styled.code``;
export const Element = styled.div``;

export const SVG = () => {

    const width = 160;
    const height = 160;
    const stroke = "black"
    const faceRange = range(4)
    const type = ['smile','bad','crying','angry']

    const SVGWithoutD3Ref = useRef(null)
    const SVGWithD3Ref = useRef(null)
    const SVGCircleAdvanceRef = useRef(null)
    const SVGRectangleRef = useRef(null)
    const FaceRef = useRef(null)
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
                        <Title>SVG without D3: Circle                        
                            <ButtonContainer>
                                <Button onClick={() => refreshHandler(<SVGWithoutD3
                                                                        width={width / 4}
                                                                        height={height / 4}
                                                                        centerX={width / 8}
                                                                        centerY={width / 8}
                                                                        stroke={stroke}
                                                                        radius={1.15}
                                                                      />,SVGWithoutD3Ref)}>Click Me</Button>
                            </ButtonContainer>
                        </Title>
                        <Element ref={SVGWithoutD3Ref}>
                        <SVGWithoutD3
                            width={width / 4}
                            height={height / 4}
                            centerX={width / 8}
                            centerY={width / 8}
                            stroke={stroke}
                            radius={1.15}
                            />
                        </Element>
                    </Container>
                    <SVGWithoutD3Description/>
                </>

                {/* SVG with D3: Circle */}
                <>
                    <Container>
                        <Title>SVG with D3: circle
                            <ButtonContainer>
                                <Button onClick={() => refreshHandler(<SVGWithD3
                                                                        width={width / 4}
                                                                        height={height / 4}
                                                                        centerX={width / 8}
                                                                        centerY={width / 8}
                                                                        radius={20}
                                                                        opacity={0.6}
                                                                        refresh={true}
                                                                    />,SVGWithD3Ref)}>Click Me</Button>
                            </ButtonContainer>
                        </Title>
                        <Element ref={SVGWithD3Ref}>
                            <SVGWithD3
                                width={width / 4}
                                height={height / 4}
                                centerX={width / 8}
                                centerY={width / 8}
                                radius={20}
                                opacity={0.6}
                                refresh={false}
                            />
                        </Element>
                    </Container>
                    <SVGWithD3Description/>
                </>

                  {/* SVG with D3: Circle-Advance */}
                  <>
                    <Container>
                        <Title>
                            SVG with D3: Circle-Advance
                        <ButtonContainer>
                            <Button onClick={() => refreshHandler(<SVGCircleAdvance
                                                                        width={width / 2}
                                                                        height={height / 2} 
                                                                        centerX={width / 32}
                                                                        centerY={width / 32}
                                                                        radius={40}
                                                                        index={0}
                                                                        opacity={0.6}
                                                                    />,SVGCircleAdvanceRef
                                                                    )}>Click Me</Button>
                        </ButtonContainer>
                        </Title>
                        <Element ref={SVGCircleAdvanceRef}>
                            <SVGCircleAdvance
                                width={width / 2}
                                height={height / 2} 
                                centerX={width / 32}
                                centerY={width / 32}
                                radius={40}
                                index={0}
                                opacity={0.6}
                            />
                        </Element>
                    </Container>
                    <SVGWithD3Description/>
                </>
              
                {/* SVG with D3: Rectangle (Descending order) */}
                <>
                    <Container>
                        <Title>SVG with D3: Rectangle (Descending order)
                            <ButtonContainer>
                                <Button onClick={() => refreshHandler(<SVGRectangle
                                                                            width={width}
                                                                            height={height}
                                                                            centerX={0}
                                                                            centerY={0}
                                                                            stroke={stroke}    
                                                                            strokeWidth={10}
                                                                            refresh={true}
                                                                        />,SVGRectangleRef)}>Click Me</Button>
                            </ButtonContainer>
                            </Title>
                            <Element ref={SVGRectangleRef}>
                                <SVGRectangle
                                    width={width}
                                    height={height}
                                    centerX={0}
                                    centerY={0}
                                    stroke={stroke}    
                                    strokeWidth={10}
                                    refresh={false}
                                />
                            </Element>
                    </Container>
                    <SVGRectangleDescription/>
                </>

                {/* Ex.1) Olympic flag */}
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

                {/* Ex.2) Emoji Basic: Smile,Bad,Crying,Angry */}
                <>
                    <Container>
                        <Title>Ex.2) Emoji Basic: Smile,Bad,Crying,Angry</Title>
                        {faceRange.map((i) => (
                            <Emoji
                                width={width}
                                height={height}
                                centerX={width / 2}
                                centerY={height / 2}
                                random={false}
                                type={type[i]}
                            />
                        ))}
                    </Container>
                    <FaceDescription/>
                </>
            
            
                {/* Ex.3) 16 Randomly generated smile Emojis */}
                <>
                    <Container>
                        <Title>Ex.3) 16 Randomly generated smile Emojis
                        <ButtonContainer>
                                <Button onClick={() => refreshHandler(<Face
                                                                        width={width}
                                                                        height={height}
                                                                        centerX={width / 2}
                                                                        centerY={height / 2}
                                                                        type={"random"}/>,FaceRef)}>Click Me</Button>
                            </ButtonContainer>
                        </Title>
                        <Element ref={FaceRef}>
                            <Face
                                width={width}
                                height={height}
                                centerX={width / 2}
                                centerY={height / 2}
                                type={"random"}
                            />
                        </Element>
                    </Container>
                </>

                  {/* Ex.4) SVG with Scale */}
                  <>
                    <Container>
                        <Title>Ex.4) SVG with Scale </Title>
                        <p> In SVG, the position of element is with pixel set. But when we use a input data to set a svg position, 
                            we need a function that convert numeric variable to a svg position in pixel unit. This is what we called 
                            a scale function in d3. Scale has 2 important properties. Domain represents the interval of min and max for the data 
                            percentage. Range represent a interval of pixel.
                        </p>
                        <SVGScale
                                width={width}
                                height={height}
                                centerX={width / 2}
                                centerY={height / 2}
                                stroke={stroke}
                                radius={10}
                        />
                    </Container>
                    <SVGScaleDescription/>
                </>

                {/* Ex.5) SVG with GSAP */}
                <>
                    <Container>
                        <Title>Ex.5) SVG with GSAP</Title>
                        <p>GSAP is one of the most powerful javascript library for web animation. With this library, we can make a svg animation, such as transform or morph</p>
                    </Container>
                </>

            </Wrapper>

        </>
    )
}

