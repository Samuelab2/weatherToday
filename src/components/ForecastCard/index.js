import React from 'react'
import { Div } from './styles'

const ForecastCard = ({ data, index }) => {
  return (
    <Div key={index} bg={data.weather[0].description}>
      <span>{new Date(data.dt * 1000).toLocaleString()}</span>
      <span>Temperatura: {data.main.temp}</span>
      <span>Minima: {data.main.temp_min} ° C</span>
      <span>Maxima: {data.main.temp_max} ° C</span>
      <div>
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon === '01n' ? '01d' : data.weather[0].icon}@2x.png`} alt='weather icon' />
        <span>{data.weather[0].description}</span>
      </div>
    </Div>
  )
}

export default ForecastCard