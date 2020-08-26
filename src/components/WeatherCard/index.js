import React from 'react'
import { Div, Container, Title, ContainerTitles, SubTitle } from './styles'

const WeatherCard = ({ data }) => {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

  return (
    <Div bg={data.weather[0].description}>
      <Container>
        <Title>{data.temp.day} ° C</Title>
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon === '01n' ? '01d' : data.weather[0].icon}@2x.png`} alt='weather icon' />
        <span>{data.weather[0].description}</span>
      </Container>
      <ContainerTitles>
        <SubTitle>{days[new Date(data.dt * 1000).getDay()]}</SubTitle>
        <SubTitle>{new Date(data.dt * 1000).toLocaleDateString('en-US')}</SubTitle>
        <SubTitle>Humedad: {data.humidity}%</SubTitle>
        <SubTitle>Viento: {data.wind_speed} mts</SubTitle>
        <SubTitle>Presión: {data.pressure} hPa</SubTitle>
      </ContainerTitles>
    </Div>
  )
}

export default WeatherCard