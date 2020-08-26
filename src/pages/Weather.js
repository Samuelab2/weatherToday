import React, { useState } from 'react'
import Layout from '../components/Layout'
import Graphic from '../components/Graphic'
import WeatherMainView from '../components/WeatherMainView'
import { useForecast } from '../hooks/useForecast'
import LoadingStyle from '../components/LoadingStyle'

const Weather = ({ location }) => {
  const [ data, setData ] = useState(location.state.currentDay)
  const { isLoading, graphHours } = useForecast(location.state.currentDay)

  return (
    <Layout title='dia' subtitle='details for the day ....'>
      <WeatherMainView data={data} />
      {
        isLoading 
        ? <LoadingStyle loading={isLoading} type='graph' />
        : (
          <>
            <h3>Variación de la temperatura promedio cada 3 horas</h3>
            <Graphic data={graphHours} type='hours' />
          </>
        )
      }
    </Layout>
  )
}

export default Weather
