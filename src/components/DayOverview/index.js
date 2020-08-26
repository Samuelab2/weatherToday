import React from 'react'
import { Div, ContainerTitles, SubTitle, Title } from './styles'

const DayOverview = ({ data }) => {

  return (
    <Div bg={data.weather[0].description}>
      <ContainerTitles>
        <Title>Datos generales:</Title>
        <SubTitle>Humedad: {data.humidity}%</SubTitle>
        <SubTitle>Viento: {data.wind_speed} mts</SubTitle>
        <SubTitle>Presión: {data.pressure} hPa</SubTitle>
        <SubTitle>Nubes: {data.clouds}%</SubTitle>
        <SubTitle>Precipitación: {data.pop}</SubTitle>
        {
          data.rain && <SubTitle>Lluvia: {data.rain} mm</SubTitle>
        }
        {
          data.snow && <SubTitle>Nieve: {data.snow} mm</SubTitle>
        }
        <Title>Percepción de temperatura:</Title>
        <SubTitle>Mañana: {data.feels_like.morn} ° C</SubTitle>
        <SubTitle>Día: {data.feels_like.day} ° C</SubTitle>
        <SubTitle>Tarde: {data.feels_like.eve} ° C</SubTitle>
        <SubTitle>Noche: {data.feels_like.night} ° C</SubTitle>
      </ContainerTitles>
    </Div>
  )
}

export default DayOverview