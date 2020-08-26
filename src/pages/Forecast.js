import React from 'react'
import Layout from '../components/Layout'
import ForecastCard from '../components/ForecastCard'
import { useForecast } from '../hooks/useForecast'

const Forecast = () => {
  const { forecast, isLoading } = useForecast()

  return (
    <Layout title='Forecast' subtitle='Here are you have a forecasts for the next 3 hours'>
      {
        isLoading
          ? <h1>Cargando...</h1>
          : <>
              <h3>El detalle del clima actualizado cada 3 horas es el siguiente: </h3>
              {
                forecast.list.map((item, index) => <ForecastCard data={item} key={index} />)
              }
            </>
      }
    </Layout>
  )
}

export default Forecast
