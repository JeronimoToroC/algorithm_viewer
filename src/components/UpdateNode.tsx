import { useEffect, useState, FC } from 'react';
import { Node, Edge, OnNodesChange } from 'reactflow';
import 'reactflow/dist/style.css';

import '../../styles/UpdateNode.css';
interface UpdateNodeProps {
    initialNodes: Node[];
    setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
    selectedNode: Node | null;
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
    setSelectedNode: React.Dispatch<React.SetStateAction<Node | null>>;
    onNodesChange: OnNodesChange;
    onPaneClick: (event: React.MouseEvent) => void
}

//TODO: AGREGAR CORRECCION AL MOMENTO DE SELECCIONAR DE NUEVO UN NODO YA EDITADO SE SETTEAN LOS VALORES INICIALES DE LOS PARAMETROS QUE SE PIDEN
const UpdateNode: FC<UpdateNodeProps> = ({ initialNodes, selectedNode, setNodes, setSelectedNode, setEdges }) => {
    const [nodeValue, setNodeValue] = useState(0);
    const [nodeName, setNodeName] = useState("");
    const [nodeBg, setNodeBg] = useState('#eee');
    const [nodeHidden, setNodeHidden] = useState(false);
    const [nodeWidth, setNodeWidth] = useState(150); // Valor inicial arbitrario
    const [nodeHeight, setNodeHeight] = useState(50); // Valor inicial arbitrario


    useEffect(() => {
        // Solo proceder si hay un nodo seleccionado y hay nodos iniciales
        if (selectedNode && initialNodes.length > 0) {
            const updatedNodes = initialNodes.map(node => {
                // Verificar si es el nodo seleccionado para actualizarlo
                if (node.id === selectedNode.id) {
                    return {
                        ...node,
                        data: {
                            ...node.data,
                            label: `Etiqueta: ${nodeName} - Valor: ${nodeValue}`,
                            value: nodeValue,
                        },
                    };
                }
                // Retornar el nodo sin cambios si no es el seleccionado
                return node;
            });

            // Actualizar el estado de los nodos con la nueva lista actualizada
            setNodes(updatedNodes);

            // Además, actualizar el nodo seleccionado si es necesario
            setSelectedNode({
                ...selectedNode,
                data: {
                    ...selectedNode.data,
                    label: `Etiqueta: ${nodeName} - Valor: ${nodeValue}`,
                    value: nodeValue,
                },
            });
        }
    }, [nodeName, nodeValue, initialNodes]);

    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode?.id) {
                    return {
                        ...node,
                        style: {
                            ...node.style,
                            backgroundColor: nodeBg,
                            width: nodeWidth, // Aplicar el ancho
                            height: nodeHeight, // Aplicar la altura
                        },
                    };
                }

                return node;
            })
        );
    }, [nodeBg, nodeWidth, nodeHeight, selectedNode]);



    useEffect(() => {
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === selectedNode?.id) {
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
    }, [nodeHidden, selectedNode]);

    return (
        <>
            {selectedNode && (
                <div className="w-full grid grid-cols-4">
                    <div className='col-start-1 m-2 p-2'>

                        <label>Etiqueta:</label>
                        <input className='w-30 m-2' value={nodeName} onChange={(evt) => setNodeName(evt.target.value)} />
                    </div>
                    <div className='col-start-2 m-2 p-2'>
                        <label>Valor:</label>
                        <input value={nodeValue} className='w-30 m-2' onChange={(evt) => {
                            const value = parseInt(evt.target.value, 10); // Intenta convertir el valor del input a un entero
                            if (!isNaN(value)) { // Comprueba si el valor es un número
                                setNodeValue(value); // Si es un número, actualiza el estado
                            } else if (evt.target.value === '') { // Permite borrar el input
                                setNodeValue(0) // Limpia el input si se borra
                            }
                        }} />
                    </div>
                    <div className='col-start-3 m-2 p-2'>
                        <label>Ancho:</label>
                        <input
                            className='col-start-2 m-2 p-2'
                            value={nodeWidth}
                            onChange={(evt) => setNodeWidth(Number(evt.target.value))}
                        />
                    </div>
                    <div className='col-start-4 m-2 p-2'>
                        <label>Altura:</label>
                        <input
                            className='col-start-2 m-2 p-2'
                            value={nodeHeight}
                            onChange={(evt) => setNodeHeight(Number(evt.target.value))}
                        />
                    </div>


                    <div className='col-start-1 mr-4'>
                        <label className="updatenode__bglabel">background:</label>
                        <input className='col-start-2 m-2 p-2' value={nodeBg} onChange={(evt) => setNodeBg(evt.target.value)} />

                    </div>
                    <div className="updatenode__checkboxwrapper col-start-2 m-2 p-2">
                        <label>hidden:</label>
                        <input
                            className='col-start-2 m-2 p-2'
                            type="checkbox"
                            checked={nodeHidden}
                            onChange={(evt) => setNodeHidden(evt.target.checked)}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default UpdateNode;
