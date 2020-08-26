import React from 'react'
import Layout from '../components/Layout'
import ForecastCard from '../components/ForecastCard'
import { useForecast } from '../hooks/useForecast'
import LoadingStyle from '../components/LoadingStyle'

const Forecast = () => {
  const { forecast, isLoading } = useForecast()

  return (
    <Layout title='Forecast' subtitle='Here are you have a forecasts for the next 3 hours'>
      {
        isLoading
          ? <LoadingStyle loading={isLoading} type='view' />
          : <>
              <h3>El detalle del clima actualizado cada 3 horas es el siguiente: </h3>
              {
                forecast.list.map((item, index) => <ForecastCard data={item} index={index} />)
              }
            </>
      }
    </Layout>
  )
}

export default Forecast
