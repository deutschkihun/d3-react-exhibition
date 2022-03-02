import React from 'react'
import {Icon, Button} from 'antd';
import styled from "styled-components"
import { MailOutlined,LinkedinOutlined,GithubOutlined } from "@ant-design/icons"

const ProfileWrapper = styled.div`
    padding-top:50px;
    flex-direction:column;
    text-align:center;
    justify-content: center;
    font-size: 3rem;
    padding-left:10vw;
    padding-right:10vw;
`;


const ProfileTitle = styled.h4``;
const ProfileMessage = styled.p`
  font-size:1rem;
  text-align:center;
`;

const LogoWrapper = styled.div`
    flex-wrap:wrap;
`;

const Mail = styled(MailOutlined)`
    padding: 0.5rem;
`

const LinkedIn = styled(LinkedinOutlined)`
    padding: 0.5rem;
`

const Github = styled(GithubOutlined)`
    padding: 0.5rem;
`

const OtherProjectButton = styled(Button)`
    margin: 0.5em;
`;

export const Profile = () => {

    return (
        <>
        <ProfileWrapper>
            <>
                <ProfileTitle>Kihun Kim</ProfileTitle>
                <ProfileMessage>
                    D3 & React Exhibition is made by Kihun Kim. He is currently junior frontend engineer at PACE Telematics in Germany. 
                    He is in charge of web development of the PACE Drive App at PACE Telematics. Specifically, this app is an all-in-one application 
                    that contains all the functions necessary for refueling such as handling enter fueling process with smartphone, Mobile payment 
                    real-time fuel price comparision, gas station search, and friend referral discount system.
                </ProfileMessage>
                <Button onClick={() => window.location.assign('https://www.deutschkihun.com')}>Kihun's portfolio webpage</Button>
                <LogoWrapper>
                    <Mail onClick={() => window.location.assign('mailto:deutschkihun@gmail.com')}/>
                    <LinkedIn onClick={() => window.location.assign('https://www.linkedin.com/in/kihun-kim-b35b73174/')} />
                    <Github onClick={() => window.location.assign('https://github.com/deutschkihun')} />
                </LogoWrapper>
            </>
        </ProfileWrapper>

        <ProfileWrapper>
            <ProfileTitle>His other projects</ProfileTitle>
            <ProfileMessage>
                In addition to D3 & React Exhibition, he has other great projects that he has worked on on on his own. 
            </ProfileMessage>
            <OtherProjectButton onClick={() => window.location.assign('')}>LuxeSchmuck: Coming Soon</OtherProjectButton>
            <OtherProjectButton onClick={() => window.location.assign('https://sportdbapp-deutschkihun.herokuapp.com/')}>Sport DB Application</OtherProjectButton>
            <OtherProjectButton onClick={() => window.location.assign('https://login-boilerplate-deutschkihun.herokuapp.com/')}>Login system boilerplate</OtherProjectButton>
        </ProfileWrapper>
        </>
    )
}

