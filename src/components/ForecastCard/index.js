import React from 'react'
import { Div, Container, Title, ContainerTitles, SubTitle } from './styles'

const ForecastCard = ({ data }) => {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

  return (
    <Div bg={data.weather[0].description}>
      <Container>
        <Title>{data.main.temp}  ° C</Title>
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon === '01n' ? '01d' : data.weather[0].icon}@2x.png`} alt='weather icon' />
        <span>{data.weather[0].description}</span>
      </Container>
      <ContainerTitles>
        <SubTitle>{days[new Date(data.dt * 1000).getDay()]}</SubTitle>
        <SubTitle>{new Date(data.dt * 1000).toLocaleDateString('en-US')}</SubTitle>
        <SubTitle>{new Date(data.dt * 1000).toLocaleTimeString('en-US')}</SubTitle>
        <SubTitle>Minima: {data.main.temp_min} ° C</SubTitle>
        <SubTitle>Maxima: {data.main.temp_max} ° C</SubTitle>
      </ContainerTitles>
    </Div>
  )
}

export default ForecastCard