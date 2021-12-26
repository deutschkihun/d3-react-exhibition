import React from 'react';
import {Link} from 'react-router-dom'
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export const LeftMenu = (props) => {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">TBD</a>
    </Menu.Item>
    <SubMenu title={<span>Quick</span>}>
      <MenuItemGroup title="Newbie">
        <Menu.Item key="setting:1"><Link to="/SVG">SVG</Link></Menu.Item>
        <Menu.Item key="setting:2"><Link to="/PieChart">Pie Chart</Link></Menu.Item>
        <Menu.Item key="setting:3"><Link to="/LineChart">Line Chart</Link></Menu.Item>
        <Menu.Item key="setting:4"><Link to="/BarChart">Bar Chart</Link></Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Beginner">
        <Menu.Item key="setting:5">Option 3</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Intermediate">
        <Menu.Item key="setting:6">Option 3</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Advance">
        <Menu.Item key="setting:7">Option 3</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

