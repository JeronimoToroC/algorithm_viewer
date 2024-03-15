import React, { useCallback } from 'react';
import { Edge, Node } from 'reactflow';

interface DeleteNodeProps {
    initialNodes: Node[];
    initialEdges: Edge[];
    selectedEdge: Edge | null;
    selectedNode: Node | null;
    setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
    setSelectedNode: React.Dispatch<React.SetStateAction<Node | null>>;
    setSelectedEdge: React.Dispatch<React.SetStateAction<Edge | null>>;
    onPaneClick: (event: React.MouseEvent) => void
    // Esto es opcional dependiendo de tu lógica
}

const DeleteNode: React.FC<DeleteNodeProps> = ({ initialNodes, initialEdges, selectedNode, setNodes, setSelectedNode, setEdges }) => {
    const deleteNode = useCallback(() => {
        if (!selectedNode) return; // Verifica si hay un nodo seleccionado

        // Filtra todas las aristas que no estén conectadas al nodo seleccionado
        const filteredEdges = initialEdges.filter(
            (e) => e.source !== selectedNode.id && e.target !== selectedNode.id
        );

        // Filtra todos los nodos que no sean el nodo seleccionado
        const filteredNodes = initialNodes.filter((n) => n.id !== selectedNode.id);

        // Actualiza los estados de edges y nodes
        setEdges(filteredEdges);
        setNodes(filteredNodes);

        // Limpia el nodo seleccionado después de eliminarlo
        setSelectedNode(null);
    }, [selectedNode, initialNodes, initialEdges,]);
    return (
        <div className='items-start border border-slate-800'>
            <button onClick={deleteNode}>Eliminar Nodo</button>
        </div>
    );
};

export default DeleteNode;