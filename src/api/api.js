const APIKEY = '17f83857284ffbbc812daa1f82a8a08e'
const SantiagoID = '3871336'
const lat = '-33.4569'
const lon = '-94.037689'

const BASE_URL_CURRENT = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${APIKEY}&lang=es&units=metric`;
const BASE_URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?id=${SantiagoID}&appid=${APIKEY}&lang=es`;

export async function getForecast () {
  const response = await fetch(BASE_URL_FORECAST)
  const data = await response.json()
  return data;
}

export async function getCurrent () {
  const response = await fetch(BASE_URL_CURRENT)
  const data = await response.json()
  return data
}