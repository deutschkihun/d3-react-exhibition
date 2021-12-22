import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Profile = styled(Link)`
  margin-right: -22px;
`;

const ProfileIcon = styled(Icon)`
  font-size: 30px !important;
`;

export const RightMenu = (props) => {
    return (
      <Menu mode={props.mode}>
        <Menu.Item>
          <Link to="/about">About</Link>
        </Menu.Item>

        <Menu.Item style={{ paddingBottom: 3 }}>
          <Badge>
            <Profile to="/profile">
              <ProfileIcon type="profile"/>
            </Profile>
          </Badge>
        </Menu.Item>
      </Menu>
    )
}


