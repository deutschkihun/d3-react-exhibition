import React from 'react'
import { useNavigate } from 'react-router';
import { Wrapper, Btn, Title } from '../ui-lib/lib';


export const ErrorPage = () => {
  const navigate = useNavigate();
    return (
        <Wrapper>
            <Title>Not Found 404</Title>
            <Btn onClick={() => navigate('/')}>Back to main page</Btn>
        </Wrapper>
    )
}

