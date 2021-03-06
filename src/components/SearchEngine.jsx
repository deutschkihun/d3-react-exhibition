import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export function SearchEngine({ refreshFunction }) {
  const [SearchTerm, setSearchTerm] = useState('')
  const searchHandler = e => {
    setSearchTerm(e.currentTarget.value)
    refreshFunction(e.currentTarget.value)
  }

  return (
    <InputGroup size="sm" className="mb-3" style={{ margin: '1rem auto' }}>
      <FormControl
        aria-label="Small"
        placeholder="enter your keyword"
        aria-describedby="inputGroup-sizing-sm"
        onChange={searchHandler}
        value={SearchTerm}
      />
    </InputGroup>
  )
}
