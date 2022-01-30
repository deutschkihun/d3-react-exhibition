/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import {Title,Wrapper,Content} from '../../../helper/helperComponents'

export const SVGAnimation = () => {

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

        </>
    )
}

