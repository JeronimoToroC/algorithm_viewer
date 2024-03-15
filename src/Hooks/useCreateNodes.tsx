import { useCallback, useState } from "react";
import { Node } from "reactflow";
//TODO: Revisar hook que rompe la pagina cuando crea un nodo

// Custom hook useCreateNodes
export const useCreateNodes = () => {
    // useState para mantener el estado de los nodos dentro del hook.
    const [nodes, setNodes] = useState<Node[]>([]);

    // El ID podría ser calculado con base al último nodo o una referencia.
    let initialId = 0;
    const getNodeId = () => `node_${initialId++}`;
    // useCallback para el método agregarNodo.
    const agregarNodo = useCallback(() => {
        const nuevoNodo: Node = {
            id: getNodeId(),
            type: 'default',
            position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
            data: { label: `Nodo ${initialId}` },
        };
        setNodes((nds) => [...nds, nuevoNodo]);
    }, [setNodes]);

    const onNodesChange = useCallback((changes: any[]) => {
        setNodes((nds) =>
            nds.map((node) => {
                const change = changes.find((c) => c.id === node.id);
                if (change) {
                    // Asumimos que el cambio es del tipo `NodeChange` que tiene una propiedad `position`.
                    // Asegúrate de verificar la documentación o los tipos de `reactflow` para ver la estructura correcta.
                    return {
                        ...node,
                        position: change.position,
                        // Aquí puedes añadir cualquier otro cambio que necesites actualizar
                    };
                }
                return node;
            })
        );
    }, [setNodes]);

    return { agregarNodo, nodes, onNodesChange };
};
