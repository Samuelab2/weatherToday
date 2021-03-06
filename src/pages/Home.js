import React from 'react'
import Layout from '../components/Layout'
import Graphic from '../components/Graphic'
import { useData } from '../hooks/useData'
import { Link, GeneralTitle } from '../utils/generalStyles'
import WeatherCard from '../components/WeatherCard'
import LoadingStyle from '../components/LoadingStyle'
import WeatherMainView from '../components/WeatherMainView'

const Home = () => {
  const { dataCurrent, dataDaily, isLoading, graphDaily } = useData()

  const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

  return (
    <Layout title='Home' subtitle='Forecast for the next 5 days'>
      { isLoading 
        ? <LoadingStyle loading={isLoading} type='view' />
        : (<>
            <Link to={ { pathname: `/${days[new Date(dataCurrent.dt * 1000).getDay()]}`, state: { currentDay: dataCurrent } } }>
              <WeatherMainView data={dataCurrent} />
            </Link>
            <GeneralTitle>Pronostico para los proximos 5 dias:</GeneralTitle>
            {
              dataDaily.map((item, index) => {
                return (
                  <Link to={ { pathname: `/${days[new Date(item.dt * 1000).getDay()]}`, state: { currentDay: item } } } key={index}>
                    <WeatherCard data={item} />
                  </Link>
                )
              })
            }
            {
              graphDaily && (
                <>
                  <GeneralTitle>Variación de temperatura para los proximos 5 dias:</GeneralTitle>
                  <Graphic data={graphDaily} type='daily' />
                </>
              )
            }
          </>)
      }
    </Layout>
  )
}

export default Home
