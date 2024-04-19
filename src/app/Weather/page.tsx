import { SideWeather } from '../ui/Weather/SideWeather'
import { Weather } from '../ui/Weather/Weather'
import { getForecast7Days } from 'serc/app/api/utils'
import SeeMore from '../ui/Weather/seeMore'

export default async function Page({
  searchParams,
}: {
  searchParams?: { city?: string; seemore?: string }
}) {
  let weather = []
  let forecast = []
  if (searchParams?.city) {
    weather = await getForecast7Days(searchParams?.city)
    forecast = weather.forecast.forecastday
  } else {
    weather = await getForecast7Days('London')
    forecast = weather.forecast.forecastday
  }

  return (
    <main className='w-full h-full'>
      {searchParams?.seemore === 'true' && <SeeMore weather={weather} />}
      {searchParams?.seemore !== 'true' && <Weather weather={weather} />}
    </main>
  )
}
