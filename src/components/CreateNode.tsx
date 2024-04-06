import React from 'react'
import ReactFlow, {
    Edge,
    Node,
    OnNodesChange,
    OnEdgesChange,
    OnConnect,
} from 'reactflow'

interface CreateNodeProps {
    nodes: Node[]
    edges: Edge[]
    onNodesChange: OnNodesChange
    onEdgesChange: OnEdgesChange
    onPaneClick: (event: React.MouseEvent) => void
    onConnect: OnConnect
    onNodeClick: (event: React.MouseEvent, node: Node) => void
    onEdgeClick: (event: React.MouseEvent, edge: Edge) => void
    // Esto es opcional dependiendo de tu lógica
}

const CreateNode: React.FC<CreateNodeProps> = ({
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onNodeClick,
    onPaneClick,
    onEdgeClick,
}) => {
    return (
        <div style={{ height: 500 }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={onNodeClick}
                onEdgeClick={onEdgeClick}
                onPaneClick={onPaneClick}
                fitView
            ></ReactFlow>
        </div>
    )
}

export default CreateNode
