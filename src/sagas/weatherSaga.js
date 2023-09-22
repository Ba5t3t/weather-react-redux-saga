import { put, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'
import { setWeather, FETCH_WEATHER } from '../store/reducer'

const fetchWeatherFromAPI = (unit) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=d247debdbf2d57c35eafe9d38eed6d3d&lang=ru&units=${unit}`)

function* weatherWorker() {
    const result = yield call(fetchWeatherFromAPI)
    yield put(setWeather(result.data))
    console.log(result.data);
}

export function* weatherWatcher() {
    yield takeEvery(FETCH_WEATHER, weatherWorker)
}




