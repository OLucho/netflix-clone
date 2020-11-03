import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { useHistory } from 'react-router-dom';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components/';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignIn = (e) => {
    e.preventDefault();

    //firebase stuff
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((e) => {
        setEmailAddress('');
        setPassword('');
        setError(e.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            ></Form.Input>
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password "
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            ></Form.Input>
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>

            <Form.Text>
              New to NetFlix? <Form.Link to="/signup">Sign Up!</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA. So please dont Spam:)
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
