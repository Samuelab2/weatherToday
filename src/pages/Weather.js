import React, { useState } from 'react'
import Layout from '../components/Layout'
import Graphic from '../components/Graphic'

const Weather = ({ location }) => {
  const [ data, setData ] = useState(location.state.currentDay)
  const [ dataHourly, setDataHourly ] = useState(location.state.hourly)
  const [ dataDaily, setDataDaily ] = useState(location.state.daily)
  const [ graphDaily, setGraphDaily ] = useState()
  const [ graphHours, setGraphHours ] = useState()

  const getDataHourGraph = () => {
    const currentDay = new Date(data.dt * 1000).getDate()
    const arr = []
    dataHourly.forEach(item => {
      let objDay = new Date(item.dt * 1000).getDate()
      if (objDay === currentDay) {
        arr.push({x: item.dt * 1000, y: item.temp})
      }
    })
    setGraphHours(arr)
  }

  const getDataDayGraph = () => {
    const arr = []
    dataDaily.forEach(item => {
      arr.push({x: item.dt * 1000, y: (item.temp.max + item.temp.min) / 2})
    })
    setGraphDaily(arr)
  }



  return (
    <Layout title='dia' subtitle='details for the day ....'>
      <>
        <h3>El dia {`${new Date(data.dt * 1000).toDateString()}`}, la información del clima es la siguiente:</h3>
        <p onClick={getDataHourGraph}>Amanecer: {new Date(data.sunrise * 1000).toLocaleTimeString()}</p>
        <p onClick={getDataDayGraph} >Atardecer {new Date(data.sunset * 1000).toLocaleTimeString()}</p>
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
        graphDaily && (
          <div style={{ position: 'relative' }}>
            <Graphic data={graphDaily} />
          </div>
        )
      }

      {
        graphHours && (
          <div style={{ position: 'relative' }}>
            <Graphic data={graphHours} />
          </div>
        )
      }

    </Layout>
  )
}

export default Weather
