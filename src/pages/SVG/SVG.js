/* eslint-disable jsx-a11y/iframe-has-title */
import React,{ useRef }   from 'react'
import { range } from 'd3';
import {Button} from 'antd';
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
import {refreshHandler} from '../../helper/refreshHandler'
import { Emoji } from './Emoji/Emoji';
import { VizContainer, VizWrapper, MainTitle, ContainerButton, ContainerRef } from '../../ui-lib/lib'

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
            <VizWrapper>
                <VizContainer>
                    <MainTitle>Welcome to SVG exhibition</MainTitle>
                        <p>Scalable Vector Graphics (SVG) are an XML-based markup language for describing two-dimensional based vector graphics.SVG is open Web standard 
                        for describing images that can be rendered cleanly at any size and are designed specifically to work well with other web standards including CSS, 
                        DOM, JavaScript, and SMIL. SVG is, essentially, to graphics what HTML is to text. SVG images and their related behaviors are defined in XML text 
                        files, which means they can be searched, indexed, scripted, and compressed. Additionally, this means they can be created and edited with any text 
                        editor or with drawing software. Compared to classic bitmapped image formats such as JPEG or PNG, SVG-format vector images can be rendered at any 
                        size without loss of quality and can be easily localized by updating the text within them, without the need of a graphical editor to do so.</p>
                </VizContainer>

                {/* SVG without D3: Circle */}
                <>
                    <VizContainer>
                        <MainTitle>SVG without D3: Circle                        
                            <ContainerButton>
                                <Button onClick={() => refreshHandler(<SVGWithoutD3
                                                                        width={width / 4}
                                                                        height={height / 4}
                                                                        centerX={width / 8}
                                                                        centerY={width / 8}
                                                                        stroke={stroke}
                                                                        radius={1.15}
                                                                      />,SVGWithoutD3Ref)}>Click Me</Button>
                            </ContainerButton>
                        </MainTitle>
                        <ContainerRef ref={SVGWithoutD3Ref}>
                        <SVGWithoutD3
                            width={width / 4}
                            height={height / 4}
                            centerX={width / 8}
                            centerY={width / 8}
                            stroke={stroke}
                            radius={1.15}
                            />
                        </ContainerRef>
                    </VizContainer>
                    <SVGWithoutD3Description/>
                </>

                {/* SVG with D3: Circle */}
                <>
                    <VizContainer>
                        <MainTitle>SVG with D3: circle
                            <ContainerButton>
                                <Button onClick={() => refreshHandler(<SVGWithD3
                                                                        width={width / 4}
                                                                        height={height / 4}
                                                                        centerX={width / 8}
                                                                        centerY={width / 8}
                                                                        radius={20}
                                                                        opacity={0.6}
                                                                        refresh={true}
                                                                    />,SVGWithD3Ref)}>Click Me</Button>
                            </ContainerButton>
                        </MainTitle>
                        <ContainerRef ref={SVGWithD3Ref}>
                            <SVGWithD3
                                width={width / 4}
                                height={height / 4}
                                centerX={width / 8}
                                centerY={width / 8}
                                radius={20}
                                opacity={0.6}
                                refresh={false}
                            />
                        </ContainerRef>
                    </VizContainer>
                    <SVGWithD3Description/>
                </>

                  {/* SVG with D3: Circle-Advance */}
                  <>
                    <VizContainer>
                        <MainTitle>
                            SVG with D3: Circle-Advance
                        <ContainerButton>
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
                        </ContainerButton>
                        </MainTitle>
                        <ContainerRef ref={SVGCircleAdvanceRef}>
                            <SVGCircleAdvance
                                width={width / 2}
                                height={height / 2} 
                                centerX={width / 32}
                                centerY={width / 32}
                                radius={40}
                                index={0}
                                opacity={0.6}
                            />
                        </ContainerRef>
                    </VizContainer>
                    <SVGWithD3Description/>
                </>
              
                {/* SVG with D3: Rectangle (Descending order) */}
                <>
                    <VizContainer>
                        <MainTitle>SVG with D3: Rectangle (Descending order)
                            <ContainerButton>
                                <Button onClick={() => refreshHandler(<SVGRectangle
                                                                            width={width}
                                                                            height={height}
                                                                            centerX={0}
                                                                            centerY={0}
                                                                            stroke={stroke}    
                                                                            strokeWidth={10}
                                                                            refresh={true}
                                                                        />,SVGRectangleRef)}>Click Me</Button>
                            </ContainerButton>
                        </MainTitle>
                            <ContainerRef ref={SVGRectangleRef}>
                                <SVGRectangle
                                    width={width}
                                    height={height}
                                    centerX={0}
                                    centerY={0}
                                    stroke={stroke}    
                                    strokeWidth={10}
                                    refresh={false}
                                />
                            </ContainerRef>
                    </VizContainer>
                    <SVGRectangleDescription/>
                </>

                {/* Ex.1) Olympic flag */}
                <>
                    <VizContainer>
                            <MainTitle>Ex.1) Olympic flag</MainTitle>
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
                </>

                {/* Ex.2) Emoji Basic: Smile,Bad,Crying,Angry */}
                <>
                    <VizContainer>
                        <MainTitle>Ex.2) Emoji Basic: Smile,Bad,Crying,Angry</MainTitle>
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
                    </VizContainer>
                    <FaceDescription/>
                </>
            
            
                {/* Ex.3) 16 Randomly generated smile Emojis */}
                <>
                    <VizContainer>
                        <MainTitle>Ex.3) 16 Randomly generated smile Emojis
                        <ContainerButton>
                                <Button onClick={() => refreshHandler(<Face
                                                                        width={width}
                                                                        height={height}
                                                                        centerX={width / 2}
                                                                        centerY={height / 2}
                                                                        type={"random"}/>,FaceRef)}>Click Me</Button>
                        </ContainerButton>
                        </MainTitle>
                        <ContainerRef ref={FaceRef}>
                            <Face
                                width={width}
                                height={height}
                                centerX={width / 2}
                                centerY={height / 2}
                                type={"random"}
                            />
                        </ContainerRef>
                    </VizContainer>
                </>

                  {/* Ex.4) SVG with Scale */}
                  <>
                    <VizContainer>
                        <MainTitle>Ex.4) SVG with Scale </MainTitle>
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
                    </VizContainer>
                    <SVGScaleDescription/>
                </>
            </VizWrapper>

        </>
    )
}

