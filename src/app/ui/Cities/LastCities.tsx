'use client'
import { useRouter } from 'next/navigation'
import CityCard from './CityCard'

type city = {
  name: string
  country: string
  url: string
}

export default function LastCities() {
  const cities = JSON.parse(localStorage.getItem('cities') || '[]')
  const { replace } = useRouter()
  const handleClick = (city: {url : string ; name: string ; country : string}) => {
    cities.splice(cities.indexOf(city), 1)
    cities.unshift(city)
    localStorage.setItem('cities', JSON.stringify(cities))
    const params = new URLSearchParams()
    params.set('city', city.url)
    params.delete('search')
    params.delete('seemore')
    replace(`/Weather?${params.toString()}`)
  }
  return (
    <div className='grid grid-rows-4 h-full gap-4'>
      {cities.map((city: city, index : number) => (
        <div key={city.url} onClick={() => handleClick(city)}>
          <CityCard data={[city, index]} />
        </div>
      ))}
    </div>
  )
}
