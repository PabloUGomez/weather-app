import ResultList from './ui/Weather/resultList'
import { SideWeather } from './ui/Weather/SideWeather'
import { Weather } from './ui/Weather/Weather'
import { getForecast7Days, searchCity } from 'serc/app/api/utils'

export default async function Page({
  searchParams,
}: {
  searchParams?: { city?: string, search?: string }
}) {
  let data = []
  let weather = []
  let forecast = []
  if (searchParams?.city) {
    weather = await getForecast7Days(searchParams?.city)
    forecast = weather.forecast.forecastday
  } else {
    weather = await getForecast7Days('London')
    forecast = weather.forecast.forecastday
  }
  if (searchParams?.search) {
    data = await searchCity(searchParams?.search)
  }

  return (
    <div
      className='flex flex-col lg:grid'
      style={{
        gridTemplateColumns: '2fr 1fr',
        width: '100%',
        height: '88vh',
        gap: '18px',
      }}
    >
      <ResultList data={data}/>
      <Weather weather={weather} />
      <SideWeather data={[forecast, 50]} />
    </div>
  )
}
