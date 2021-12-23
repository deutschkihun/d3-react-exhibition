import React from 'react'
import {Icon, Button} from 'antd';
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
`;

export const About = () => {

    return (
        <AboutWrapper>
            <AboutTitle>About "D3 & React Exhibition"</AboutTitle>
            <AboutMessage>This page shows beautiful data visualization in various forms in web browsers using javascript and React, HTML, CSS, and D3.
            D3.js is a JavaScript library for manipulating documents based on data. D3 helps developers bring data to life using HTML, SVG, and CSS. 
            D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining 
            powerful visualization components and a data-driven approach to DOM manipulation.
                <Icon type="smile" /></AboutMessage>     

                <Button onClick={() => window.location.assign("https://www.d3-graph-gallery.com/")}>Reference</Button>
        </AboutWrapper>
    )
}

