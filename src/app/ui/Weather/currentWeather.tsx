export default function currentWeather (mainWeather: { name: string; country: string; condition: string; temp_c: number; isDay: string; icon: string; }) {
    const { name, country, condition, temp_c, isDay, icon } = mainWeather
    return (
        <article>
        <form action=''>
          <input
            className='bg-gray-800 w-full rounded-2xl p-3'
            type='text'
            placeholder='Search cities'
          />
        </form>
        <div className='flex flex-row justify-between items-center mx-4 xl:mx-20 lg:mx-10 mb-2 h-full max-h-56'>
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
            <h2 className='text-6xl font-bold'>{temp_c}°</h2>
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