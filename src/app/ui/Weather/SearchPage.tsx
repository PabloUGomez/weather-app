'use client'

import { url } from 'inspector'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent } from 'react'
import { useDebouncedCallback } from 'use-debounce'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams)
      const value = e.target.value
      if (value) {
        params.set('search', value)
      }
      replace(`/?${params.toString()}`)
    },
    400
  )
  return (
    <form action=''>
      <input
        className='bg-gray-800 w-full rounded-2xl p-3'
        id='search'
        type='text'
        placeholder='Search cities'
        onChange={(e) => handleSearch(e)}
      />
    </form>
  )
}
