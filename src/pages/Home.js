import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { getCurrent } from '../api/api'

const Home = () => {
  const [ data, setData ] = useState()
  const [ isLoading, setIsloading ] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await getCurrent()
    setData(data)
    setIsloading(false)
  }

  return (
    <Layout title='Home' subtitle='Forecast for the next 7 days'>
      {
        isLoading 
          ? <h1>Cargando...</h1> 
          : data && (
            <>
              <h3>La información del tiempo actual para Santiago de Chile es:</h3>
              <p>fecha y hora: {new Date(data.current.dt * 1000).toLocaleString()}</p>
              <p>Amanecer: {new Date(data.current.sunrise * 1000).toLocaleTimeString()}</p>
              <p>Atardecer {new Date(data.current.sunset * 1000).toLocaleTimeString()}</p>
              <p>Temperatura {data.current.temp} Celcius</p>
              <p>Clima Actual:</p>
              <ul>
                <li>id: {data.current.weather[0].id}</li>
                <li>Principal: {data.current.weather[0].main}</li>
                <li>
                  Descripción: {data.current.weather[0].description}
                  <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`} alt='weather icon' />
                </li>
              </ul>
              <h3>Pronostico para los proximos 7 dias:</h3>
              {
                data.daily.map((item, index) => {
                  return (
                    <Link to={ { pathname: `/${item.dt}`, state: { data: item } } } key={index}>
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
            </>
          )
      }
    </Layout>
  )
}

export default Home
