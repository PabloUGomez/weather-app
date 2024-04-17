
export function getForecast7Days(){
    return fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=London&days=7`)
        .then(response => response.json())
        .then(data => {
        return data
        })
        .catch((error) => {
        console.error('Error:', error)
        })
}