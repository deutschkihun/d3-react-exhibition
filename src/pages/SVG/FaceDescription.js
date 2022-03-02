import React from 'react'
import { Explanation,Pre,Code } from '../../ui-lib/lib'

export const FaceDescription = () => {
    return (
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
    )
}

