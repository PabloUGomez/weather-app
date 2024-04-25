'use client'
export default function CurrentWeather(mainWeather: {
  name: string
  country: string
  condition: string 
  temp: number
  isDay: string
  icon: string
}) {

  const { name, country, condition, temp, isDay, icon } = mainWeather

  

  return (
    <article>
      <div className='flex flex-row justify-between items-center mx-4 xl:mx-20 lg:mx-10 h-full max-h-56 mb-4'>
        <span className='flex flex-col gap-y-10'>
          <span>
            <h2 className='text-6xl font-bold'>
              {name}{' '}
              <span className='text-xs font-light hidden xl:inline-flex'>
                {country}
              </span>
            </h2>
            <p className='mt-2 text-white/50'>{condition}</p>
          </span>
          <h2 className='text-6xl font-bold'>{temp}</h2>
        </span>
        <picture>
          <img
            src={`/images/${isDay}/${icon}.svg`}
            alt='weather icon'
            width={220}
            height={220}
          />
        </picture>
      </div>
    </article>
  )
}
