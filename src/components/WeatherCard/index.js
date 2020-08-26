import React from 'react'
import { Div, Container, Title, ContainerTitles, SubTitle } from './styles'

const WeatherCard = ({ data }) => {
  return (
    <Div bg={data.weather[0].description}>
      <Container>
        <Title>{data.temp.day} ° C</Title>
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon === '01n' ? '01d' : data.weather[0].icon}@2x.png`} alt='weather icon' />
        <span>{data.weather[0].description}</span>
      </Container>
      <ContainerTitles>
        <SubTitle>{new Date(data.dt * 1000).toDateString()}</SubTitle>
        <SubTitle>Humedad: {data.humidity}%</SubTitle>
        <SubTitle>Viento: {data.wind_speed} mts</SubTitle>
        <SubTitle>Presión: {data.pressure} hPa</SubTitle>
      </ContainerTitles>
    </Div>
  )
}

export default WeatherCard