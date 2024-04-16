import Image from 'next/image'
import { weather } from '../../../scripts/placeholder'

export function Weather() {
  const { location, current } = weather
  const currentWeather = {
    name: location.name,
    country: location.country,
    temp_c: current.temp_c,
    temp_f: current.temp_f,
    condition: current.condition.text,
    icon: current.condition.icon.split('/').slice(-1)[0],
    wind_kph: current.wind_kph,
    wind_mph: current.wind_mph,
    wind_dir: current.wind_dir,
    uv: current.uv,
    humidity: current.humidity,
    feelslike_c: current.feelslike_c,
    feelslike_f: current.feelslike_f,
    vis_km: current.vis_km,
    vis_miles: current.vis_miles,
    pressure_mb: current.pressure_mb,
    pressure_in: current.pressure_in,
    precip_mm: current.precip_mm,
    precip_in: current.precip_in,
  }
  console.log(currentWeather)
  return (
    <section className='flex flex-col h-full'>
      <form action=''>
        <input
          className='bg-gray-700 w-full rounded-2xl p-3'
          type='text'
          placeholder='Search cities'
        />
      </form>
      <div className='flex flex-row justify-between mx-20 my-12'>
        <span className='flex flex-col justify-between'>
          <h1 className='text-4xl font-semibold'>
            {currentWeather.name}{' '}
            <span className='text-xs font-light'>{currentWeather.country}</span>
          </h1>
          <h2 className='text-6xl font-bold'>{currentWeather.temp_c}°C</h2>
        </span>

        <picture>
          <img
            src={`/images/day/143.svg`}
            alt='weather icon'
            width={200}
            height={200}
          />
        </picture>
      </div>
    </section>
  )
}
