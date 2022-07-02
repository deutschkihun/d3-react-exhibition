/* eslint-disable jsx-a11y/iframe-has-title */
import React,{ useRef }   from 'react'
import { range } from 'd3';
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
import {FaceDescription} from './FaceDescription'
import {SVGScale} from './SVGScale/SVGScale'
import { SVGScaleDescription } from './SVGScale/SVGScaleDescription';
import {refreshHandler} from '../../helper/refreshHandler'
import { Emoji } from './Emoji';
import { SVGOnMouse } from './SVGOnMouse/SVGOnMouse'
import {SVGBasic} from './SVGBasic/SVGBasic'
import { VizContainer, VizWrapper, Title, Ref, Message,Btn } from '../../ui-lib/lib'

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
            <VizWrapper>
                <VizContainer>
                    <Title>Welcome to SVG exhibition</Title>
                        <Message>
                            Scalable Vector Graphics (SVG) are an XML-based markup language for describing two-dimensional based vector graphics.SVG is open Web standard 
                            for describing images that can be rendered cleanly at any size and are designed specifically to work well with other web standards including CSS, 
                            DOM, JavaScript, and SMIL. SVG is, essentially, to graphics what HTML is to text. SVG images and their related behaviors are defined in XML text 
                            files, which means they can be searched, indexed, scripted, and compressed. Additionally, this means they can be created and edited with any text 
                            editor or with drawing software. Compared to classic bitmapped image formats such as JPEG or PNG, SVG-format vector images can be rendered at any 
                            size without loss of quality and can be easily localized by updating the text within them, without the need of a graphical editor to do so.
                        </Message>
                </VizContainer>

                {/* SVG basic */}

                <SVGBasic />

                {/* SVG without D3: Circle */}
                    <VizContainer>
                        <Title>SVG without D3: Circle                        
                                <Btn onClick={() => refreshHandler(<SVGWithoutD3
                                                                        width={width / 4}
                                                                        height={height / 4}
                                                                        centerX={width / 8}
                                                                        centerY={width / 8}
                                                                        stroke={stroke}
                                                                        radius={1.15}
                                                                      />,SVGWithoutD3Ref)}>Click Me</Btn>
                        </Title>
                        <Ref ref={SVGWithoutD3Ref}>
                        <SVGWithoutD3
                            width={width / 4}
                            height={height / 4}
                            centerX={width / 8}
                            centerY={width / 8}
                            stroke={stroke}
                            radius={1.15}
                            />
                        </Ref>
                    </VizContainer>
                    <SVGWithoutD3Description/>

                {/* SVG with D3: Circle */}
                    <VizContainer>
                        <Title> SVG with D3: circle
                                <Btn onClick={() => refreshHandler(<SVGWithD3
                                                                        width={width / 4}
                                                                        height={height / 4}
                                                                        centerX={width / 8}
                                                                        centerY={width / 8}
                                                                        radius={20}
                                                                        opacity={0.6}
                                                                        refresh={true}
                                                                    />,SVGWithD3Ref)}>Click Me</Btn>
                        </Title>
                        <Ref ref={SVGWithD3Ref}>
                            <SVGWithD3
                                width={width / 4}
                                height={height / 4}
                                centerX={width / 8}
                                centerY={width / 8}
                                radius={20}
                                opacity={0.6}
                                refresh={false}
                            />
                        </Ref>
                    </VizContainer>
                    <SVGWithD3Description/>

                  {/* SVG with D3: Circle-Advance */}
                    <VizContainer>
                        <Title> SVG with D3: Circle-Advance
                            <Btn onClick={() => refreshHandler(<SVGCircleAdvance
                                                                        width={width / 2}
                                                                        height={height / 2} 
                                                                        centerX={width / 32}
                                                                        centerY={width / 32}
                                                                        radius={40}
                                                                        index={0}
                                                                        opacity={0.6}
                                                                    />,SVGCircleAdvanceRef
                                                                    )}>Click Me</Btn>
                        </Title>
                        <Ref ref={SVGCircleAdvanceRef}>
                            <SVGCircleAdvance
                                width={width / 2}
                                height={height / 2} 
                                centerX={width / 32}
                                centerY={width / 32}
                                radius={40}
                                index={0}
                                opacity={0.6}
                            />
                        </Ref>
                    </VizContainer>
                    <SVGWithD3Description/>
              
                {/* SVG with D3: Rectangle (Descending order) */}
                    <VizContainer>
                        <Title>SVG with D3: Rectangle (Descending order)
                                <Btn onClick={() => refreshHandler(<SVGRectangle
                                                                            width={width}
                                                                            height={height}
                                                                            centerX={0}
                                                                            centerY={0}
                                                                            stroke={stroke}    
                                                                            strokeWidth={10}
                                                                            refresh={true}
                                                                        />,SVGRectangleRef)}>Click Me</Btn>
                        </Title>
                            <Ref ref={SVGRectangleRef}>
                                <SVGRectangle
                                    width={width}
                                    height={height}
                                    centerX={0}
                                    centerY={0}
                                    stroke={stroke}    
                                    strokeWidth={10}
                                    refresh={false}
                                />
                            </Ref>
                    </VizContainer>
                    <SVGRectangleDescription/>

                {/* Ex.1) Olympic flag */}
                    <VizContainer>
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
                    </VizContainer>
                    <OlympicFlagDescription/>

                {/* Ex.2) Emoji Basic: Smile,Bad,Crying,Angry */}
                    <VizContainer>
                        <Title>Ex.2) Emoji Basic: Smile,Bad,Crying,Angry</Title>
                        {faceRange.map((i) => (
                            <Emoji
                                key={i}
                                width={width}
                                height={height}
                                centerX={width / 2}
                                centerY={height / 2}
                                random={false}
                                type={type[i]}
                            />
                        ))}
                    </VizContainer>
                    <FaceDescription/>
            
            
                {/* Ex.3) 16 Randomly generated smile Emojis */}
                    <VizContainer>
                        <Title>Ex.3) 16 Randomly generated smile Emojis
                                <Btn onClick={() => refreshHandler(<Face
                                                                        width={width}
                                                                        height={height}
                                                                        centerX={width / 2}
                                                                        centerY={height / 2}
                                                                        type={"random"}/>,FaceRef)}>Click Me</Btn>
                        </Title>
                        <Ref ref={FaceRef}>
                            <Face
                                width={width}
                                height={height}
                                centerX={width / 2}
                                centerY={height / 2}
                                type={"random"}
                            />
                        </Ref>
                    </VizContainer>

                  {/* Ex.4) SVG with Scale */}
                    <VizContainer>
                        <Title>Ex.4) SVG with Scale </Title>
                        <Message> 
                            In SVG, the position of element is with pixel set. But when we use a input data to set a svg position, 
                            we need a function that convert numeric variable to a svg position in pixel unit. This is what we called 
                            a scale function in d3. Scale has 2 important properties. Domain represents the interval of min and max for the data 
                            percentage. Range represent a interval of pixel.
                        </Message>
                        <SVGScale
                                width={width}
                                height={height}
                                centerX={width / 2}
                                centerY={height / 2}
                                stroke={stroke}
                                radius={10}
                        />
                    </VizContainer>
                    <SVGScaleDescription/>

                    <VizContainer>
                        <Title>Ex.5) SVG Circle that follows the mouse cursor</Title>
                        <Message> 
                            Svg circle and reaction on mouse event can be used to create interactions that follow the cursor.
                        </Message>
                        <SVGOnMouse
                                width={width}
                                height={height}
                                stroke={stroke}
                                radius={10}
                        />
                    </VizContainer>
                    <SVGScaleDescription/>
            </VizWrapper>
    )
}

