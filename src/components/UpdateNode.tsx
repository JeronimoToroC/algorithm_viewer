import { useEffect, useState, FC } from 'react';
import ReactFlow, { useNodesState, useEdgesState, Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';

import '../../styles/UpdateNode.css';

// const initialNodes = [
//     { id: '1', data: { label: '-' }, position: { x: 100, y: 100 } },
//     { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 200 } },
// ];

// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
interface UpdateNodeProps {
    initialNodes: Node[];
    initialEdges: Edge[];
    selectedNode: Node;
}

const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

const UpdateNode: FC<UpdateNodeProps> = ({ initialNodes, initialEdges, selectedNode }) => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [nodeValue, setNodeValue] = useState(0);
    const [nodeName, setNodeName] = useState("");
    const [nodeBg, setNodeBg] = useState('#eee');
    const [nodeHidden, setNodeHidden] = useState(false);

    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode.id) {
                    // it's important that you create a new object here
                    // in order to notify react flow about the change
                    node.data = {
                        ...node.data,
                        label: "Etiqueta: " + nodeName + " - Valor:" + node?.data?.value,
                    };
                }

                return node;
            })
        );
    }, [nodeName, setNodes]);

    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) => {
                console.log("Marlon nodes val", nds, selectedNode)
                if (node.id === selectedNode.id) { // Verificar si es el nodo seleccionado
                    return {
                        ...node, // TODO;Mantener el resto del nodo igual
                        data: {
                            ...node.data, // Mantener el resto de los datos igual
                            label: "Etiqueta: " + nodeName + " - Valor:" + node?.data?.value,
                            value: nodeValue, // Actualizar el valor
                        },
                    };
                }

                return node;
            })
        );
    }, [nodeValue, nodeName, setNodes]);

    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode.id) {
                    // it's important that you create a new object here
                    // in order to notify react flow about the change
                    node.style = { ...node.style, backgroundColor: nodeBg };
                }

                return node;
            })
        );
    }, [nodeBg, setNodes]);

    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === '1') {
                    // when you update a simple type you can just update the value
                    node.hidden = nodeHidden;
                }

                return node;
            })
        );
        setEdges((eds) =>
            eds.map((edge) => {
                if (edge.id === 'e1-2') {
                    edge.hidden = nodeHidden;
                }

                return edge;
            })
        );
    }, [nodeHidden, setNodes, setEdges]);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            defaultViewport={defaultViewport}
            minZoom={0.2}
            maxZoom={4}
            attributionPosition="bottom-left"
        >
            <div className="updatenode__controls">
                <label>Etiqueta:</label>
                <input value={nodeName} onChange={(evt) => setNodeName(evt.target.value)} />

                <label>Valor:</label>
                <input value={nodeValue} onChange={(evt) => {
                    const value = parseInt(evt.target.value, 10); // Intenta convertir el valor del input a un entero
                    if (!isNaN(value)) { // Comprueba si el valor es un número
                        setNodeValue(value); // Si es un número, actualiza el estado
                    } else if (evt.target.value === '') { // Permite borrar el input
                        setNodeValue(0) // Limpia el input si se borra
                    }
                }} />

                <label className="updatenode__bglabel">background:</label>
                <input value={nodeBg} onChange={(evt) => setNodeBg(evt.target.value)} />

                <div className="updatenode__checkboxwrapper">
                    <label>hidden:</label>
                    <input
                        type="checkbox"
                        checked={nodeHidden}
                        onChange={(evt) => setNodeHidden(evt.target.checked)}
                    />
                </div>
            </div>
        </ReactFlow>
    );
};

export default UpdateNode;
