import React from 'react'
import { Div } from '../../utils/generalStyles'

const WeatherCard = ({ data }) => {
  return (
    <Div>
      <p>Fecha y hora: {new Date(data.dt * 1000).toDateString()}</p>
      <p>Amanecer: {new Date(data.sunrise * 1000).toLocaleTimeString()}</p>
      <p>Atardecer {new Date(data.sunset * 1000).toLocaleTimeString()}</p>
      <p>Temperatura Minima: {data.temp.min} Celcius</p>
      <p>Temperatura Maxima: {data.temp.max} Celcius</p>
      <p>Temperatura Mañana: {data.temp.morn} Celcius</p>
      <p>Temperatura dia: {data.temp.day} Celcius</p>
      <p>Temperatura tarde: {data.temp.eve} Celcius</p>
      <p>Temperatura noche: {data.temp.night} Celcius</p>
      <p>Pronostico: {data.weather[0].description}</p>
      <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather icon' />
    </Div>
  )
}

export default WeatherCard