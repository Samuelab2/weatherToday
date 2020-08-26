import React from 'react'
import { Div, FocusElement, Title, SubTitle, ContainerTitles } from './styles'

const WeatherMainView = ({ data }) => {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

  return (
    <Div bg={data.weather[0].description}>
      <Title>Santiago</Title>
      <SubTitle>{`${days[new Date(data.dt * 1000).getDay()]}, ${new Date(data.dt * 1000).toLocaleTimeString('en-US')}`}</SubTitle>
      <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon === '01n' ? '01d' : data.weather[0].icon}@2x.png`} alt='weather icon' />
      <FocusElement>{data.temp.day}°C  </FocusElement>
      <SubTitle>{data.weather[0].description}</SubTitle>
      <span role='img' aria-label='emoji amanecer'>🌄: {new Date(data.sunrise * 1000).toLocaleTimeString('en-US')}</span>
      <span role='img' aria-label='emoji atardecer'>🌅: {new Date(data.sunset * 1000).toLocaleTimeString('en-US')}</span>
      {
        data.temp.min && (
          <ContainerTitles>
            <SubTitle>Temperatura:</SubTitle>
            <span role='img' aria-label='emoji minimo'>➖ {data.temp.min} ° C</span>
            <span role='img' aria-label='emoji maximo'>➕ {data.temp.max} ° C</span>
            <span role='img' aria-label='emoji mañana'>☀ {data.temp.morn} ° C</span>
            <span role='img' aria-label='emoji tarde'>⛅ {data.temp.eve} ° C</span>
            <span role='img' aria-label='emoji noche'>🌜 {data.temp.night} ° C</span>
          </ContainerTitles>
        )
      }
    </Div>
  )
}

export default WeatherMainView