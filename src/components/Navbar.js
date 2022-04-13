import React from 'react';
import { useHistory } from 'react-router-dom'
import { LeftMenu } from './LeftMenu';
import { RightMenu } from './RightMenu';
import { HomeLogo, Menu, Left, Right } from '../ui-lib/lib';
import home from "../assets/home.svg"
import './navbar.css';

export const Navbar = () => {
  const history = useHistory()

  return (
    <Menu>
      <HomeLogo>
        <img src={home} alt="home" onClick={() => history.push('/')} />
      </HomeLogo>
      <Left>
        <LeftMenu mode="horizontal"/>
      </Left>
      <Right>
        <RightMenu mode="horizontal"/>
      </Right>
    </Menu>
  )
}

