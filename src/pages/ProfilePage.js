import React from 'react'
import { Wrapper, Title, Message, CommonButton, LogoWrapper } from '../ui-lib/lib'
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import mail from '../assets/mail.svg'

export const ProfilePage = () => {
    return (
        <>
            <Wrapper>
                    <Title>Kihun Kim</Title>
                    <Message>
                        D3 & React Exhibition is made by Kihun Kim. He is currently junior frontend engineer at PACE Telematics in Germany. 
                        He is in charge of web development of the PACE Drive App at PACE Telematics. Specifically, this app is an all-in-one application 
                        that contains all the functions necessary for refueling such as handling enter fueling process with smartphone, Mobile payment 
                        real-time fuel price comparision, gas station search, and friend referral discount system.
                    </Message>
                    <CommonButton onClick={() => window.location.assign('https://www.deutschkihun.com')}>Kihun's portfolio webpage</CommonButton>
                    <LogoWrapper>
                        <img src={mail} alt="mail" onClick={() => window.location.assign('mailto:deutschkihun@gmail.com')} />
                        <img src={linkedin} alt="linkedin" onClick={() => window.location.assign('https://www.linkedin.com/in/kihun-kim-b35b73174/')} />
                        <img src={github} alt="github" onClick={() => window.location.assign('https://github.com/deutschkihun')}/>
                    </LogoWrapper>
            </Wrapper>

            <Wrapper>
                <Title>His other projects</Title>
                <Message>
                    In addition to D3 & React Exhibition, he has other great projects that he has worked on his own. 
                </Message>
                <CommonButton onClick={() => window.location.assign('https://luxeschmuck.herokuapp.com')}>LuxeSchmuck</CommonButton>
                <CommonButton onClick={() => window.location.assign('https://sportdbapp-deutschkihun.herokuapp.com/')}>Sport DB Application</CommonButton>
                <CommonButton onClick={() => window.location.assign('https://login-boilerplate-deutschkihun.herokuapp.com/')}>Login system boilerplate</CommonButton>
            </Wrapper>
        </>
    )
}

