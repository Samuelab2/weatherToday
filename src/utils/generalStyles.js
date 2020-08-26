import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';

import ComfortaRegular from '../assets/fonts/Comfortaa-Regular.ttf';
import ComfortaBold from '../assets/fonts/Comfortaa-Bold.ttf';

export default createGlobalStyle`
  @font-face {
      font-family: 'Comforta';
      src: local('ComfortaRegular'), local('ComfortaBold'),
      url(${ComfortaRegular}) format('ttf'),
      url(${ComfortaBold}) format('ttf');
      font-weight: 300;
      font-style: normal;
  }
`;

export const GlobalStyle = createGlobalStyle`
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Comfortaa', cursive;
}`

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: black
`