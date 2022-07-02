import React, { useState } from 'react';
import { Collapse, Radio } from 'antd';
import { VizContainer,Title, Message, Explanation,Pre } from '../../../ui-lib/lib'
const { Panel } = Collapse;


export const ViewBox = () => {

  const [viewbox, setViewbox] = useState(500)

  return (
    <>
     <VizContainer>
        <Title>SVG basic: view-box</Title>
        <Message>
          viewBox="min-x min-y width height", but the unit of width and height are not pixel. Controlling width and height of view-box, we can zoom-in and zoom-out of svg element.
        </Message>
        <Collapse >
            <Panel header="option">
              <Radio.Group onChange={(e) => setViewbox(e.target.value)} value={viewbox}>
                {Array.from({length:5}, (_,k) => 500 * (k+1)).map((m,i) => (
                  <Radio key={i} value={m}> {`viewBox="0 0 ${m} 500`} </Radio>
                ))}
              </Radio.Group>
            </Panel>
        </Collapse>
        <svg viewBox={`0 0 ${viewbox} 500`} style={{background:'#ddd'}}>
          <rect x="0" y="0" width="250" height="500"/>
        </svg>
        <Message> 
          viewBox is an attribute that allows you to enlarge or reduce the size of an svg element and adjust its position in the area where the svg element is drawn. 
          You can draw the svg element on the screen without the viewBox attribute. However, even if the size of the screen changes, the size of the svg element is fixed, 
          showing a vulnerability to the reaction type. When the viewBox attribute is used, the size of the svg element is automatically adjusted according to 
          the size of the screen. For this reason, viewBox is an essential for responseive web development.       
        </Message>
      </VizContainer>

      <Explanation>
      <Pre>
              <code>
                  <span>{'<svg viewBox="0 0 500 500" style={{background:"#ddd"}}>'} </span>
                  <br/>
                  <span>{'  <rect x="0" y="0" width="10" height="10"/> '} </span>
                  <br/>
                  <span>{'</svg> '} </span>     
              </code>
      </Pre>
      </Explanation>
    </>  
  )
}
