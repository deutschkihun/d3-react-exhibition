import React from 'react'
import {Button} from 'antd';
import styled from "styled-components"

const AboutWrapper = styled.div`
    padding-top:50px;
    fiex-direction:column;
    text-align:center;
    justify-content: center;
    font-size: 3rem;
    padding-left:10vw;
    padding-right:10vw;
`;

const AboutTitle = styled.h4``;
const AboutMessage = styled.p`
  font-size:1rem;
  text-align: center;
  margin: 0;
`;

const ReferenceButton = styled(Button)`
    margin: 0.5em;
`
export const About = () => {

    return (
        <>
        <AboutWrapper>
            <AboutTitle>About "D3 & React Exhibition"</AboutTitle>
            <AboutMessage>
                This page shows beautiful data visualization in various forms in web browsers using javascript and React, HTML, CSS, and D3.
                D3 is a JavaScript library for manipulating documents based on data. D3’s emphasis on web standards gives you the full capabilities of modern 
                browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.
            </AboutMessage>
            <Button onClick={() => window.location.assign("https://github.com/deutschkihun/D3-React-Exhibition")}>Link to source code</Button>
        </AboutWrapper>
        
        <AboutWrapper>
          <AboutTitle>References</AboutTitle> 
          <AboutMessage>The references that helped me a lot in working on this projects</AboutMessage>
              <ReferenceButton onClick={() => window.location.assign("https://www.d3-graph-gallery.com/")}>D3-graph-gallery by Yan Holtz</ReferenceButton>
              <ReferenceButton onClick={() => window.location.assign("https://github.com/d3/d3/wiki")}>D3 official docs</ReferenceButton>
              <ReferenceButton onClick={() => window.location.assign("https://wattenberger.com/blog/react-and-d3")}>D3-react by Wattenberger</ReferenceButton>
              <ReferenceButton onClick={() => window.location.assign("https://www.youtube.com/watch?v=2LhoCfjm8R4")}>Freecodecamp with vizhub.com</ReferenceButton>
      </AboutWrapper>
      </>
    )
}

