type mainWeather = {
  name: string
  country: string
  isDay: string
  temp: string
  condition: string
  icon: string
}
type airConditions = {
  feelslike: string
  wind: string
  uv: number
  humidity: number
  vis: string
  pressure: string
  sunset: string
  chanceOfRain: number
}

const apiKey = process.env.API_KEY
let settings = {} as {
  temperature: string
  wind: string
  pressure: string
  precipitation: string
  distance: string
}

export async function getForecast7Days(city: string) {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`
  )
    .then((response) => response.json())
    .then((data) => {
      const { location, current, forecast } = data
      const forecastData = forecast.forecastday
      const forecastDay = forecastData.map((days: any) => {
        const { date, day } = days
        const { maxtemp_c, mintemp_c, maxtemp_f, mintemp_f, condition } = day
        const { icon, text } = condition        
        return {
          date,
          day: {
            maxtemp: settings.temperature === 'Celsius' ? `${maxtemp_c}°` : `${maxtemp_f}°F`,
            mintemp: settings.temperature === 'Celsius' ? `${mintemp_c}°` : `${mintemp_f}°F`,
            condition: text,
            img: icon.split('/').slice(-1)[0].split('.')[0],
          },
        }
      })
      const time = current?.is_day === 1 ? 'day' : 'night'
      const localTime = location?.localtime.split(' ')[1].split(':')[0]
      const mainWeather = {
        name: location.name,
        country: location.country,
        isDay: time,
        temp: settings.temperature === 'Celsius' ? `${current.temp_c}°` : `${current.temp_f}°F`,
        condition: current.condition.text,
        icon: current.condition.icon.split('/').slice(-1)[0].split('.')[0],
      } as mainWeather
      const hours = forecast.forecastday[0].hour.slice(
        Number(localTime),
        Number(localTime) + 6
      )
      const dataAirConditions = {
        feelslike: settings.temperature === 'Celsius' ? `${current.feelslike_c}°` : `${current.feelslike_f}°F`,
        wind: settings.wind === 'kmh' ? `${current.wind_kph} km/h` : `${current.wind_mph} m/s`,
        uv: current.uv,
        humidity: current.humidity,
        vis: settings.distance === 'Kilometers' ? `${current.vis_km} km` : `${current.vis_miles} miles`,
        pressure: settings.pressure === 'mm' ? `${current.pressure_mb} mb` : `${current.pressure_in} in`,
        sunset: forecastData[0].astro.sunset,
        chanceOfRain: forecastData[0].day.daily_chance_of_rain,
      } as airConditions
      
      const weather = { mainWeather, dataAirConditions, forecastDay, hours }
      return weather
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
