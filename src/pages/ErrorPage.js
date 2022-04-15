import React from 'react'
import { useHistory } from 'react-router';
import { Wrapper, Btn, Title } from '../ui-lib/lib';


export const ErrorPage = () => {
  const history = useHistory();
    return (
        <Wrapper>
            <Title>Not Found 404</Title>
            <Btn onClick={() => history.push('/')}>Back to main page</Btn>
        </Wrapper>
    )
}

