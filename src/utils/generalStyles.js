import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';

import latoRegular from '../assets/fonts/Lato-Regular.ttf';
import latoBold from '../assets/fonts/Lato-Bold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'lato';
        src: local('latoRegular'), local('latoBold'),
        url(${latoRegular}) format('ttf'),
        url(${latoBold}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;

export const GlobalStyle = createGlobalStyle`
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
}`

export const Div = styled.div`
  border-radius: 20px;
  box-shadow: 4px 3px 20px #d3d3d38a;
  padding: 15px;
  margin-bottom: 20px;
  min-width: 400px;
  box-sizing: border-box;
`

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: black
`