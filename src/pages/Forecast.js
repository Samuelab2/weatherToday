import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { getForecast } from '../api/api'

const Forecast = () => {
  const [ data, setData ] = useState()
  const [ isLoading, setIsloading ] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await getForecast()
    setData(data)
    setIsloading(false)
  }

  return (
    <Layout title='Forecast' subtitle='Here are you have a forecasts for the next 3 hours'>
      {
        isLoading
          ? <h1>Cargando...</h1>
          : data && (
          <>
            <h3>El detalle del clima actualizado cada 3 horas es el siguiente: </h3>
            <ol>
              {
                data.list.map((item, index) => {
                  return (
                    <li key={index}>
                      <p>fecha y hora: {new Date(item.dt * 1000).toLocaleString()}</p>
                      <p>Temperatura: {item.main.temp}</p>
                      <p>Temperatura Minima: {item.main.temp_min} Celcius</p>
                      <p>Temperatura Maxima: {item.main.temp_max} Celcius</p>
                      <ul>
                        <li>id: {item.weather[0].id}</li>
                        <li>Principal: {item.weather[0].main}</li>
                        <li>
                          Descripción: {item.weather[0].description}
                          <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt='weather icon' />
                        </li>
                      </ul>
                    </li>
                  )
                })
              }
            </ol>
          </>
        )
      }
    </Layout>
  )
}

export default Forecast
