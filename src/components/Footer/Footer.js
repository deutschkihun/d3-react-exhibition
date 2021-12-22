import React from 'react'
import {Icon} from 'antd';
import styled from "styled-components"

const FooterWrapper = styled.div`
    height:80px;
    display: flex;
    fiex-direction:column;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
`;

const FooterText = styled.p``

export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterText> D3 & React Exhibition <Icon type="smile" /></FooterText>
        </FooterWrapper>
    )
}

