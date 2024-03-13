import { IGraph } from '@/types/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IGraph = {
    name: '',
    nodes: [],
    isConnected: false,
    isComplete: false,
    isWeighted: false,
    isDirected: false,
}

export const graphSlice = createSlice({
    name: 'graph',
    initialState,
    reducers: {
        setGraph: (state, action) => {
            const {
                name,
                nodes,
                isConnected,
                isComplete,
                isWeighted,
                isDirected,
            } = action.payload
            state.name = name
            state.nodes = nodes
            state.isConnected = isConnected
            state.isComplete = isComplete
            state.isWeighted = isWeighted
            state.isDirected = isDirected
        },
        addNode: (state, action) => {
            state.nodes.push(action.payload)
        },
    },
})
export const { setGraph, addNode } = graphSlice.actions
export default graphSlice.reducer
