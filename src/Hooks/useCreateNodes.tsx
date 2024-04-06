import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNode, addNodesNumber } from '../../redux/graphSlice'
import { Node } from 'reactflow'
import { IStore } from 'redux/store.ts'

export const useCreateNodes = () => {
    const [id, setId] = useState(0)
    const getNodeId = () => {
        setId(id + 1)
        return id + 1
    }
    const dispatch = useDispatch()
    const nodesNumberState: number = useSelector(
        (state: IStore) => state.graph.nodesNumber
    )
    const addNewNode = useCallback(() => {
        const count = nodesNumberState === 0 ? 1 : nodesNumberState + 1
        const newNodeId = count.toString()
        const nuevoNodo: Node = {
            id: newNodeId,
            type: 'default',
            position: {
                x: Math.random() * 100,
                y: Math.random() * 100,
            },
            data: { label: `Nodo ${newNodeId}`, value: 0 },
        }
        return dispatch(addNode(nuevoNodo)) && dispatch(addNodesNumber(count))
    }, [getNodeId])
    return addNewNode
}
