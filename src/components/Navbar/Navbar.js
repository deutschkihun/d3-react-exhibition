import React from 'react';
import {Link} from 'react-router-dom'
import {LeftMenu} from './Section/LeftMenu';
import {RightMenu} from './Section/RightMenu';
import styled from "styled-components"
import './Section/Navbar.css';

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

export const Navbar = () => {

  return (
    <Menu>
      <div className="menu__logo">
        <Link to="/">HOME</Link>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
      </div>
    </Menu>
  )
}

