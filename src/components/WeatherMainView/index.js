import React from 'react'
import { Div, FocusElement, Title, SubTitle, ContainerTitles } from './styles'

const WeatherMainView = ({ data }) => {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']

  return (
    <Div bg={data.weather[0].description}>
      <Title>Santiago</Title>
      <SubTitle>{`${days[new Date(data.dt * 1000).getDay()]}, ${new Date(data.dt * 1000).toLocaleTimeString()}`}</SubTitle>
      <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon === '01n' ? '01d' : data.weather[0].icon}@2x.png`} alt='weather icon' />
      {
        data.temp.day ? <FocusElement>{data.temp.day}°C  </FocusElement> : <FocusElement>{data.temp}°C</FocusElement>
      }
      <SubTitle>{data.weather[0].description}</SubTitle>
      <span>🌄: {new Date(data.sunrise * 1000).toLocaleTimeString()}</span>
      <span>🌅: {new Date(data.sunset * 1000).toLocaleTimeString()}</span>
      {
        data.temp.min && (
          <ContainerTitles>
            <p>Temperatura:</p>
            <span>➖ {data.temp.min} ° C</span>
            <span>➕ {data.temp.max} ° C</span>
            <span>☀ {data.temp.morn} ° C</span>
            <span>⛅ {data.temp.eve} ° C</span>
            <span>🌜 {data.temp.night} ° C</span>
          </ContainerTitles>
        )
      }
    </Div>
  )
}

export default WeatherMainView