import React from 'react';
import {Link} from 'react-router-dom'
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export const LeftMenu = (props) => {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Exmaple 1</a>
    </Menu.Item>
    <SubMenu title={<span>Exmaple 2</span>}>
      <MenuItemGroup title="Item 1">
        <Menu.Item key="setting:1"><Link to="/hfew">Option 1</Link></Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Item 2">
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

