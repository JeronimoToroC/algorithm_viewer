import React, { useCallback } from 'react';
import { Edge } from 'reactflow';

interface DeleteEdgeProps {
    initialEdges: Edge[];
    selectedEdge: Edge | null;
    setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
    setSelectedEdge: React.Dispatch<React.SetStateAction<Edge | null>>;
    onPaneClick: (event: React.MouseEvent) => void
    // Esto es opcional dependiendo de tu lógica
}

const DeleteEdge: React.FC<DeleteEdgeProps> = ({ initialEdges, selectedEdge, setSelectedEdge, setEdges }) => {
    const deleteEdge = useCallback(() => {
        if (!selectedEdge) return; // Verifica si hay una arista seleccionada

        // Filtra todas las aristas que no sean la arista seleccionada
        const filteredEdges = initialEdges.filter((e) => e.id !== selectedEdge.id);

        // Actualiza el estado de edges
        setEdges(filteredEdges);

        // Limpia la arista seleccionada después de eliminarla
        setSelectedEdge(null);
    }, [selectedEdge, setEdges]);
    return (
        <div className='items-start border border-slate-800'>
            <button onClick={deleteEdge}>Eliminar Arista</button>
        </div>
    );
};

export default DeleteEdge;