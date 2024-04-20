''
import Link from 'next/link'
import CitiesIcon from '../icons/cities'
import SettingsIcon from '../icons/settings'
import WeatherIcon from '../icons/weather'

export default function Aside() {
  return (
    <aside className='bg-gray-800 rounded-2xl flex flex-col w-28 p-4 h-full'>
      <Link href='/' className='mb-20 p-2 hover:bg-gray-400/40 rounded-xl'>
        <picture>
          <img src='/logo.png' alt='Logo weather app' />
        </picture>
      </Link>
      <nav>
        <Link
          href='/'
          className='flex items-center flex-col gap-y-1 mb-6 p-2 rounded-xl hover:bg-gray-600'
        >
          <WeatherIcon />
          Weather
        </Link>
        <Link
          href='/cities'
          className='flex items-center flex-col gap-y-1 mb-6 p-2 rounded-xl hover:bg-gray-600'
        >
          <CitiesIcon />
          Cities
        </Link>
        <Link
          href='/settings'
          className='flex items-center flex-col gap-y-1 mb-6 p-2 rounded-xl hover:bg-gray-600'
        >
          <SettingsIcon />
          Settings
        </Link>
      </nav>
    </aside>
  )
}
