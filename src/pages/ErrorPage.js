import React from 'react'
import { useHistory } from 'react-router';
import { Wrapper, Message, Btn, Title } from '../ui-lib/lib';


export const ErrorPage = () => {
  const history = useHistory();
    return (
        <Wrapper>
            <Title>Not Found 404</Title>
            <Message>Sorry, This is not the web page you are looking for</Message>
            <Btn onClick={() => history.push('/')}>Back to main page</Btn>
        </Wrapper>
    )
}

