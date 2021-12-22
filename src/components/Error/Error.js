import React from 'react'
import {Icon, Button} from 'antd';
import styled from "styled-components"
import { useHistory } from 'react-router';


const ErrorWrapper = styled.div`
    padding-top:50px;
    fiex-direction:column;
    text-align:center;
    justify-content: center;
    font-size: 3rem;
`;

const ErrorTitle = styled.h4``;
const ErrorMessage = styled.p`
  font-size:1rem;
`;

export const Error = () => {
  const history = useHistory();
    return (
        <ErrorWrapper>
            <ErrorTitle>Not Found 404</ErrorTitle>
            <ErrorMessage>Sorry, This is not the web page you are looking for <Icon type="smile" /></ErrorMessage>
            <Button onClick={() => history.push('/')}>Back to main page</Button>
        </ErrorWrapper>
    )
}

