import { put, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'
import { setWeather, FETCH_WEATHER } from '../store/reducer'

const fetchWeatherFromAPI = (unit = 'metric', city = 'Moscow') => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0c767d0dbd4142401b9bca74616fa02&lang=ru&units=${unit}`)

function* weatherWorker(props = {}) {
    const { payload: { unit, city, toggleErrorModal, setErrorModal } } = props;

    try {
        const data = yield call(fetchWeatherFromAPI, unit, city)
        yield put(setWeather(data.data))
    } catch (error) {
        console.log(error);
        toggleErrorModal();
        //const {code, message} = error
        //const { cod, message } = error.response.data;
        setErrorModal(error.response.data.cod, error.response.data.message, error.code, error.message);
        const data = yield call(fetchWeatherFromAPI)
        localStorage.setItem("city", JSON.stringify(city));
        yield put(setWeather(data.data))

    }
}

export function* weatherWatcher() {
    yield takeEvery(FETCH_WEATHER, weatherWorker)
}


