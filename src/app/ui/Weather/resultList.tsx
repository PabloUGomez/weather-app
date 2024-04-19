'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { useId } from 'react'

export default function ResultList({
  data,
}: {
  data: {
    name: string
    country: string
    url: string
  }[]
}) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const id = useId()
  return (
    <div
      className={`bg-gray-800 rounded-lg m-1 p-3 absolute z-10 top-16 gap-y-2 ${
        data[0] ? 'block' : 'hidden'
      }`}
    >
      {data.map(
        (
          item: { name: string; country: string; url: string },
          index: number
        ) => {
          // Add 'index' parameter
          const { name, country, url } = item
          const handleClick = () => {
            const ul = document.querySelector('ul')
            if (ul) {
              ul.remove()
            }
            const params = new URLSearchParams(searchParams)
            params.set('city', url)
            params.delete('search')
            params.delete('seemore')
            const cities = JSON.parse(localStorage.getItem('cities') || '[]')
            if (cities.length >= 4) {
              cities.pop()
            }
            cities.unshift({ url, name, country })
            localStorage.setItem('cities', JSON.stringify(cities))
            replace(`/Weather?${params.toString()}`)
          }

          return (
            <li
              key={`${id}-${index}`} // Add unique key prop
              className='flex flex-row items-end bg-gray-800 py-2 px-1 rounded-md text-white hover:bg-white/30 cursor-pointer border-white'
              onClick={handleClick}
            >
              <span className='text-lg font-bold'>
                {name}
                <span className='text-xs font-light ml-1'>{country}</span>
              </span>
            </li>
          )
        }
      )}
    </div>
  )
}
