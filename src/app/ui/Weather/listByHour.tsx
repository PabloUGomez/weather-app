import {type hours} from '../../../scripts/placeholder'

export default function listByHour(hour: hours){
    return (
      <li className='flex flex-col gap-y-2'>
        <span className='text-xs text-white/80'>{hour.time.split(' ')[1]}</span>
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

        <span className='text-xs text-white/80'>{hour.temp_c}°</span>
      </li>
    )
}
