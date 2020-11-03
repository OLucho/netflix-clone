import styled, { createGlobalStyle } from 'styled-components/macro';

export const LockBody = createGlobalStyle`
body{
    overflow: hidden
}
`;

export const ReleaseBody = createGlobalStyle`
body{
    overflow: visible
}`;

export const Spinner = styled.div`
  position: fixed;
  background-color: black;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const Picture = styled.img``;
