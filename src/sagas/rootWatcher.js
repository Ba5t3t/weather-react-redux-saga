import { all } from 'redux-saga/effects'
import { weatherWatcher } from './weatherSaga'

export function* rootWatcher() {
    yield all([weatherWatcher()])
}