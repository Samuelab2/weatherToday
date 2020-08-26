import React from 'react'
import Layout from '../components/Layout'
import ForecastCard from '../components/ForecastCard'
import { useForecast } from '../hooks/useForecast'
import LoadingStyle from '../components/LoadingStyle'
import { GeneralTitle } from '../utils/generalStyles'

const Forecast = () => {
  const { forecast, isLoading } = useForecast()

  return (
    <Layout title='Forecast' subtitle='Here are you have a forecasts for the next 3 hours'>
      {
        isLoading
          ? <LoadingStyle loading={isLoading} type='view' />
          : <>
              <GeneralTitle>Detalle de clima actualizado cada 3 horas: </GeneralTitle>
              {
                forecast.list.map((item, index) => <ForecastCard key={index} data={item} />)
              }
            </>
      }
    </Layout>
  )
}

export default Forecast
