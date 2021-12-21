import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import { withRouter } from 'react-router-dom';

function RightMenu(props) {

    return (
      <Menu mode={props.mode}>
        <Menu.Item key="upload">
          <a href="/product/upload">Upload</a>
        </Menu.Item>

        <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
          <Badge count={0}>
            <a href="/123" className="head-example" style={{ marginRight: -22, color: '#667777' }} >
              <Icon type="shopping-cart" style={{ fontSize: 30, marginBottom: 3 }} />
            </a>
          </Badge>
        </Menu.Item>

        <Menu.Item key="logout">
        </Menu.Item>
      </Menu>
    )
}

export default withRouter(RightMenu);

