import React from 'react';
import { Grid, Home, Header, About, Profile } from '../ui-lib/lib';
import { DropdownComponent } from './DropdownComponent';

export const Headers = () => {

  return (
    <Header>
      <Grid>
        <Home to="/">D3 React Exhibition</Home>
        <DropdownComponent />
        <About to="/about">About</About>
          <Profile to="/profile">Profile</Profile>
      </Grid>
    </Header>
    )
  }