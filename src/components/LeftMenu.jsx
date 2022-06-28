import React from 'react';
import {Link} from 'react-router-dom'
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;

export const LeftMenu = (props) => {
  return (
    <Menu mode={props.mode}>
    <SubMenu title={<span>Quick</span>}>
        <Menu.Item key="setting:1"><Link to="/SVG">SVG</Link></Menu.Item>
        <Menu.Item key="setting:2"><Link to="/ChartBasic">Chart Basic</Link></Menu.Item>
        <Menu.Item key="setting:3"><Link to="/LineChart">Line Chart</Link></Menu.Item>
        <Menu.Item key="setting:4"><Link to="/BarChart">Bar Chart</Link></Menu.Item>
        <Menu.Item key="setting:5"><Link to="/HeatMap">Heat Map</Link></Menu.Item>
        <Menu.Item key="setting:6"><Link to="/InteractiveChart">Interactive Chart</Link></Menu.Item>
    </SubMenu>
  </Menu>
  )
}

