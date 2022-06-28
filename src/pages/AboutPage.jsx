import React from 'react'
import { Title, Message, Btn, Wrapper } from '../ui-lib/lib';


export const AboutPage = () => {
    return (
        <>
            <Wrapper>
                <Title>About This App</Title>
                <Message>
                    This page shows beautiful data visualization in various forms in web browsers using javascript and React, HTML, CSS, and D3.
                    D3 is a JavaScript library for manipulating documents based on data. D3’s emphasis on web standards gives you the full capabilities of modern 
                    browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.
                </Message>
                <Btn onClick={() => window.location.assign("https://github.com/deutschkihun/D3-React-Exhibition")}>Link to source code</Btn>
            </Wrapper>
            
            <Wrapper>
            <Title>References</Title> 
                <Btn onClick={() => window.location.assign("https://www.d3-graph-gallery.com/")}>D3-graph-gallery by Yan Holtz</Btn>
                <Btn onClick={() => window.location.assign("https://github.com/d3/d3/wiki")}>D3 official docs</Btn>
                <Btn onClick={() => window.location.assign("https://wattenberger.com/blog/react-and-d3")}>D3-react by Wattenberger</Btn>
                <Btn onClick={() => window.location.assign("https://www.youtube.com/watch?v=2LhoCfjm8R4")}>Freecodecamp with vizhub.com</Btn>
            </Wrapper>
      </>
    )
}

