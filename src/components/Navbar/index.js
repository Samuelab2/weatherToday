import React from 'react'
import { Nav, NavLink } from './styles'

const NavBar = () => {
  return (
    <Nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/forecast'>Forecast</NavLink>
    </Nav>
  )
}

export default NavBar