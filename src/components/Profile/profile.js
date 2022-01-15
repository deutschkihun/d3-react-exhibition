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

export const Profile = () => {

    return (
        <ProfileWrapper>
            <ProfileTitle>Kihun Kim</ProfileTitle>
            <ProfileMessage>This page is made by Kihun Kim. He is current frontend engineer at PACE Telematics in Germany. 
                <Icon type="smile" /></ProfileMessage>
            <Button onClick={() => window.location.assign('https://www.deutschkihun.com')}>Get to more about Kihun</Button>
            <LogoWrapper>
                <MailOutlined onClick={() => window.location.assign('mailto:deutschkihun@gmail.com')}/>
                <LinkedinOutlined onClick={() => window.location.assign('https://www.linkedin.com/in/kihun-kim-b35b73174/')} />
                <GithubOutlined onClick={() => window.location.assign('https://github.com/deutschkihun')} />
            </LogoWrapper>
        </ProfileWrapper>
    )
}

