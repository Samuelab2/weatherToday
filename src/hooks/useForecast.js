import { useState, useEffect } from 'react'
import { getForecast } from '../api/api'

export const useForecast = (location = {}) => {
  const [ isLoading, setIsloading ] = useState(true)
  const [ graphHours, setGraphHours ] = useState(location)
  const [ forecast, setForecast ] = useState()

  useEffect(() => {
    const getDataHourGraph = (data) => {
      const presentDay = new Date(location.dt * 1000).getDate()
      const arr = []
      data.forEach(item => {
        let objDay = new Date(item.dt * 1000).getDate()
        if (objDay === presentDay) {
          arr.push({x: item.dt * 1000, y: (item.main.temp_min + item.main.temp_max).toFixed(3) / 2})
        }
      })
      return(arr)
    }
    getForecast()
      .then(data => {
        setGraphHours(getDataHourGraph(data.list))
        setForecast(data)
        setIsloading(false)
      })
  }, [location.dt])
  return { forecast, isLoading, graphHours }
}