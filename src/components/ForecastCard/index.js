import React from 'react'
import { Div } from '../../utils/generalStyles'

const ForecastCard = ({ data, key }) => {
  return (
    <Div key={key}>
      <p>fecha y hora: {new Date(data.dt * 1000).toLocaleString()}</p>
      <p>Temperatura: {data.main.temp}</p>
      <p>Temperatura Minima: {data.main.temp_min} Celcius</p>
      <p>Temperatura Maxima: {data.main.temp_max} Celcius</p>
      <p>Pronostico: {data.weather[0].description}</p>
      <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather icon' />
    </Div>
  )
}

export default ForecastCard