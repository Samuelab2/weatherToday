import React from 'react'
import { Div, Container, Title, ContainerTitles, SubTitle } from './styles'

const ForecastCard = ({ data }) => {
  return (
    <Div bg={data.weather[0].description}>
      <Container>
        <Title>{data.main.temp}  ° C</Title>
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon === '01n' ? '01d' : data.weather[0].icon}@2x.png`} alt='weather icon' />
        <span>{data.weather[0].description}</span>
      </Container>
      <ContainerTitles>
        <SubTitle>{new Date(data.dt * 1000).toDateString()}</SubTitle>
        <SubTitle>{new Date(data.dt * 1000).toLocaleTimeString()}</SubTitle>
        <SubTitle>Minima: {data.main.temp_min} ° C</SubTitle>
        <SubTitle>Maxima: {data.main.temp_max} ° C</SubTitle>
      </ContainerTitles>
    </Div>
  )
}

export default ForecastCard