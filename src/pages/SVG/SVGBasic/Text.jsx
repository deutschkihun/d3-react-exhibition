import React, {useEffect} from 'react'
import { VizContainer,Title,Explanation,Pre,Message } from '../../../ui-lib/lib'
import * as d3 from 'd3'

export const Text = () => {

  useEffect(() => {
    d3.select('text')
      .attr('fill','blue')
      .attr('font-size','15')

    d3.selectAll('.strong')
      .attr('fill','black')
      .attr('font-weight','bold')
  }, [])
  
  return (
    <>
      <VizContainer>
        <Title>SVG basic: text</Title>
        <Message>
          Writing dynamic text component with svg. x: the x coordinate of the starting point, y: the y coordinate of the starting point. default is zero.
          Use defs to save graphic object such as path and connect with textPath href.
        </Message>
        <svg viewBox='0 0 1000 500'>
          <defs>
              <path id="text-curve" d="M 50 100 C 50 100, 400 600, 500 400 C 500 400, 600 -400, 1000 600"></path>
          </defs>
          <text x="0" y="0">
              <textPath href="#text-curve">
                  hello my <tspan className="strong">friends</tspan> my name is Kihun Kim. nice to see you. how are you ? 
                  hello my <tspan className="strong">friends</tspan> my name is Kihun Kim. nice to see you. how are you ? 
                  hello my <tspan className="strong">friends</tspan> my name is Kihun Kim. nice to see you.
              </textPath>
          </text>
        </svg>
      </VizContainer>
      <Explanation>
      <Pre>
              <code>
                  <span>{'<svg viewBox="0 0 1000 500">'} </span>
                  <br/>
                  <span>{'  <defs> '} </span>
                  <br/>
                  <span>{'    <path id="text-curve" d="M 50 100 C 50 100, 400 600, 500 400 C 500 400, 600 -400, 1000 600"></path> '} </span>
                  <br/>
                  <span>{'  </defs> '} </span>
                  <br/>
                  <span>{'  <text x="0" y="0"> '} </span>
                  <br/>
                  <span>{'    <textPath href="#text-curve"> '} </span>
                  <br/>
                  <span>{'      hello my <tspan className="strong">friends</tspan> my name is Kihun Kim. nice to see you. how are you ?'} </span>
                  <br/>
                  <span>{'      hello my <tspan className="strong">friends</tspan> my name is Kihun Kim. nice to see you. how are you ?'} </span>
                  <br/>
                  <span>{'      hello my <tspan className="strong">friends</tspan> my name is Kihun Kim. nice to see you.'} </span>
                  <br/>
                  <span>{'    </textPath> '} </span>
                  <br/>
                  <span>{'  </text> '} </span>
                  <br/>
                  <span>{'</svg> '} </span>
              </code>
      </Pre>
      </Explanation>
    </>
  )
}

