import ListByHour from './listByHour'
import { forecast7Days } from '../../../scripts/placeholder'

export default function TodayForecast({hours} :{ hours : any[]}) {
  const lenght = hours.length - 1
  return (
    <article className='bg-gray-800 w-full rounded-2xl p-1 md:p-2 flex flex-col h-full max-h-52'>
      <h3 className='uppercase font-semibold text-sm pt-1 pl-1 text-white/80'>
        Today forecast
      </h3>
      <ul
        className='flex flex-row justify-between my-4 ml-6 h-full xl:my-4 2xl:mt-2'
      >
          {hours.map((hour, index) => ListByHour(hour,index, lenght))}
      </ul>
    </article>
  )
}

