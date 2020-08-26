import React from 'react'
import { Div } from './styles'

const WeatherMainView = ({ data }) => {
  const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']

  return (
    <Div bg={data.weather[0].description}>
      <h3>Santiago</h3>
      <h3>{`${days[new Date(data.dt * 1000).getDay()]}, ${new Date(data.dt * 1000).toLocaleTimeString('en-US')}`}</h3>
      <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon === '01n' ? '01d' : data.weather[0].icon}@2x.png`} alt='weather icon' />
      {
        data.temp.day ? <span>{data.temp.day} ° C  </span> : <span>{data.temp} ° C</span>
      }
      <span>{data.weather[0].description}</span>
      <span>Amanecer: {new Date(data.sunrise * 1000).toLocaleTimeString()}</span>
      <span>Atardecer {new Date(data.sunset * 1000).toLocaleTimeString()}</span>
      {
        data.temp.min && (
          <div>
            <p>Temperatura:</p>
            <span>Minima: {data.temp.min} ° C</span>
            <span>Maxima: {data.temp.max} ° C</span>
            <span>Mañana: {data.temp.morn} ° C</span>
            <span>Tarde: {data.temp.eve} ° C</span>
            <span>Noche: {data.temp.night} ° C</span>
          </div>
        )
      }
    </Div>
  )
}

export default WeatherMainView