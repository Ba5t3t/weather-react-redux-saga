import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { weatherReducer } from './reducer'
import createSagaMiddleware from 'redux-saga'
import { combineReducers } from 'redux'
import { rootWatcher } from '../sagas/rootWatcher'

const rootReducer = combineReducers({
    weatherData: weatherReducer,
})

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlware) => [...getDefaultMiddlware(), sagaMiddleware],
})

sagaMiddleware.run(rootWatcher)