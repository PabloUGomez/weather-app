'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent } from 'react'
import { useDebouncedCallback } from 'use-debounce'

export default function SearchPage() {
  const input = document.getElementById('search') as HTMLInputElement
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
  if (input) {
    if (pathname === '/Weather') {
      if (input.value != '') {
        input.value = ''
      }
    }
  }

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
