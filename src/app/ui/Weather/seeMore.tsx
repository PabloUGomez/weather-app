import CurrentWeather from './currentWeather'
import TodayForecast from './todayForecast'
import { SideWeather } from './SideWeather'
import FullAirConditions from './fullAirCondition'

export default function SeeMore({ weather }: { weather: any }) {
  type mainWeather = {
    name: string
    country: string
    isDay: string
    temp_c: number
    temp_f: number
    condition: string
    icon: string
  }
  type airConditions = {
    feelslike_c: number
    feelslike_f: number
    wind_kph: number
    wind_mph: number
    uv: number
    humidity: number
    vis_km: number
    vis_miles: number
    pressure_mb: number
    pressure_in: number
    sunset: string
    chanceOfRain: number
  }
  const { location, current, forecast } = weather
  const forecastDay = forecast.forecastday
  const time = current?.is_day === 1 ? 'day' : 'night'
  const localTime = location?.localtime.split(' ')[1].split(':')[0]
  const mainWeather = {
    name: location.name,
    country: location.country,
    isDay: time,
    temp_c: current.temp_c,
    temp_f: current.temp_f,
    condition: current.condition.text,
    icon: current.condition.icon.split('/').slice(-1)[0].split('.')[0],
  } as mainWeather
  const hours = forecast.forecastday[0].hour.slice(
    Number(localTime),
    Number(localTime) + 6
  )
  const dataAirConditions = {
    feelslike_c: current.feelslike_c,
    feelslike_f: current.feelslike_f,
    wind_kph: current.wind_kph,
    wind_mph: current.wind_mph,
    uv: current.uv,
    humidity: current.humidity,
    vis_km: current.vis_km,
    vis_miles: current.vis_miles,
    pressure_mb: current.pressure_mb,
    pressure_in: current.pressure_in,
    sunset: forecast.forecastday[0].astro.sunset,
    chanceOfRain: forecast.forecastday[0].day.daily_chance_of_rain,
  } as airConditions
  let hoursSplit = [] as any
  hours.forEach((hour: any) => {
    if (hour === hours[0] || hour === hours[2] || hour === hours[5]) {
      hoursSplit.push(hour)
    }
  })
  return (
    <>
      <div
        className='hidden lg:grid'
        style={{
          gridTemplateColumns: '2fr 1fr',
          gridTemplateRows: '1fr auto',
          alignItems: 'start',
          width: '100%',
          height: '100%',
        }}
      >
        <CurrentWeather {...mainWeather} />
        <div className='flex items-end h-full'>
          <TodayForecast hours={[...hours]} />
        </div>
        <FullAirConditions dataAirConditions={dataAirConditions} />
        <SideWeather data={[forecastDay, 45]} />
      </div>
      <div>
        <div
          className='flex flex-col lg:hidden  w-full h-full'
          style={{
            gridTemplateColumns: '2fr 1fr',
            gridTemplateRows: '1fr auto',
            alignItems: 'start',
            width: '100%',
            height: '100%',
          }}
        >
          <CurrentWeather {...mainWeather} />
          <TodayForecast hours={[...hours]} />
          <FullAirConditions dataAirConditions={dataAirConditions} />
          <SideWeather data={[forecastDay, 45]} />
        </div>
      </div>
    </>
  )
}
