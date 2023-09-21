const initialState = {
    weatherData: {},
    city: '',
    temp: ''
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
                temp: action.payload.main.temp
            }
    }
    return state;
}

export const setWeather = (payload) => ({ type: SET_WEATHER, payload })
export const fetchWeather = () => ({ type: FETCH_WEATHER })


