import { put, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'
import { setCity, FETCH_CITY } from '../store/cityReducer'

const fetchCityFromAPI = (city = '') => axios.get(`https://autocomplete.travelpayouts.com/places2?term=${city}&locale=en&types[]=city`)

function* cityWorker(props = {}) {
    const { payload: city } = props;
    const data = yield call(fetchCityFromAPI, [city])
    console.log(city);
    yield put(setCity(data))
    console.log(data.data)

}

export function* cityWatcher() {
    yield takeEvery(FETCH_CITY, cityWorker)
}