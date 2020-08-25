import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { getCurrent } from '../api/api'

const Home = () => {
  const [ data, setData ] = useState()
  const [ isLoading, setIsloading ] = useState()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await getCurrent()
    setData(data)
  }

  return (
    <Layout title='Home' subtitle='Forecast for the next 5 days'>
      {
        data && (
          <>
            <h1>La información del tiempo actual para Santiago de Chile es:</h1>
            <span>fecha y hora: {new Date(data.current.dt * 1000).toLocaleString()}</span>
            <br/>
            <span>Amanecer: {new Date(data.current.sunrise * 1000).toLocaleString()}</span>
            <br/>
            <span>Atardecer {new Date(data.current.sunset * 1000).toLocaleString()}</span>
            <br/>
            <span>Temperatura {data.current.temp} Celcius</span>
            <br/>
            <span>Clima Actual:</span>
            <ul>
            <li>{data.current.weather[0].id}</li>
            <li>{data.current.weather[0].main}</li>
            <li>{data.current.weather[0].description}</li>
            <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} alt='weather icon' />
            </ul>
          </>
        )
      }
    </Layout>
  )
}

export default Home
