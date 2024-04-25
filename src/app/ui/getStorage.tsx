'use client'

export function getStorage () {
  const cities = JSON.parse(localStorage.getItem('cities') || '[]')
  const settings = JSON.parse(localStorage.getItem('settings') || '{}')
  const data = { cities, settings }
  console.log('data', data);
  
  return data
}
