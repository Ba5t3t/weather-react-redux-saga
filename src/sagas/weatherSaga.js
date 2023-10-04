import { put, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'
import { setWeather, FETCH_WEATHER } from '../store/reducer'

const fetchWeatherFromAPI = (unit = 'metric') => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=70a7e54e3b54932247ad27262b24a8ce&lang=ru&units=${unit}`)

function* weatherWorker(props = {}) {
    const { payload: unit } = props;
    const data = yield call(fetchWeatherFromAPI, [unit])
    yield put(setWeather(data.data))
    //console.log(data)

}

export function* weatherWatcher() {
    yield takeEvery(FETCH_WEATHER, weatherWorker)
}




