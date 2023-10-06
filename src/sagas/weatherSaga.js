import { put, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'
import { setWeather, FETCH_WEATHER } from '../store/reducer'

const fetchWeatherFromAPI = (unit = 'metric', city = 'Yakutsk') => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0c767d0dbd4142401b9bca74616fa02&lang=ru&units=${unit}`)

function* weatherWorker(props = {}) {
    const { payload: { unit, city } } = props;
    const data = yield call(fetchWeatherFromAPI, unit, city)
    yield put(setWeather(data.data))
    console.log(data.data)

}

export function* weatherWatcher() {
    yield takeEvery(FETCH_WEATHER, weatherWorker)
}




