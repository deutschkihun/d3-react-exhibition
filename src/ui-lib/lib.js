
import {Button} from 'antd';
import styled from "styled-components"
import { MailOutlined,LinkedinOutlined,GithubOutlined } from "@ant-design/icons"

export const ProfileWrapper = styled.div`
    padding-top:50px;
    flex-direction:column;
    text-align:center;
    justify-content: center;
    font-size: 3rem;
    padding-left:10vw;
    padding-right:10vw;
`;


export const ProfileTitle = styled.h4``;
export const ProfileMessage = styled.p`
  font-size:1rem;
  text-align:center;
`;

export const LogoWrapper = styled.div`
    flex-wrap:wrap;
`;

export const Mail = styled(MailOutlined)`
    padding: 0.5rem;
`

export const LinkedIn = styled(LinkedinOutlined)`
    padding: 0.5rem;
`

export const Github = styled(GithubOutlined)`
    padding: 0.5rem;
`

export const ProfileButton = styled(Button)`
    margin: 0.5em;
`;