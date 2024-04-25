'use client'

import AirConditionCard from './airConditionCard'

export default function FullAirCondition({
  dataAirConditions,
}: {
  dataAirConditions: any
}) {
  const {
    feelslike,
    wind,
    uv,
    humidity,
    vis,
    pressure,
    sunset,
    chanceOfRain,
  } = dataAirConditions
  const data = [
    { text: 'Feels like', value: feelslike, src: 'feelslike' },
    { text: 'Wind', value: wind, src: 'wind' },
    { text: 'Humidity', value: humidity, src: 'humidity' },
    { text: 'UV Index', value: uv, src: 'uv' },
    { text: 'Visibility', value: vis, src: 'visibility' },
    { text: 'Pressure', value: pressure, src: 'barometer' },
    { text: 'Sunset', value: sunset, src: 'sunset' },
    { text: 'Chance of Rain', value: chanceOfRain, src: 'rainchance' },
  ]
  return (
    <section className='w-full h-full'>
      <article
        className='w-full h-full p-0 lg:pr-[18px]'
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr 1fr 1fr',
          width: '100%',
          gap: '18px',
        }}
      >
        {data.map((item, index) => AirConditionCard(item, index))}
      </article>
    </section>
  )
}
