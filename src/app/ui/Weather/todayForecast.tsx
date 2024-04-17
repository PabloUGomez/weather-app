import listByHour from "./listByHour"

export default function TodayForecast(hours : any[]) {
    return (
        <article className='bg-gray-800 w-full rounded-2xl p-1 md:p-2 flex flex-col h-full mb-5 max-h-52'>
        <h3 className='uppercase font-semibold text-sm pt-1 pl-1 text-white/80'>
          Today forecast
        </h3>
        <ul className='flex flex-row justify-between my-4 ml-6 h-full xl:my-4 2xl:mt-2'>
          {hours.map((hour, index) => listByHour(hour,index, hours.length - 1))}
        </ul>
      </article>
    )
}