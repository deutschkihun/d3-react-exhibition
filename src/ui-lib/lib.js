
import { Button, Input, Icon} from 'antd';
import styled from "styled-components"
import { MailOutlined,LinkedinOutlined,GithubOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom'

const { Search } = Input;
export const Wrapper = styled.div`
    padding-top:50px;
    flex-direction:column;
    text-align:center;
    justify-content: center;
    font-size: 3rem;
    padding-left:10vw;
    padding-right:10vw;
`;

export const Title = styled.h4``;
export const LandingTitle = styled.h2`
    text-align: center;
`;
export const Message = styled.p`
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

export const CommonButton = styled(Button)`
    margin: 0.5em;
`;

export const FooterWrapper = styled.div`
    height:80px;
    display: flex;
    fiex-direction:column;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
`;

export const Seperator = styled.div`
    padding-top:69px;
    min-height:calc(100vh - 80px);
`

export const Container = styled.div`
    width: 75%;
    margin: 3rem auto;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 1rem auto;
`;

export const SearchBox = styled(Search)`
    width: 200px;
`

export const ImageContainer = styled.div`
    img {
        width: 100%;
        max-height: 150px;
        padding: 1em;
    }
` 
export const CheckList = styled.span``;

export const Menu = styled.nav`
  padding: 0 20px;
  border-bottom: solid 1px #e8e8e8;
  overflow: auto;
  box-shadow: 0 0 30px #f3f1f1;
  background-color: white;
  position: fixed;
  z-index:5;
  width:100%;
`;

export const HomeLogo = styled.div`
  float:left;
  .home {
    display: inline-block;
    font-size: 20px;
    padding: 19px 20px;
    font-size: 30px !important;
  }
`;

export const Left = styled.div`
  float:left;
`;

export const Right = styled.div`
  float:right;
`

export const Profile = styled(Link)`
  margin-right: -22px;
`;

export const ProfileIcon = styled(Icon)`
  font-size: 30px !important;
`;