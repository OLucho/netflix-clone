import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Check other pages</Footer.Title>
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">Investor Relations</Footer.Link>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Ways to Watch</Footer.Link>
          <Footer.Link href="#">Coporate Information</Footer.Link>
          <Footer.Link href="#">NetFlix Originals</Footer.Link>
          <Footer.Link href="#">Help Centre</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Conditions </Footer.Link>
          <Footer.Link href="#">Ways to Watch</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Media Centre</Footer.Link>
          <Footer.Link href="#">Legal Resources</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>
      </Footer.Row>
    </Footer>
  );
}
