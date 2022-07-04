import React from 'react'
import { Title, Message, Wrapper } from '../ui-lib/lib'
import d3js from '../assets/d3.svg'
import react from '../assets/react.svg'
import js from '../assets/js.svg'
import node from '../assets/node.svg'
import mongo from '../assets/mongo.svg'
import { Button } from '../helper/Button'

export function AboutPage() {
  return (
    <>
      <Wrapper>
        <Title>About this app</Title>
        <Message>
          This page shows beautiful data visualization in various forms in web browsers using javascript and React,
          HTML, CSS, and D3. D3 is a JavaScript library for manipulating documents based on data. D3’s emphasis on web
          standards gives you the full capabilities of modern browsers without tying yourself to a proprietary
          framework, combining powerful visualization components and a data-driven approach to DOM manipulation.
        </Message>
        <Button
          disabled={false}
          children="Link to source code"
          size="sm"
          variant="success"
          redirect="https://github.com/deutschkihun/D3-React-Exhibition"
        />
      </Wrapper>

      <Wrapper>
        <Title>Tech stack</Title>
        <img className="stack" src={d3js} alt="d3" />
        <img className="stack" src={js} alt="js" />
        <img className="stack" src={react} alt="react" />
        <img className="stack" src={node} alt="node" />
        <img className="stack" src={mongo} alt="mongo" />
      </Wrapper>

      <Wrapper>
        <Title>References</Title>
        <Button
          disabled={false}
          children="D3-graph-gallery by Yan Holtz"
          size="sm"
          variant="success"
          redirect="https://www.d3-graph-gallery.com/"
        />
        <Button
          disabled={false}
          children="freecodecamp"
          size="sm"
          variant="success"
          redirect="https://www.youtube.com/watch?v=2LhoCfjm8R4"
        />
        <Button
          disabled={false}
          children="studiomeal"
          size="sm"
          variant="success"
          redirect="https://studiomeal.com/archives/197"
        />
      </Wrapper>
    </>
  )
}
