import { IGraph } from '@/types/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: IGraph = {
    name: '',
    nodes: [],
    edges: [],
    nodesNumber: 0,
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
                edges,
                nodesNumber,
                isConnected,
                isComplete,
                isWeighted,
                isDirected,
            } = action.payload
            state.name = name
            state.nodes = nodes
            state.edges = edges
            state.nodesNumber = nodesNumber
            state.isConnected = isConnected
            state.isComplete = isComplete
            state.isWeighted = isWeighted
            state.isDirected = isDirected
        },
        addNode: (state, action) => {
            state.nodes.push(action.payload)
        },
        addNewEdge: (state, action) => {
            state.edges = action.payload
        },
        addNodesNumber: (state, action) => {
            state.nodesNumber = action.payload
        },
    },
})
export const { setGraph, addNode, addNodesNumber, addNewEdge } =
    graphSlice.actions
export default graphSlice.reducer
