import { SideWeather } from '../ui/Weather/SideWeather'
import { Weather } from '../ui/Weather/Weather'
import { getForecast7Days, searchCity } from 'serc/app/api/utils'
import SeeMore from '../ui/Weather/seeMore'
import SearchPage from '../ui/Weather/SearchPage'
import ResultList from '../ui/Weather/resultList'

export default async function Page({
  searchParams,
}: {
  searchParams?: { city?: string; seemore?: string; search?: string}
}) {
  let data = []
  let weather = []
  if (searchParams?.city) {
    weather = await getForecast7Days(searchParams?.city)
  } else {
    weather = await getForecast7Days('London')
  }
  if (searchParams?.search) {
    data = await searchCity(searchParams?.search)
  }
  
  return (
    <main className='w-full h-full'>
      <ResultList data={data} />
      {searchParams?.seemore === 'true' && <SeeMore weather={weather} />}
      {searchParams?.seemore !== 'true' && <Weather weather={weather} />}
    </main>
  )
}
