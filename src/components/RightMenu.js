import React from 'react';
import { Menu, Badge } from 'antd';
import {Link} from 'react-router-dom'
import {Profile, ProfileIcon} from '../ui-lib/lib'

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


