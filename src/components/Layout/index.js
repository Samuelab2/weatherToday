import React from "react";
import { Helmet } from "react-helmet";
import { Div } from './styles'
import NavBar from '../Navbar'
import Header from '../Header'

const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | WeatherToday ⛅</title>}
        {subtitle && <meta name='description' content={subtitle}/>}
      </Helmet>
      <Div>
        <Header />
        {children}
        <NavBar />
      </Div>
    </>
  );
};

export default Layout