import React from 'react'
import { Pre, Explanation } from '../../../ui-lib/lib'

export function SVGWithoutD3Description() {
  return (
    <Explanation>
      <Pre>
        <code>
          <span>{'<svg>'}</span>
          <br />
          <span>{'    <circle style={{fill:"#FFB900"}} stroke="black" cx="900" cy="100" r="48"></circle>'}</span>
          <br />
          <span>{'<svg>'}</span>
        </code>
      </Pre>
    </Explanation>
  )
}
