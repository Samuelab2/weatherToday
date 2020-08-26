import React, { useState } from 'react'
import Layout from '../components/Layout'
import Graphic from '../components/Graphic'
import { useForecast } from '../hooks/useForecast'

const Weather = ({ location }) => {
  const [ data, setData ] = useState(location.state.currentDay)
  const { isLoading, graphHours } = useForecast(location.state.currentDay)

  return (
    <Layout title='dia' subtitle='details for the day ....'>
      <>
        <h3>El dia {`${new Date(data.dt * 1000).toDateString()}`}, la información del clima es la siguiente:</h3>
        <p>Amanecer: {new Date(data.sunrise * 1000).toLocaleTimeString()}</p>
        <p>Atardecer {new Date(data.sunset * 1000).toLocaleTimeString()}</p>
        <p>Temperatura:</p>
        <p>Temperatura Minima: {data.temp.min} Celcius</p>
        <p>Temperatura Maxima: {data.temp.max} Celcius</p>
        <p>Temperatura por el dia: {data.temp.day} Celcius</p>
        <p>Temperatura por la noche: {data.temp.night} Celcius</p>
        <p>Temperatura por la mañana: {data.temp.morn} Celcius</p>
        <p>Temperatura por la tarde: {data.temp.eve} Celcius</p>
        <p>Clima esperado:</p>
        <ul>
          <li>id: {data.weather[0].id}</li>
          <li>Principal: {data.weather[0].main}</li>
          <li>
            Descripción: {data.weather[0].description}
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt='weather icon' />
          </li>
        </ul>
      </>

      {
        isLoading 
        ? <h3>Cargando grafico...</h3>
        : (
          <div style={{ position: 'relative' }}>
            <h3>Variación de la temperatura promedio cada 3 horas</h3>
            <Graphic data={graphHours} type='hours' />
          </div>
        )
      }
    </Layout>
  )
}

export default Weather
