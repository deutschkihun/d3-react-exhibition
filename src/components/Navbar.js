import React from 'react';
import { useHistory } from 'react-router-dom'
import { LeftMenu } from './LeftMenu';
import { RightMenu } from './RightMenu';
import { HomeLogo, Menu, Left, Right } from '../ui-lib/lib';
import { Icon } from 'antd';
import './navbar.css';

export const Navbar = () => {
  const history = useHistory()

  return (
    <Menu>
      <HomeLogo>
        <Icon className="home" type="home" onClick={() => history.push('/')} />
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

