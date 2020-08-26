import React, { useState } from 'react'
import Layout from '../components/Layout'
import Graphic from '../components/Graphic'
import WeatherMainView from '../components/WeatherMainView'
import { useForecast } from '../hooks/useForecast'
import LoadingStyle from '../components/LoadingStyle'
import { GeneralTitle } from '../utils/generalStyles'


const Weather = ({ location }) => {
  const [ data ] = useState(location.state.currentDay)
  const { isLoading, graphHours } = useForecast(location.state.currentDay)
  const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

  return (
    <Layout title={days[new Date(data.dt * 1000).getDay()]} subtitle='details for the day ....'>
      <WeatherMainView data={data} />
      {
        isLoading 
        ? <LoadingStyle loading={isLoading} type='graph' />
        : (
          <>
            <GeneralTitle>Variación de la temperatura promedio cada 3 horas</GeneralTitle>
            <Graphic data={graphHours} type='hours' />
          </>
        )
      }
    </Layout>
  )
}

export default Weather
