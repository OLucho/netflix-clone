import React from 'react';
import * as ROUTES from '../constants/routes';
import logo from '../components/header/styles/logo.svg';
import { Header, Profiles } from '../components';

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix logo" />
        </Header.Frame>

        <Profiles>
          <Profiles.Title>Whos Watching?</Profiles.Title>
          <Profiles.List>
            <Profiles.User
              onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
            >
              <Profiles.Picture src={user.photoURL} />
              <Profiles.Name></Profiles.Name>
            </Profiles.User>
          </Profiles.List>
        </Profiles>
      </Header>
    </>
  );
}
