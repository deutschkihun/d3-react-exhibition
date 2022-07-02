/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react'
import { Collapse, Radio } from 'antd'

const { Panel } = Collapse

export function RadioBox({ list, handleFilters }) {
  const [Value, setValue] = useState(0)
  const renderRadioBox = () =>
    list &&
    list.map(value => (
      <Radio key={value._id} value={value._id}>
        {' '}
        {value.name}{' '}
      </Radio>
    ))

  const handleChange = event => {
    setValue(event.target.value)
    handleFilters([event.target.value])
  }

  return (
    <Collapse defaultActiveKey={['0']}>
      <Panel header="Level" key="1">
        <Radio.Group onChange={handleChange} value={Value}>
          {renderRadioBox()}
        </Radio.Group>
      </Panel>
    </Collapse>
  )
}
