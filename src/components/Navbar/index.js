import React from 'react'
import { Nav, Link } from './styles'

const NavBar = () => {
  return (
    <Nav>
      <Link to='/'>Home</Link>
      <Link to='/forecast'>Forecast</Link>
    </Nav>
  )
}

export default NavBar