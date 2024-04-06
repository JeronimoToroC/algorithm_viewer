import { configureStore } from '@reduxjs/toolkit'
import graphReducer from './graphSlice'
import { IGraph } from '@/types/types'
export interface IStore {
    graph: IGraph
}
export const store = configureStore({
    reducer: {
        graph: graphReducer,
    },
})
