import React, { useEffect, useState } from 'react'
import { Collapse, Radio } from 'antd'
import * as d3 from 'd3'
import { VizContainer, VizWrapper, Title, Message } from '../../ui-lib/lib'

const { Panel } = Collapse

export function Prerequisite() {
  const [display, setDisplay] = useState('block')
  useEffect(() => {
    d3.selectAll('.item').style('color', 'blue').style('border', '1px solid black').style('padding', '1px')
  }, [])

  return (
    <VizWrapper>
      <VizContainer>
        <Title>Prerequisite</Title>
        <Message>
          This application implements d3 and react based on numerous css-flex and css-grid design systems. Therefore, in
          order to understand this application more easily and interestingly, I highly recommend that you read the
          prequisite page carefully.
        </Message>
      </VizContainer>

      <VizContainer>
        <div className="container" style={{ background: 'yellow', display: 'flex' }}>
          <div className="item">item1</div>
          <div className="item">item2</div>
          <div className="item">item3</div>
        </div>
        <Message>
          This application implements d3 and react based on numerous css-flex and css-grid design systems. Therefore, in
          order to understand this application more easily and interestingly, I highly recommend that you read the
          prequisite page carefully.
        </Message>
      </VizContainer>

      <VizContainer>
        <Title>Flex container attribute [display:flex]</Title>
        <Collapse>
          <Panel header="option">
            <Radio.Group onChange={e => setDisplay(e.target.value)} value={display}>
              <Radio value="block">block</Radio>
              <Radio value="flex">flex</Radio>
            </Radio.Group>
          </Panel>
        </Collapse>
        <div className="container" style={{ display: `${display}`, background: 'yellow', padding: '0px' }}>
          <div className="item">item1</div>
          <div className="item">item2</div>
          <div className="item">item3</div>
        </div>
        <Message>
          Flex items are placed horizontally and take up only the width of their contents. Like the inline elements. The
          height increases by the height of the container. The characteristic that the height stretches on its own is
          that it&apos;ll be very convenient to make a column layout. You can also adjust how the alignment properties
          handle height later.
        </Message>
      </VizContainer>
    </VizWrapper>
  )
}
