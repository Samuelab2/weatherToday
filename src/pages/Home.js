import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Graphic from '../components/Graphic'
import { useData } from '../hooks/useData'

const Home = () => {
  const { dataHourly, dataCurrent, dataDaily, isLoading, graphDaily } = useData()

  return (
    <Layout title='Home' subtitle='Forecast for the next 5 days'>
      {
        isLoading 
          ? <h1>Cargando...</h1> 
          : (
            <>
              <h3>La información del tiempo actual para Santiago de Chile es:</h3>
              <p>fecha y hora: {new Date(dataCurrent.dt * 1000).toLocaleString()}</p>
              <p>Amanecer: {new Date(dataCurrent.sunrise * 1000).toLocaleTimeString()}</p>
              <p>Atardecer {new Date(dataCurrent.sunset * 1000).toLocaleTimeString()}</p>
              <p>Temperatura {dataCurrent.temp} Celcius</p>
              <p>Clima Actual:</p>
              <ul>
                <li>id: {dataCurrent.weather[0].id}</li>
                <li>Principal: {dataCurrent.weather[0].main}</li>
                <li>
                  Descripción: {dataCurrent.weather[0].description}
                  <img src={`http://openweathermap.org/img/wn/${dataCurrent.weather[0].icon}.png`} alt='weather icon' />
                </li>
              </ul>
              <h3>Pronostico para los proximos 5 dias:</h3>
              {
                dataDaily.map((item, index) => {
                  return (
                    <Link to={ { pathname: `/${item.dt}`, state: { currentDay: item, hourly: dataHourly, daily: dataDaily } } } key={index}>
                      <p>fecha y hora: {new Date(item.dt * 1000).toDateString()}</p>
                      <p>Amanecer: {new Date(item.sunrise * 1000).toLocaleTimeString()}</p>
                      <p>Atardecer {new Date(item.sunset * 1000).toLocaleTimeString()}</p>
                      <ul>
                        <li>id: {item.weather[0].id}</li>
                        <li>Principal: {item.weather[0].main}</li>
                        <li>
                          Descripción: {item.weather[0].description}
                          <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt='weather icon' />
                        </li>
                      </ul>
                    </Link>
                  )
                })
              }
              {
                graphDaily && (
                  <div style={{ position: 'relative' }}>
                    <h3>Variación de temperatura para los proximos 5 dias:</h3>
                    <Graphic data={graphDaily} type='hours' />
                  </div>
                )
              }
            </>
          )
      }
    </Layout>
  )
}

export default Home
