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

export const GeneralTitle = styled.h3`
  margin: 30px 0;
  font-size: 20px;
  max-width: 500px;
  text-align: center;
  color: #9e531d;
  font-weight: bold;
`