'use client'

export default function Form() {
  if (typeof window === 'undefined') {
    return null
  }
  if (localStorage.getItem('settings') === null) {
    window.localStorage.setItem(
      'settings',
      JSON.stringify({
        temperature: 'Celsius',
        wind: 'kmh',
        pressure: 'mm',
        precipitation: 'Milimeters',
        distance: 'Kilometers',
      })
    )
  }
  let settings = JSON.parse(
    window.localStorage.getItem('settings') || '{}'
  ) as {
    temperature: string
    wind: string
    pressure: string
    precipitation: string
    distance: string
  }

  function handleTemperature(e: React.MouseEvent<HTMLButtonElement>) {
    const fahrenheit = document.querySelector('#Fahrenheit')
    const celsius = document.querySelector('#Celsius')
    if (e.currentTarget.id === 'Fahrenheit') {
      fahrenheit?.classList.add('bg-gray-700')
      celsius?.classList.remove('bg-gray-700')
    } else {
      celsius?.classList.add('bg-gray-700')
      fahrenheit?.classList.remove('bg-gray-700')
    }
    settings.temperature = e.currentTarget.id
    localStorage.setItem('settings', JSON.stringify(settings))
  }

  function handleWind(e: React.MouseEvent<HTMLButtonElement>) {
    const kmh = document.querySelector('#kmh')
    const ms = document.querySelector('#ms')
    const knots = document.querySelector('#Knots')
    if (e.currentTarget.id === 'kmh') {
      kmh?.classList.add('bg-gray-700')
      ms?.classList.remove('bg-gray-700')
      knots?.classList.remove('bg-gray-700')
    } else if (e.currentTarget.id === 'ms') {
      ms?.classList.add('bg-gray-700')
      kmh?.classList.remove('bg-gray-700')
      knots?.classList.remove('bg-gray-700')
    } else {
      knots?.classList.add('bg-gray-700')
      kmh?.classList.remove('bg-gray-700')
      ms?.classList.remove('bg-gray-700')
    }
    settings.wind = e.currentTarget.id
    localStorage.setItem('settings', JSON.stringify(settings))
  }

  function handlePressure(e: React.MouseEvent<HTMLButtonElement>) {
    const hpa = document.querySelector('#hpa')
    const inches = document.querySelector('#Inches')
    const kpa = document.querySelector('#kpa')
    const mm = document.querySelector('#mm')

    if (e.currentTarget.id === 'hpa') {
      hpa?.classList.add('bg-gray-700')
      inches?.classList.remove('bg-gray-700')
      kpa?.classList.remove('bg-gray-700')
      mm?.classList.remove('bg-gray-700')
    } else if (e.currentTarget.id === 'Inches') {
      inches?.classList.add('bg-gray-700')
      hpa?.classList.remove('bg-gray-700')
      kpa?.classList.remove('bg-gray-700')
      mm?.classList.remove('bg-gray-700')
    } else if (e.currentTarget.id === 'kpa') {
      kpa?.classList.add('bg-gray-700')
      hpa?.classList.remove('bg-gray-700')
      inches?.classList.remove('bg-gray-700')
      mm?.classList.remove('bg-gray-700')
    } else {
      mm?.classList.add('bg-gray-700')
      hpa?.classList.remove('bg-gray-700')
      inches?.classList.remove('bg-gray-700')
      kpa?.classList.remove('bg-gray-700')
    }
    settings.pressure = e.currentTarget.id
    localStorage.setItem('settings', JSON.stringify(settings))
  }

  function handlePrecipitation(e: React.MouseEvent<HTMLButtonElement>) {
    const milimeters = document.querySelector('#Milimeters')
    const inches = document.querySelector('#PrecipitationInches')
    if (e.currentTarget.id === 'Milimeters') {
      milimeters?.classList.add('bg-gray-700')
      inches?.classList.remove('bg-gray-700')
    } else {
      inches?.classList.add('bg-gray-700')
      milimeters?.classList.remove('bg-gray-700')
    }
    settings.precipitation = e.currentTarget.id
    localStorage.setItem('settings', JSON.stringify(settings))
  }

  function handleDistance(e: React.MouseEvent<HTMLButtonElement>) {
    const kilometers = document.querySelector('#Kilometers')
    const miles = document.querySelector('#Miles')
    if (e.currentTarget.id === 'Kilometers') {
      kilometers?.classList.add('bg-gray-700')
      miles?.classList.remove('bg-gray-700')
    } else {
      miles?.classList.add('bg-gray-700')
      kilometers?.classList.remove('bg-gray-700')
    }
    settings.distance = e.currentTarget.id
    localStorage.setItem('settings', JSON.stringify(settings))
  }
  return (
    <>
      <section className='flex flex-col w-full h-full'>
        <h3 className='text-base mb-4  font-bold uppercase text-gray-200/50 '>
          Temperature
        </h3>
        <div className='flex w-full border-4 border-slate-900 rounded-xl justify-around bg-slate-900'>
          <button
            className={`w-full h-full rounded-xl p-2               
            ${
              settings.temperature === 'Celsius'
                ? 'bg-gray-700'
                : 'bg-slate-900'
            }
                `}
            id='Celsius'
            onClick={(e) => handleTemperature(e)}
          >
            Celsius
          </button>
          <span className='text-gray-700 text-2xl flex items-center'>|</span>
          <button
            className={`w-full h-full rounded-xl p-2               
            ${settings.temperature === 'Fahrenheit' ? 'bg-gray-700' : ''}
                `}
            id='Fahrenheit'
            onClick={(e) => handleTemperature(e)}
          >
            Fahrenheit
          </button>
        </div>
      </section>
      <section className='flex flex-col w-full h-full'>
        <h3 className='text-base mb-4  font-bold uppercase text-gray-200/50 '>
          Wind speed
        </h3>
        <div className='flex w-full border-4 border-slate-900 bg-slate-900 rounded-xl justify-around'>
          <button
            className={`w-full h-full rounded-xl p-2               
                ${settings.wind === 'kmh' ? 'bg-gray-700' : ''}
                    `}
            id='kmh'
            onClick={(e) => handleWind(e)}
          >
            km/h
          </button>
          <span className='text-gray-700 text-2xl flex items-center'>|</span>
          <button
            className={`w-full h-full rounded-xl p-2               
                ${settings.wind === 'ms' ? 'bg-gray-700' : ''}
                    `}
            id='ms'
            onClick={(e) => handleWind(e)}
          >
            m/s
          </button>
          <span className='text-gray-700 text-2xl flex items-center'>|</span>
          <button
            className={`w-full h-full rounded-xl p-2               
                ${settings.wind === 'Knots' ? 'bg-gray-700' : ''}
                    `}
            id='Knots'
            onClick={(e) => handleWind(e)}
          >
            Knots
          </button>
        </div>
      </section>
      <section className='flex flex-col w-full h-full '>
        <h3 className='text-base mb-4  font-bold uppercase text-gray-200/50 '>
          Pressure
        </h3>
        <div className='flex w-full border-4 border-slate-900 bg-slate-900 rounded-xl justify-around'>
          <button
            className={`w-full h-full rounded-xl p-2               
                ${settings.pressure === 'hpa' ? 'bg-gray-700' : ''}
                    `}
            id='hpa'
            onClick={(e) => handlePressure(e)}
          >
            hPa
          </button>
          <span className='text-gray-700 text-2xl flex items-center'>|</span>
          <button
            className={`w-full h-full rounded-xl p-2               
                ${settings.pressure === 'Inches' ? 'bg-gray-700' : ''}
                    `}
            id='Inches'
            onClick={(e) => handlePressure(e)}
          >
            Inches
          </button>
          <span className='text-gray-700 text-2xl flex items-center'>|</span>
          <button
            className={`w-full h-full rounded-xl p-2               
            ${settings.pressure === 'kpa' ? 'bg-gray-700' : ''}
                `}
            id='kpa'
            onClick={(e) => handlePressure(e)}
          >
            kPa
          </button>
          <span className='text-gray-700 text-2xl flex items-center'>|</span>
          <button
            className={`w-full h-full rounded-xl p-2               
            ${settings.pressure === 'mm' ? 'bg-gray-700' : ''}
                `}
            id='mm'
            onClick={(e) => handlePressure(e)}
          >
            mm
          </button>
        </div>
      </section>
      <section className='flex flex-col w-full h-full '>
        <h3 className='text-base mb-4  font-bold uppercase text-gray-200/50 '>
          Precipitation
        </h3>
        <div className='flex w-full border-4 border-slate-900 bg-slate-900 rounded-xl justify-around'>
          <button
            className={`w-full h-full rounded-xl p-2               
            ${settings.precipitation === 'Milimeters' ? 'bg-gray-700' : ''}
                `}
            id='Milimeters'
            onClick={(e) => handlePrecipitation(e)}
          >
            Milimeters
          </button>
          <span className='text-gray-700 text-2xl flex items-center'>|</span>
          <button
            className={`w-full h-full rounded-xl p-2               
            ${
              settings.precipitation === 'PrecipitationInches'
                ? 'bg-gray-700'
                : ''
            }
                `}
            id='PrecipitationInches'
            onClick={(e) => handlePrecipitation(e)}
          >
            Inches
          </button>
        </div>
      </section>
      <section className='flex flex-col w-full h-full '>
        <h3 className='text-base mb-4  font-bold uppercase text-gray-200/50 '>
          Distance
        </h3>
        <div className='flex w-full border-4 border-slate-900 bg-slate-900 rounded-xl justify-around'>
          <button
            className={`w-full h-full rounded-xl p-2               
                ${settings.distance === 'Kilometers' ? 'bg-gray-700' : ''}
                    `}
            id='Kilometers'
            onClick={(e) => handleDistance(e)}
          >
            Kilometers
          </button>
          <span className='text-gray-700 text-2xl flex items-center'>|</span>
          <button
            className={`w-full h-full rounded-xl p-2               
            ${settings.distance === 'Miles' ? 'bg-gray-700' : ''}
                `}
            id='Miles'
            onClick={(e) => handleDistance(e)}
          >
            Miles
          </button>
        </div>
      </section>
    </>
  )
}
