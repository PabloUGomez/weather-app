import ListByHour from './listByHour'

export default function TodayForecast({hours} :{ hours : any[]}) {
  const lenght = hours.length - 1
  return (
    <article className='bg-gray-800 w-full rounded-2xl p-2 md:p-2 flex flex-col max-h-48 mb-4 h-full'>
      <h3 className='uppercase font-semibold text-sm pt-1 pl-1 text-white/80'>
        Today forecast
      </h3>
      <ul
        className='flex flex-row justify-between my-3 ml-6 xl:my-3 2xl:mt-2 h-full'
      >
          {hours.map((hour, index) => ListByHour(hour,index, lenght))}
      </ul>
    </article>
  )
}

