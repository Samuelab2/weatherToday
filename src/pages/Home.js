import React from 'react'
import Layout from '../components/Layout'
import Graphic from '../components/Graphic'
import { useData } from '../hooks/useData'
import { Div, Link } from '../utils/generalStyles'
import WeatherCard from '../components/WeatherCard'
import LoadingStyle from '../components/LoadingStyle'

const Home = () => {
  const { dataHourly, dataCurrent, dataDaily, isLoading, graphDaily } = useData()

  const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']

  return (
    <Layout title='Home' subtitle='Forecast for the next 5 days'>
        <LoadingStyle loading={isLoading}>
          { !isLoading && (<>
            <h3>La información del tiempo actual para Santiago de Chile es:</h3>
            <Div>
              <p>fecha y hora: {new Date(dataCurrent.dt * 1000).toLocaleString()}</p>
              <p>Amanecer: {new Date(dataCurrent.sunrise * 1000).toLocaleTimeString()}</p>
              <p>Atardecer {new Date(dataCurrent.sunset * 1000).toLocaleTimeString()}</p>
              <p>Temperatura {dataCurrent.temp} Celcius</p>
              <p>Clima Actual:</p>
              <p>Pronostico: {dataCurrent.weather[0].description}</p>
              <img src={`http://openweathermap.org/img/wn/${dataCurrent.weather[0].icon}.png`} alt='weather icon' />
            </Div>
            <h3>Pronostico para los proximos 5 dias:</h3>
            {
              dataDaily.map((item, index) => {
                return (
                  <Link to={ { pathname: `/${days[new Date(item.dt * 1000).getDay()]}`, state: { currentDay: item, hourly: dataHourly, daily: dataDaily } } } key={index}>
                    <WeatherCard data={item} />
                  </Link>
                )
              })
            }
            {
              graphDaily && (
                <div style={{ position: 'relative' }}>
                  <h3>Variación de temperatura para los proximos 5 dias:</h3>
                  <Graphic data={graphDaily} type='daily' />
                </div>
              )
            }
          </>)}
        </LoadingStyle>
    </Layout>
  )
}

export default Home
