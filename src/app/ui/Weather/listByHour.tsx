import { type hours } from '../../../scripts/placeholder'

export default function listByHour(hour: hours, index: number) {
  return (
    <li key={index} className='flex gap-y-2 justify-around items-center w-full'>
      <span className='flex flex-col justify-between items-center h-full'>
        <h4 className='text-md text-white/80 font-semibold'>
          {hour.time.split(' ')[1]}
        </h4>
        <picture>
          <img
            src={`/images/${hour.is_day === 1 ? 'day' : 'night'}/${
              hour.condition.icon.split('/').slice(-1)[0].split('.')[0]
            }.svg`}
            alt='weather icon'
            width={80}
            height={80}
          />
        </picture>
        <h4 className='text-md font-bold text-white/80'>{hour.temp_c}°</h4>
      </span>
      {index != 5 && <span className='w-[2px] h-full bg-gray-400/20 rounded-lg'></span>}
    </li>
  )
}
