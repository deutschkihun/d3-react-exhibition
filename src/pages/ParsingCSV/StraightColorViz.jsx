import React from 'react'

export function StraightColorViz({ data }) {
  return (
    <>
      {data.map(k => (
        <div
          style={{
            backgroundColor: k['RGB hex value'],
            height: '10px',
          }}
        />
      ))}
    </>
  )
}
