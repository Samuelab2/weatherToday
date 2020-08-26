import React from 'react'
import { Div } from './styles'

const WeatherCard = ({ data }) => {
  return (
    <Div bg={data.weather[0].description}>
      <div>
        <span>{data.temp.day} ° C</span>
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon === '01n' ? '01d' : data.weather[0].icon}@2x.png`} alt='weather icon' />
      </div>
      <div>
        <span>Fecha y hora: {new Date(data.dt * 1000).toDateString()}</span>
        <span>Amanecer: {new Date(data.sunrise * 1000).toLocaleTimeString()}</span>
        <span>Pronostico: {data.weather[0].description}</span>
      </div>
    </Div>
  )
}

export default WeatherCard