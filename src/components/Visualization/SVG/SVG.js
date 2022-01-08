/* eslint-disable jsx-a11y/iframe-has-title */
import React,{ useRef }   from 'react'
import ReactDOM from 'react-dom';
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
export const Element = styled.div``;

export const SVG = () => {

    const width = 160;
    const height = 160;
    const array = range(6 * 3);
    const stroke = "black"
    const faceRange = range(4)
    const type = ['smile','bad','crying','angry']

    const refContainer = useRef(null)
    const svgWithoutD3 = array.map((i) => (
        <SVGWithoutD3
        width={width / 4}
        height={height / 4}
        centerX={width / 8}
        centerY={width / 8}
        stroke={stroke}
        radius={i*1.15}
        />
    ))

    const refreshHandler = (jsxElement) => {
        ReactDOM.render(jsxElement,refContainer.current)
    }

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
                        <Title>SVG without D3: Circle<Button onClick={() => refreshHandler(svgWithoutD3)}>Click Me</Button></Title>
                        <Element ref={refContainer}>
                            {svgWithoutD3}
                        </Element>
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
                                type={type[i]}
                            />
                        ))}
                    </Container>
                    <FaceDescription/>
                </>
            
            
                {/* Ex.3) 16 Randomly generated smile Emojis */}
                <>
                    <Container>
                        <Title>Ex.3) 16 Randomly generated smile Emojis</Title>
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

