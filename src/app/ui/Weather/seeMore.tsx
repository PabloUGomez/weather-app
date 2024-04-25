import CurrentWeather from './currentWeather'
import TodayForecast from './todayForecast'
import { SideWeather } from './SideWeather'
import FullAirConditions from './fullAirCondition'

export default function SeeMore({ weather }: { weather: any }) {
  const { mainWeather, dataAirConditions, forecastDay, hours } = weather
  return (
    <>
      <div
        className='hidden lg:grid'
        style={{
          gridTemplateColumns: '2fr 1fr',
          gridTemplateRows: '1fr auto',
          alignItems: 'start',
          width: '100%',
          height: '100%',
        }}
      >
        <CurrentWeather {...mainWeather} />
        <div className='flex items-end h-full'>
          <TodayForecast hours={[...hours]} />
        </div>
        <FullAirConditions dataAirConditions={dataAirConditions} />
        <SideWeather data={[forecastDay, 45]} />
      </div>
      <div>
        <div
          className='flex flex-col lg:hidden  w-full h-full'
          style={{
            gridTemplateColumns: '2fr 1fr',
            gridTemplateRows: '1fr auto',
            alignItems: 'start',
            width: '100%',
            height: '100%',
          }}
        >
          <CurrentWeather {...mainWeather} />
          <TodayForecast hours={[...hours]} />
          <FullAirConditions dataAirConditions={dataAirConditions} />
          <SideWeather data={[forecastDay, 45]} />
        </div>
      </div>
    </>
  )
}
