import React from 'react'
import { Wrapper, Title } from '../ui-lib/lib'
import { Button } from '../helper/Button'

export function ErrorPage() {
  return (
    <Wrapper>
      <Title>Not Found 404</Title>
      <Button disable={false} children="Back to main" size="sm" variant="success" redirect="/" />
    </Wrapper>
  )
}
