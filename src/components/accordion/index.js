import React, { useState, createContext, useContext } from 'react';
import { Title, Item, Header, Body, Container, Inner } from './styles/accordion';

const toggleContext = createContext();
export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <toggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}> {children}</Item>
    </toggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(toggleContext);

  return (
    <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
      {children}

      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="close"></img>
      ) : (
        <img src="/images/icons/add.png" alt="open"></img>
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(toggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
