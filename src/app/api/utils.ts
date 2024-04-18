const apiKey = process.env.API_KEY

export async function getForecast7Days(city: string) {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`
  )
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
export async function searchCity(value: string) {
  return fetch(
    `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${value}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}