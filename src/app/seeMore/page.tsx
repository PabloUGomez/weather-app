import currentWeather from '../ui/Weather/currentWeather'
import todayForecast from '../ui/Weather/todayForecast'
import { SideWeather } from '../ui/Weather/SideWeather'
import { mainWeather, hours, dataAirConditions } from '../ui/Weather/Weather'
import FullAirConditions from '../ui/Weather/fullAirCondition'

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
          gridTemplateRows: '1fr auto',
          width: '100%',
          height: '100%',
          gap: '18px',
        }}
      >
        {currentWeather(mainWeather)}
        <div className='h-full flex items-end'>
                    {todayForecast(hoursSplit)}
        </div>

        {FullAirConditions (dataAirConditions)}
        <SideWeather imageSize={50}/>
      </div>
    </main>
  )
}
