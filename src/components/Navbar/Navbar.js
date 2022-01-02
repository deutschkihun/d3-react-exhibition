import React from 'react';
import {useHistory} from 'react-router-dom'
import {LeftMenu} from './LeftMenu';
import {RightMenu} from './RightMenu';
import styled from "styled-components"
import {Icon} from 'antd';
import './navbar.css';


const Menu = styled.nav`
  padding: 0 20px;
  border-bottom: solid 1px #e8e8e8;
  overflow: auto;
  box-shadow: 0 0 30px #f3f1f1;
  background-color: white;
  position: fixed;
  z-index:5;
  width:100%;
`;

const HomeLogo = styled.div`
  float:left;
  .home {
    display: inline-block;
    font-size: 20px;
    padding: 19px 20px;
    font-size: 30px !important;
  }
`;

const MenuContainer = styled.div``;

const Left = styled.div`
  float:left;
`;

const Right = styled.div`
  float:right;
`

export const Navbar = () => {
  const history = useHistory()

  return (
    <Menu>
      <HomeLogo>
        <Icon className="home" type="home" onClick={() => history.push('/')} />
      </HomeLogo>
      <MenuContainer>
        <Left>
          <LeftMenu mode="horizontal"/>
        </Left>
        <Right>
          <RightMenu mode="horizontal"/>
        </Right>
      </MenuContainer>
    </Menu>
  )
}

