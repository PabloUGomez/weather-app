import { useId } from 'react'
import { forecast7Days } from 'serc/scripts/placeholder'

type days = {
  maxtemp_c: number
  maxtemp_f: number
  mintemp_c: number
  mintemp_f: number
  condition: string
  img: string
  date: string
}
function listByDay(day: days, id: string, index: number, imageSize: number) {
  const { maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, condition, img, date } =
    day
  const nameOfDay = new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
  })
  return (
    <div className='flex flex-row items-center h-full justify-between gap-x-4'>
      <h4 className='w-12'>{index === 0 ? 'Today' : nameOfDay}</h4>
      <span className='flex items-center gap-x-16 xl:gap-x-20'>
        <picture className='flex justify-between items-center gap-x-2'>
          <img
            src={`/images/day/${img}.svg`}
            alt='weather icon'
            width={imageSize}
            height={imageSize}
          />
          <h5 className='text-xs font-light text-pretty w-16'>{condition}</h5>
        </picture>
        <h4 className='w-24 text-right'>
          {maxtemp_c}°/{mintemp_c}°
        </h4>
      </span>
    </div>
  )
}

export const SideWeather = ({ data }: { data: any }) => {
  const forecast = data[0] as []
  const imageSize = data[1]
  const id = useId()
  return (
    <div className='bg-gray-800 rounded-2xl flex flex-col p-4 h-full'>
      <h3 className='uppercase font-semibold text-sm text-white/80'>
        7-day forecast
      </h3>
      <ul className='flex flex-col h-full justify-between'>
        {forecast.map((days, index) => {
          const { day } = days
          const { date } = days as { date: string }
          const { maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, condition } =
            day as {
              maxtemp_c: number
              maxtemp_f: number
              mintemp_c: number
              mintemp_f: number
              condition: { icon: string; text: string }
            }
          const { icon, text } = condition as { icon: string; text: string }
          const currentDay = {
            maxtemp_c: maxtemp_c,
            maxtemp_f: maxtemp_f,
            mintemp_c: mintemp_c,
            mintemp_f: mintemp_f,
            condition: text,
            img: icon.split('/').slice(-1)[0].split('.')[0],
            date: date,
          } as days
          return (
            <li
              key={index}
            >
              {listByDay(currentDay as days, id, index, imageSize.imageSize)}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
