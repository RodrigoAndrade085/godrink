import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch,TypedUseSelectorHook, useSelector } from 'react-redux'

import drinksReducer from './drinks'

const combinedReducers = {
  drinks: drinksReducer
}

const store = configureStore({
  reducer: combineReducers(combinedReducers),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store