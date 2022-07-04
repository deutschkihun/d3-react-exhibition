import React, { useEffect, useState } from 'react'
import { Collapse, Radio } from 'antd'
import * as d3 from 'd3'
import { VizContainer, VizWrapper, Title, Message, Explanation, Pre, Images } from '../../ui-lib/lib'
import flex from '../../assets/flex.png'
import inlineflex from '../../assets/inline-flex.png'
import justify from '../../assets/justify-content.png'

const { Panel } = Collapse

export function Prerequisite() {
  const [display, setDisplay] = useState('block')
  const [flexdirection, setFlexdirection] = useState('row')
  const [wrap, setWrap] = useState('wrap')
  const [justifycontent, setJustifycontent] = useState('flex-start')
  const [alignitem, setAlignitem] = useState('stretch')
  const [aligncontent, setAligncontent] = useState('stretch')
  const [flexgrow, setFlexgrow] = useState('0')
  const [flexshrink, setFlexshrink] = useState('100%')
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
        <Title>CSS flex</Title>
        <Message>In order to implement css flex, a parent container and a child item are basically required.</Message>
        <Explanation>
          <Pre>
            <code>
              <span>{'<div className="container"> '} </span>
              <br />
              <span>{'    <div className="item1">item1</div> '} </span>
              <br />
              <span>{'    <div className="item2">item2</div> '} </span>
              <br />
              <span>{'    <div className="item3">item3</div> '} </span>
              <br />
              <span>{'</div>'} </span>
            </code>
          </Pre>
        </Explanation>
        <Message>
          Flex properties that can be applied when developing are divided into parent container properties and child
          item properties.
        </Message>
      </VizContainer>

      <VizContainer>
        <Title>Flex container attribute [display]</Title>
        <Collapse>
          <Panel header="option">
            <Radio.Group onChange={e => setDisplay(e.target.value)} value={display}>
              <Radio value="block">block</Radio>
              <Radio value="flex">flex</Radio>
              <Radio value="inline-flex">inline-flex</Radio>
            </Radio.Group>
          </Panel>
        </Collapse>
        <div
          className="container"
          style={{ display: `${display}`, background: 'yellow', padding: '0px', width: 'auto' }}
        >
          <div className="item">item1item1item1item1item1item1</div>
          <div className="item">item2</div>
          <div className="item">item3</div>
        </div>
        <Message>
          Flex items are placed horizontally and take up only the width of their contents. Like the inline elements. The
          height increases by the height of the container. Check out the difference of flex and float in css.
        </Message>
        <Images src={flex} style={{ maxHeight: 'none' }} />
        <Message>Check out the difference between flex and inline-flex</Message>
        <Images src={inlineflex} style={{ maxHeight: 'none' }} />
        <Message>
          Flex has two different axis. The axis of the direction in which the items are placed is the main axis, An axis
          vertical to the main axis is called a cross axis.
        </Message>
      </VizContainer>

      <VizContainer>
        <Title>Flex container attribute [flex-direction]</Title>
        <Message>
          The property that determines the direction of the axis on which the items are placed. In other words, it is an
          attribute that determines whether the main axis direction is horizontal or vertical.
          <strong style={{ color: 'red' }}> Display attribute should be &apos;flex&apos;</strong>
        </Message>
        <Collapse>
          <Panel header="option">
            <Radio.Group onChange={e => setFlexdirection(e.target.value)} value={flexdirection}>
              <Radio value="row">row</Radio>
              <Radio value="row-reverse">row-reverse</Radio>
              <Radio value="column">column</Radio>
              <Radio value="column-reverse">colum-reverse</Radio>
            </Radio.Group>
          </Panel>
        </Collapse>
        <div
          className="container"
          style={{
            display: 'flex',
            background: 'yellow',
            padding: '0px',
            width: 'auto',
            flexDirection: `${flexdirection}`,
          }}
        >
          <div className="item">item1item1item1item1item1item1</div>
          <div className="item">item2</div>
          <div className="item">item3</div>
        </div>
      </VizContainer>

      <VizContainer>
        <Title>Flex container attribute [flex-wrap]</Title>
        <Message>
          When the container no longer has room for items in a row, Property that determines how to change the line of
          items. <strong style={{ color: 'red' }}> Default is no-wrap</strong>
        </Message>
        <Collapse>
          <Panel header="option">
            <Radio.Group onChange={e => setWrap(e.target.value)} value={wrap}>
              <Radio value="nowrap">nowrap</Radio>
              <Radio value="wrap">wrap</Radio>
              <Radio value="wrap-reverse">wrap-reverse</Radio>
            </Radio.Group>
          </Panel>
        </Collapse>
        <div
          className="container"
          style={{
            display: 'flex',
            background: 'yellow',
            padding: '0px',
            width: 'auto',
            flexWrap: `${wrap}`,
          }}
        >
          <div className="item">item1item1item1item1item1item1tem1tem1</div>
          <div className="item">item2item2item2item2item2item2item2item2</div>
          <div className="item">item3item3item3item3item3item3item3item3</div>
        </div>
      </VizContainer>

      <VizContainer>
        <Title>Flex container attribute [flex-flow]</Title>
        <Message>
          flex-flow is shortline command for writing
          <strong style={{ color: 'red' }}> flex-direction and flex-wrap</strong>
        </Message>
        <Explanation>
          <Pre>
            <code>
              <span>{'.container { '} </span>
              <br />
              <span>{'    flex-flow: row wrap; /* is equal to flex-direction: row; flex-wrap: wrap */ '} </span>
              <br />
              <span>
                {
                  '    flex-flow: column-reverse nowrap; /* is equal to flex-direction: column-reverse; flex-wrap: nowrap */ '
                }
              </span>
              <br />
              <span>{'}'} </span>
            </code>
          </Pre>
        </Explanation>
      </VizContainer>

      <VizContainer>
        <Title>Alignment</Title>
        <Message>
          The method of sorting flex containers is classified differently according to the direction of the axis. For
          sorting main axis we use
          <strong style={{ color: 'red' }}> &apos;justify&apos;</strong>
          and for sorting cross axis we use
          <strong style={{ color: 'red' }}> &apos;align&apos;</strong>. This concept is valid not only in flex, but also
          in grid.
        </Message>
        <Title>Flex container attribute: [justify-content]</Title>
        <Message>It is a property that justify the items in the main axis direction.</Message>
        <Collapse>
          <Panel header="option">
            <Radio.Group onChange={e => setJustifycontent(e.target.value)} value={justifycontent}>
              <Radio value="flex-start">flex-start</Radio>
              <Radio value="flex-end">flex-end</Radio>
              <Radio value="center">center</Radio>
              <Radio value="space-between">space-between</Radio>
              <Radio value="space-around">space-around</Radio>
              <Radio value="space-evenly">space-evenly</Radio>
            </Radio.Group>
          </Panel>
        </Collapse>
        <div
          className="container"
          style={{
            display: 'flex',
            background: 'yellow',
            padding: '0px',
            width: 'auto',
            flexFlow: 'row wrap',
            justifyContent: `${justifycontent}`,
          }}
        >
          <div className="item">item1item1item1item1item1item1</div>
          <div className="item">item2item2item2item2item2item2</div>
          <div className="item">item3item3item3item3item3item3</div>
        </div>
        <Images src={justify} style={{ maxHeight: 'none' }} />
        <Title>Flex container attribute: [align-item]</Title>
        <Message>It is a property that aligns the items in the vertical axis direction.</Message>
        <Collapse>
          <Panel header="option">
            <Radio.Group onChange={e => setAlignitem(e.target.value)} value={alignitem}>
              <Radio value="stretch">stretch</Radio>
              <Radio value="flex-start">flex-start</Radio>
              <Radio value="flex-end">flex-end</Radio>
              <Radio value="center">center</Radio>
              <Radio value="baseline">baseline</Radio>
            </Radio.Group>
          </Panel>
        </Collapse>
        <div
          className="container"
          style={{
            display: 'flex',
            minHeight: '200px',
            background: 'yellow',
            padding: '0px',
            width: 'auto',
            flexFlow: 'row wrap',
            alignItems: `${alignitem}`,
          }}
        >
          <div className="item">item1item1item1</div>
          <div className="item" style={{ fontSize: '20px' }}>
            item2item2item2
          </div>
          <div className="item">item3item3item3</div>
        </div>
        <Message>
          <strong style={{ color: 'red' }}>Tip: </strong>
          Using justify-content:center and align-item:center to set content on the middle
        </Message>
        <Explanation>
          <Pre>
            <code>
              <span>{'.container { '} </span>
              <br />
              <span>{'  justify-content: center'} </span>
              <br />
              <span>{'  align-items: center'} </span>
              <br />
              <span>{'}'} </span>
            </code>
          </Pre>
        </Explanation>

        <Title>Flex container attribute: [align-content]</Title>
        <Message>
          Sorting multiple lines, This property determines the vertical axis alignment when the row of items is more
          than two lines with <strong style={{ color: 'red' }}>&apos;flex-wrap: wrap&apos;</strong> set.
        </Message>
        <Collapse>
          <Panel header="option">
            <Radio.Group onChange={e => setAligncontent(e.target.value)} value={aligncontent}>
              <Radio value="stretch">stretch</Radio>
              <Radio value="flex-start">flex-start</Radio>
              <Radio value="flex-end">flex-end</Radio>
              <Radio value="center">center</Radio>
              <Radio value="space-between">space-between</Radio>
              <Radio value="space-around">space-around</Radio>
              <Radio value="space-evenly">space-evenly</Radio>
            </Radio.Group>
          </Panel>
        </Collapse>
        <div
          className="container"
          style={{
            display: 'flex',
            background: 'yellow',
            padding: '0px',
            width: 'auto',
            flexFlow: 'row wrap',
            minHeight: '200px',
            alignContent: `${aligncontent}`,
          }}
        >
          <div className="item">item1item1item1item1item1item1item1item1</div>
          <div className="item">item2item2item2item2item2item2item2item2</div>
          <div className="item">item3item3item3item3item3item3item3item3</div>
        </div>
      </VizContainer>

      <VizContainer>
        <Title>Flex item attribute: [flex]</Title>
        <Message>
          flex has 3 sub-attributes: <strong style={{ color: 'red' }}>flex-grow, flex-shrink, flex-basis</strong>. The
          <strong style={{ color: 'red' }}> flex-basis </strong> sets the default size for flex items (width when
          flex-direction is row, height when flex-direction is column). The
          <strong style={{ color: 'red' }}> flex-basis </strong>
          can be percentage, pixel or em. The <strong style={{ color: 'red' }}> flex-grow</strong> contains numeric
          values, and once a value greater than zero is set, the item changes to a flexible box, larger than its
          original size, and fills the empty space. The <strong style={{ color: 'red' }}> flex-shrink</strong> contains
          numeric values, and once a value greater than zero is set, the item turns into a flexible box and is smaller
          than the flex-basis.
        </Message>
      </VizContainer>

      <VizContainer>
        <Title>flex-grow</Title>
        <Collapse>
          <Panel header="option">
            <Radio.Group onChange={e => setFlexgrow(e.target.value)} value={flexgrow}>
              <Radio value="0">0</Radio>
              <Radio value="1">1</Radio>
            </Radio.Group>
          </Panel>
        </Collapse>
        <div
          className="container"
          style={{
            display: 'flex',
            background: 'yellow',
            padding: '0px',
            width: 'auto',
          }}
        >
          <div className="item" style={{ flexGrow: `${flexgrow}` }}>
            item1item1item1
          </div>
          <div className="item" style={{ flexGrow: `${flexgrow}` }}>
            item2item2item2
          </div>
          <div className="item" style={{ flexGrow: `${flexgrow}` }}>
            item3item3item3
          </div>
        </div>
      </VizContainer>

      <VizContainer>
        <Title>flex-shrink</Title>
        <Collapse>
          <Panel header="option">
            <Radio.Group onChange={e => setFlexshrink(e.target.value)} value={flexshrink}>
              <Radio value="100%">100%</Radio>
              <Radio value="10%">10%</Radio>
            </Radio.Group>
          </Panel>
        </Collapse>
        <div
          className="container"
          style={{
            display: 'flex',
            background: 'yellow',
            padding: '0px',
            width: 'auto',
          }}
        >
          <div className="item" style={{ flexShrink: 0 }}>
            item1item1item1
          </div>
          <div className="item" style={{}}>
            item2item2item2item2item2item2item2item2item2item2item2item2item2item2item2item2item2item2item2item2item2item2item2item2
          </div>
        </div>
      </VizContainer>
    </VizWrapper>
  )
}
