import React from 'react';
import { Feature } from '../components';
import OptForm from '../components/optform';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films,TV programmes,and More!</Feature.Title>
          <Feature.SubTitle>Watch Anywhere, Cancel at any time</Feature.SubTitle>

          <OptForm>
            <OptForm.Input placeholder="Email Adress" />
            <OptForm.Button>Try It NOW!</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready to Watch? Enter your Email to create your membership</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
