import React from 'react'
import { FooterWrapper, Message } from '../ui-lib/lib';
import smile from '../assets/smile.svg'

export const Footer = () => {
    return (
        <FooterWrapper>
            <Message> D3 & React Exhibition <img src={smile} alt="smile" /></Message>
        </FooterWrapper>
    )
}

