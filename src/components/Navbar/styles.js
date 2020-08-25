import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'


export const Nav = styled.nav`
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 50px;
  max-width: 500px;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
`