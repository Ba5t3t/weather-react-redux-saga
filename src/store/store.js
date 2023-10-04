import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { weatherReducer } from './reducer'
import createSagaMiddleware from 'redux-saga'
import { combineReducers } from 'redux'
import { cityReducer } from './cityReducer'
import rootSaga from '../sagas/rootSaga'


const rootReducer = combineReducers({
    weatherData: weatherReducer,
    citiesData: cityReducer,
})

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlware) => [...getDefaultMiddlware({
        serializableCheck: false,
    }), sagaMiddleware],
})

sagaMiddleware.run(rootSaga)