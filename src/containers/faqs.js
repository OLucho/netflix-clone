import faqsData from '../fixtures/faqs.json';
import React from 'react';
import { Accordion } from '../components';
import OptForm from '../components/optform';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm>
        <OptForm.Input placeholder="Email Adress" />
        <OptForm.Button>Try It NOW!</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>Ready to Watch? Enter your Email to create your membership</OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
