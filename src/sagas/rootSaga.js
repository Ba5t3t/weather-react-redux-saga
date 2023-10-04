import { spawn, all } from 'redux-saga/effects';
import { cityWatcher } from './citySaga';
import { weatherWatcher } from './weatherSaga';



export default function* rootSaga() {
    yield spawn(cityWatcher)
    yield spawn(weatherWatcher)
}