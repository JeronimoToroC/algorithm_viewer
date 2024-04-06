import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addNewEdge } from '../../redux/graphSlice'
import { Connection, Edge, addEdge } from 'reactflow'

export const useConnectEdges = () => {
    const dispatch = useDispatch()

    const onConnect = useCallback(
        (connection: Connection) => {
            dispatch(
                addNewEdge((eds: Edge[]) =>
                    addEdge({ ...connection, id: `${eds.length + 1}` }, eds)
                )
            )
        },
        [dispatch]
    ) // Ahora `getNodeId` es una dependencia
    return onConnect
}
