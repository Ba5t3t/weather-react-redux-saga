const initialState = {
    weatherData: {},
    city: '',
    temp: '',
    feelsLike: '',
    description: '',
    humidity: '',
    pressure: '',
    wind: '',
    sunrise: '',
    sunset: '',
    tempMax: '',
    tempMin: '',
    icon: '',
    lat: '',
    lon: '',
    visibility: '',
    timezone: '',
};


const SET_WEATHER = 'SET_WEATHER';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                weatherData: action.payload,
                city: action.payload.name,
                temp: action.payload.main.temp,
                feelsLike: action.payload.main.feels_like,
                description: action.payload.weather[0].description,
                humidity: action.payload.main.humidity,
                pressure: action.payload.main.pressure,
                wind: action.payload.wind.speed,
                sunrise: action.payload.sys.sunrise,
                sunset: action.payload.sys.sunset,
                tempMax: action.payload.main.temp_max,
                tempMin: action.payload.main.temp_min,
                icon: action.payload.weather[0].icon,
                lat: action.payload.coord.lat,
                lon: action.payload.coord.lon,
                visibility: action.payload.visibility,
                timezone: action.payload.timezone,
            }
    }
    return state;
}

export const setWeather = (payload) => ({ type: SET_WEATHER, payload })
export const fetchWeather = (city, toggleErrorModal, setErrorModal) => ({
    type: FETCH_WEATHER,
    payload: {
        unit: 'metric',
        city: city,
        toggleErrorModal,
        setErrorModal
    }
})


