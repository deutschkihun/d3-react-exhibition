import React, { useState } from 'react'
import { Collapse, Checkbox } from 'antd'

const { Panel } = Collapse

export function CheckBox({ list, handleFilters }) {
  const [Checked, setChecked] = useState([])
  const handleToggle = value => {
    const currentIndex = Checked.indexOf(value)
    const newChecked = [...Checked]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
    handleFilters(newChecked)
  }

  const renderCheckboxLists = () =>
    list &&
    list.map((value, index) => (
      <>
        <Checkbox onChange={() => handleToggle(value.id)} checked={Checked.indexOf(value.id) !== -1} />
        <span>{`  ${value.name}  `}</span>
      </>
    ))

  return (
    <Collapse defaultActiveKey={['0']}>
      <Panel header="Categories" key="1">
        {renderCheckboxLists()}
      </Panel>
    </Collapse>
  )
}
