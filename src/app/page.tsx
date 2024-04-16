import { Weather } from './ui/Weather/Weather'
import { SideWeather } from './ui/Weather/SideWeather'

export default function Home() {
  return (
    <main className='text-white w-full h-full'>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          width: '100%',
          height: '100%',
          gap : '18px',
        }}
      >
        <Weather />
        <SideWeather />
      </div>
    </main>
  )
}
