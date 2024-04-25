import CurrentWeather from './currentWeather'
import TodayForecast from './todayForecast'
import AirConditions from './airConditions'
import { SideWeather } from './SideWeather'

export async function Weather({ weather }: { weather: any }) {
  const { mainWeather, dataAirConditions, forecastDay, hours } = weather
  
  return (
    <>
      <div
        className='lg:grid hidden'
        style={{
          gridTemplateColumns: '2fr 1fr',
          width: '100%',
          height: '100%',
          alignItems: 'start',
          gap: '18px',
        }}
      >
        <div>
          <CurrentWeather {...mainWeather} />
          <TodayForecast hours={[...hours]} />
          <AirConditions data={dataAirConditions} />
        </div>

        <SideWeather data={[forecastDay, 70]} />
      </div>
      <div className=' lg:hidden flex flex-col w-full h-full'>
        <div className='mb-4'>
          <CurrentWeather {...mainWeather} />
          <TodayForecast hours={[...hours]} />
          <AirConditions data={dataAirConditions} />
        </div>

        <SideWeather data={[forecastDay, 70]} />
      </div>
    </>
  )
}
