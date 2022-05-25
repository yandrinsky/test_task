import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cardReducer from "./reducers/CardSlice"
const rootReducer = combineReducers({
    cardReducer,
})

//Формируем store
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

//Забираем типы
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']