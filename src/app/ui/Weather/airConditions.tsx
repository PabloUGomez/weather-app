import Link from "next/link";

export default function airConditions(data: { feelslike_c: number; wind_kph: number; humidity: number; uv: number; }) {

    const { feelslike_c, wind_kph, humidity, uv } = data
  return (
    <article className='bg-gray-800 w-full rounded-2xl p-2 md:p-4 flex flex-col h-full'>
      <div className='flex justify-between mx-1'>
        <h3 className='uppercase font-semibold text-sm text-white/80 mb-2'>
          Air conditions
        </h3>
        <Link href='seeMore' className=' bg-blue-700 rounded-2xl py-1 px-4 mb-2'>
          see more
        </Link>
      </div>

      <div className='grid grid-cols-2 grid-rows-2 w-full h-full mx-2'>
        <span className='flex flex-row gap-x-1'>
          <picture>
            <img
              src={`/images/feelslike.svg`}
              alt='weather icon'
              width={40}
              height={40}
            />
          </picture>
          <span className='mt-1'>
            <h4 className='text-white/70 text-xl'>Feels like</h4>
            <h4 className='text-white text-3xl font-bold'>
              {feelslike_c}°
            </h4>
          </span>
        </span>
        <span className='flex flex-row gap-x-1'>
          <picture>
            <img
              src={`/images/wind.svg`}
              alt='weather icon'
              width={40}
              height={40}
            />
          </picture>
          <span className='mt-1'>
            <h4 className='text-white/70 text-xl'>Wind</h4>
            <h4 className='text-white text-3xl font-bold'>
              {wind_kph} km/h
            </h4>
          </span>
        </span>
        <span className='flex flex-row gap-x-1'>
          <picture>
            <img
              src={`/images/humidity.svg`}
              alt='weather icon'
              width={40}
              height={40}
            />
          </picture>
          <span className='mt-1'>
            <h4 className='text-white/70 text-xl'>Humidity</h4>
            <h4 className='text-white text-3xl font-bold'>
              {humidity}%
            </h4>
          </span>
        </span>

        <span className='flex flex-row gap-x-1'>
          <picture>
            <img
              src={`/images/uv.svg`}
              alt='weather icon'
              width={40}
              height={40}
            />
          </picture>
          <span className='mt-1'>
            <h4 className='text-white/70 text-xl'>UV Index</h4>
            <h4 className='text-white text-3xl font-bold'>
              {uv}
            </h4>
          </span>
        </span>
      </div>
    </article>
  )
}
