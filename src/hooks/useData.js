import { useState, useEffect } from 'react'
import { getCurrent } from '../api/api'

export const useData = () => {
  const [ dataHourly, setDataHourly ] = useState()
  const [ dataCurrent, setDataCurrent ] = useState()
  const [ dataDaily, setDataDaily ] = useState()
  const [ isLoading, setIsloading ] = useState(true)
  const [ graphDaily, setGraphDaily ] = useState()

  useEffect(() => {
    const formatData = (data) => {
      const arr = []
      data.forEach(item => {
        arr.push({x: item.dt * 1000, y: (item.temp.max + item.temp.min).toFixed(2) / 2})
      })
      return(arr)
    }
    getCurrent()
      .then(data => {
        setGraphDaily(formatData(data.daily.slice(1, 6)))
        setDataHourly(data.hourly)
        setDataCurrent(data.daily[0])
        setDataDaily(data.daily.slice(1, 6))
        setIsloading(false)
      })
  }, [])


  return { dataHourly, dataCurrent, dataDaily, isLoading, graphDaily }
}
