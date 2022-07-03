import React, { useEffect } from 'react'
import { VizContainer, Title, Message, Explanation, Pre } from '../../../ui-lib/lib'

export function Mask() {
  return (
    <>
      <VizContainer>
        <Title>SVG basic: mask</Title>
        <Message>
          mask is a effect that show only specific area, other areas are hidden by mask. Set the color to white will
          show the effect area. when the fill color close to black effect area will be disappeared.
        </Message>
        <svg style={{ width: '100%' }}>
          <defs>
            <mask id="mask-circle">
              <circle cx="150" cy="70" r="40" fill="grey" />
              <circle cx="250" cy="70" r="40" fill="white" />
              <circle cx="350" cy="70" r="40" fill="white" />
            </mask>
          </defs>
          <g mask="url(#mask-circle)">
            <text x="10" y="100" fontSize="2rem">
              ex.) mask svg d3 react mask svg d3 react mask svg d3 react mask svg d3 react mask svg d3 react
            </text>
          </g>
        </svg>
      </VizContainer>
      <Explanation>
        <Pre>
          <code>
            <span>{'<svg style={{ width: "100%" }}>'} </span>
            <br />
            <span>{'    <defs> '} </span>
            <br />
            <span>{'    <mask id="mask-circle"> '}</span>
            <br />
            <span>{'        <circle cx="150" cy="70" r="40" fill="grey" />'}</span>
            <br />
            <span>{'        <circle cx="250" cy="70" r="40" fill="white" />'}</span>
            <br />
            <span>{'        <circle cx="350" cy="70" r="40" fill="white" />'}</span>
            <br />
            <span>{'    </mask>'}</span>
            <br />
            <span>{'    </defs> '} </span>
            <br />
            <span>{'    <g mask="url(#mask-circle)">'}</span>
            <br />
            <span>{'        <text x="10" y="100">'}</span>
            <br />
            <span> ex.) mask svg d3 react mask svg d3 react mask svg d3 react mask svg d3 react mask svg d3 react</span>
            <br />
            <span>{'        </text>'}</span>
            <br />
            <span>{'    </g>'}</span>
            <br />
            <span>{'</svg> '} </span>
          </code>
        </Pre>
      </Explanation>
    </>
  )
}
