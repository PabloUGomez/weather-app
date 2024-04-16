import Image from 'next/image'
import { weather } from '../../../scripts/placeholder'
import listByHour from './listByHour'

export function Weather() {
  const { location, current, forecast } = weather
  const time = current.is_day === 1 ? 'day' : 'night'
  const localTime = location.localtime.split(' ')[1].split(':')[0]
  const currentWeather = {
    name: location.name,
    country: location.country,
    isDay: time,
    temp_c: current.temp_c,
    temp_f: current.temp_f,
    condition: current.condition.text,
    icon: current.condition.icon.split('/').slice(-1)[0].split('.')[0],
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
  const hours = forecast.forecastday[0].hour.slice(
    Number(localTime),
    Number(localTime) + 6
  )
  return (
    <section className='flex flex-col h-full'>
      <article>
        <form action=''>
          <input
            className='bg-gray-800 w-full rounded-2xl p-3'
            type='text'
            placeholder='Search cities'
          />
        </form>
        <div className='flex flex-row justify-between mx-4 xl:mx-20 lg:mx-10 mb-10'>
          <span className='flex flex-col gap-y-10 mt-10'>
            <span>
              <h2 className='text-6xl font-bold'>
                {currentWeather.name}{' '}
                <span className='text-xs font-light hidden xl:inline-flex'>
                  {currentWeather.country}
                </span>
              </h2>
              <p className='mt-2 text-white/50'>{currentWeather.condition}</p>
            </span>
            <h2 className='text-6xl font-bold'>{currentWeather.temp_c}°</h2>
          </span>
          <Image
            src={`/images/${currentWeather.isDay}/${currentWeather.icon}.svg`}
            alt='weather icon'
            width={220}
            height={220}
            priority
          />
        </div>
      </article>
      <article className='bg-gray-800 w-full rounded-2xl p-2 md:p-6 flex flex-col h-56'>
        <h3 className='uppercase font-semibold text-sm text-white/80'>
          Today forecast
        </h3>
        <ul className='flex flex-row justify-between mt-4 mx-6 h-full'>
          {hours.map((hour,index) => listByHour(hour,index))}
        </ul>
      </article>
    </section>
  )
}
