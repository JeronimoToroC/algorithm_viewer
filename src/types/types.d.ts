// GraphTypes.d.ts
export type NodeType = 'Object' | 'function' | ' '

export interface INodeLinkedTo {
    target: number
    source: number
    weight?: number
}

export interface INodeCoordinates {
    x: number
    y: number
}

export interface INode {
    id: number
    label: string
    data: Record<string, unknown>
    type: NodeType
    linkedTo: INodeLinkedTo[]
    radius: number
    coordenates: INodeCoordinates
}

export interface IGraph {
    name: string
    nodes: INode[]
    isConnected: boolean
    isComplete: boolean
    isWeighted: boolean
    isDirected: boolean
}

export interface IGraphData {
    graphs: IGraph[]
}
