import React from 'react'
import { HeaderTitle } from './styles'

const Header = () => {
  return (
    <HeaderTitle>
      <h1>
        WeatherToday <span role="img" aria-label='weather emoji'>⛅</span>
      </h1>
    </HeaderTitle>
  )
}

export default Header