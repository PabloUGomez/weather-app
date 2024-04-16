type Weather = {
    location: {
        name: string,
        region: string,
        country: string,
        lat: number,
        lon: number,
        tz_id: string,
        localtime_epoch: number,
        localtime: string
    },
    current: {
        last_updated_epoch: number,
        last_updated: string,
        temp_c: number,
        temp_f: number,
        is_day: number,
        condition: {
            text: string,
            icon: string,
            code: number
        },
        wind_mph: number,
        wind_kph: number,
        wind_degree: number,
        wind_dir: string,
        pressure_mb: number,
        pressure_in: number,
        precip_mm: number,
        precip_in: number,
        humidity: number,
        cloud: number,
        feelslike_c: number,
        feelslike_f: number,
        vis_km: number,
        vis_miles: number,
        uv: number,
        gust_mph: number,
        gust_kph: number
    }
}

export const weather = {
    "location": {
        "name": "London",
        "region": "City of London, Greater London",
        "country": "United Kingdom",
        "lat": 51.52,
        "lon": -0.11,
        "tz_id": "Europe/London",
        "localtime_epoch": 1713276900,
        "localtime": "2024-04-16 15:15"
    },
    "current": {
        "last_updated_epoch": 1713276000,
        "last_updated": "2024-04-16 15:00",
        "temp_c": 11.0,
        "temp_f": 51.8,
        "is_day": 1,
        "condition": {
            "text": "Light sleet",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/317.png",
            "code": 1204
        },
        "wind_mph": 12.5,
        "wind_kph": 20.2,
        "wind_degree": 320,
        "wind_dir": "NW",
        "pressure_mb": 1013.0,
        "pressure_in": 29.91,
        "precip_mm": 0.46,
        "precip_in": 0.02,
        "humidity": 58,
        "cloud": 25,
        "feelslike_c": 9.1,
        "feelslike_f": 48.3,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 2.0,
        "gust_mph": 14.2,
        "gust_kph": 22.8
    }
} as Weather;