import CurrentWeather from './currentWeather'
import TodayForecast from './todayForecast'
import AirConditions from './airConditions'
import { SideWeather } from './SideWeather'

export async function Weather({ weather }: { weather: any }) {
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
  return (
    <>
      <div
        className='lg:grid hidden'
        style={{
          gridTemplateColumns: '2fr 1fr',
          width: '100%',
          height: '100%',
          alignItems: 'start',
          gap: '18px',
        }}
      >
        <div>
          <CurrentWeather {...mainWeather} />
          <TodayForecast hours={[...hours]} />
          <AirConditions data={dataAirConditions as airConditions} />
        </div>

        <SideWeather data={[forecastDay, 70]} />
      </div>
      <div className=' lg:hidden flex flex-col w-full h-full'>
        <div className='mb-4'>
          <CurrentWeather {...mainWeather} />
          <TodayForecast hours={[...hours]} />
          <AirConditions data={dataAirConditions as airConditions} />
        </div>

        <SideWeather data={[forecastDay, 70]} />
      </div>
    </>
  )
}
