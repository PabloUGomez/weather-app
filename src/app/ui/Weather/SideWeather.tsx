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
function listByDay(day: days, index: number, imageSize: number) {
  const { maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, condition, img, date } =
    day
  const nameOfDay = new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
  })
  return (
    <li
      key={index}
      className='flex flex-row items-center h-full justify-between'
    >
      <h4 className='w-12'>{index === 0 ? 'Today' : nameOfDay}</h4>
      <span className='flex items-center gap-x-2 xl:gap-x-8'>
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
    </li>
  )
}

export const SideWeather = (imageSize : {imageSize : number}) => {
  const days = forecast7Days.forecast.forecastday
  return (
    <div className='bg-gray-800 rounded-2xl flex flex-col p-4 h-full'>
      <h3 className='uppercase font-semibold text-sm text-white/80'>
        7-day forecast
      </h3>
      <ul className='flex flex-col h-full justify-between'>
        {days.map((day, index) => {
          const { maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, condition } =
            day.day
          const currentDay = {  
            maxtemp_c: maxtemp_c,
            maxtemp_f: maxtemp_f,
            mintemp_c: mintemp_c,
            mintemp_f: mintemp_f,
            condition: condition.text,
            img: condition.icon.split('/').slice(-1)[0].split('.')[0],
            date: day.date,
          } as days
          return listByDay(currentDay as days, index , imageSize.imageSize)
        })}{' '}
      </ul>
    </div>
  )
}
