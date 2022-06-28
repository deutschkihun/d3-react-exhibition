import React from 'react';
import { Menu, Badge } from 'antd';
import {useNavigate} from 'react-router'
import {Link} from 'react-router-dom'
import profile from '../assets/profile.svg'

export const RightMenu = (props) => {
  const navigate = useNavigate()
    return (
      <Menu mode={props.mode}>
        <Menu.Item>
          <Link to="/about">About</Link>
        </Menu.Item>

        <Menu.Item style={{ paddingBottom: 3 }}>
          <Badge>
            <img src={profile} alt="profile" onClick={() => navigate('/profile')}/>
          </Badge>
        </Menu.Item>
      </Menu>
    )
}


