import currentWeather from '../ui/Weather/currentWeather'
import todayForecast from '../ui/Weather/todayForecast'
import { SideWeather } from '../ui/Weather/SideWeather'
import { mainWeather, hours, dataAirConditions } from '../ui/Weather/Weather'
import airConditions from '../ui/Weather/airConditions'

let hoursSplit = [] as any
hours.forEach((hour) => {
  if (hour === hours[0] || hour === hours[2] || hour === hours[5]) {
    hoursSplit.push(hour)
  }
})
export default function Page() {
  return (
    <main className='text-white w-full h-full'>
      <div
        className='flex flex-col lg:grid'
        style={{
          gridTemplateColumns: '2fr 1fr',
          gridTemplateRows: '1fr 2fr',
          width: '100%',
          height: '100%',
          gap: '18px',
        }}
      >
        {currentWeather(mainWeather)}
        {todayForecast(hoursSplit)}
        {airConditions(dataAirConditions)}
        <SideWeather />
      </div>
    </main>
  )
}
