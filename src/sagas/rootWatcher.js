import { all } from 'redux-saga/effects'
import { weatherWatcher } from './weatherSaga'
import { cityWatcher } from './citySaga'

export function* rootWatcher() {
    yield all([weatherWatcher()], [cityWatcher()])
}