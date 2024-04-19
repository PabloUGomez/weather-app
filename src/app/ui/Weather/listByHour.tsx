import { type hours } from '../../../scripts/placeholder'
import { useId } from 'react'


export default function ListByHour(hour: hours, index: number, lenght: number) {
  const id = useId()
  return (
    <li key={id} className={`flex gap-y-2 items-center w-full h-full ${index === lenght ? 'justify-start' : 'justify-around'}`}>
      <span className='flex flex-col justify-between items-center mt-1'>
        <h4 className='text-md text-white/80 font-semibold'>
          {hour.time.split(' ')[1]}
        </h4>
        <picture>
          <img
            src={`/images/${hour.is_day === 1 ? 'day' : 'night'}/${
              hour.condition.icon.split('/').slice(-1)[0].split('.')[0]
            }.svg`}
            alt='weather icon'
            width={50}
            height={50}
          />
        </picture>
        <h4 className='text-md font-bold text-white/80'>{hour.temp_c}°</h4>
      </span>
      {index != lenght && <span className='w-[2px] h-full bg-gray-400/20 rounded-lg'></span>}
    </li>
  )
}
