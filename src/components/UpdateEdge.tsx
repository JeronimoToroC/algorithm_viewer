import { useEffect, useState, FC } from 'react';
import { Edge, OnEdgesChange, Node } from 'reactflow';
import 'reactflow/dist/style.css';

import '../../styles/UpdateNode.css';
interface UpdateEdgeProps {
    initialNodes: Node[];
    initialEdges: Edge[];
    selectedEdge: Edge | null;
    setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
    setSelectedEdge: React.Dispatch<React.SetStateAction<Edge | null>>;
    onEdgesChange: OnEdgesChange;
    onPaneClick: (event: React.MouseEvent) => void
}

//TODO: AGREGAR CORRECCION AL MOMENTO DE SELECCIONAR DE NUEVO UN NODO YA EDITADO SE SETTEAN LOS VALORES INICIALES DE LOS PARAMETROS QUE SE PIDEN
const UpdateEdge: FC<UpdateEdgeProps> = ({ initialEdges, selectedEdge, setEdges, initialNodes }) => {
    const [edgeValue, setEdgeValue] = useState(0);
    const [edgeBg, setEdgeBg] = useState("#rrggbb");
    const [edgeHidden, setEdgeHidden] = useState(false);
    const [edgeSource, setEdgeSource] = useState('');
    const [edgeTarget, setEdgeTarget] = useState('');
    const [edgeStrokeWidth, setEdgeStrokeWidth] = useState(2); // valor por defecto

    useEffect(() => {
        setEdges((edg) =>
            edg.map((edge) => {
                if (edge.id === selectedEdge?.id) {
                    const updatedEdge = {
                        ...edge,
                        style: {
                            ...edge.style,
                            stroke: edgeBg, // color del borde
                            strokeWidth: edgeStrokeWidth, // grosor del borde
                        },
                    };

                    // Si el borde está oculto, lo aplicamos también
                    if (edgeHidden) {
                        updatedEdge.hidden = edgeHidden;
                    }

                    return updatedEdge;
                }

                return edge;
            })
        );
    }, [edgeBg, edgeStrokeWidth, edgeHidden, selectedEdge]);

    useEffect(() => {
        // Solo proceder si hay un nodo seleccionado y hay nodos iniciales
        if (selectedEdge && initialEdges.length > 0) {
            const updatedEdges = initialEdges.map(edge => {
                // Verificar si es el nodo seleccionado para actualizarlo
                if (edge.id === selectedEdge.id) {
                    return {
                        ...edge,
                        source: edgeSource !== "" ? edgeSource : selectedEdge?.source,
                        target: edgeTarget !== "" ? edgeTarget : selectedEdge?.target,
                        label: edgeValue !== 0 ? `Peso: ${edgeValue}` : "",
                        data: {
                            ...edge.data,
                            value: edgeValue,
                        },
                    };
                }
                // Retornar el nodo sin cambios si no es el seleccionado
                return edge;
            });

            // Actualizar el estado de los nodos con la nueva lista actualizada
            setEdges(updatedEdges);


        }
    }, [edgeValue, edgeSource, edgeTarget]);

    useEffect(() => {
        setEdges((edg) =>
            edg.map((edge) => {
                if (edge.id === selectedEdge?.id) {
                    return {
                        ...edge,
                        style: {
                            ...edge.style,
                            backgroundColor: edgeBg,
                        },
                    };
                }

                return edge;
            })
        );
    }, [edgeBg, selectedEdge]);



    useEffect(() => {
        setEdges((edg) =>
            edg.map((edge) => {
                if (edge.id === selectedEdge?.id) {
                    // when you update a simple type you can just update the value
                    edge.hidden = edgeHidden;
                }

                return edge;
            })
        );
        setEdges((eds) =>
            eds.map((edge) => {
                if (edge.id === 'e1-2') {
                    edge.hidden = edgeHidden;
                }

                return edge;
            })
        );
    }, [edgeHidden, selectedEdge]);
    //TODO: CAMBIAR FORMULARIO GENERICO A FORMIK
    return (
        <>
            {selectedEdge && (
                <div className="w-full grid grid-cols-7 border border-slate-800">
                    <div className='col-start-1 cols m-2 p-2'>
                        <label>Valor:</label>
                        <input value={edgeValue} className='w-30 m-2' onChange={(evt) => {
                            const value = parseInt(evt.target.value, 10); // Intenta convertir el valor del input a un entero
                            if (!isNaN(value)) { // Comprueba si el valor es un número
                                setEdgeValue(value); // Si es un número, actualiza el estado
                            } else if (evt.target.value === '') { // Permite borrar el input
                                setEdgeValue(0) // Limpia el input si se borra
                            }
                        }} />
                    </div>

                    <div className='col-start-3 m-2 p-2'>
                        <label>Origen:</label>
                        <select
                            value={edgeSource}
                            onChange={(evt) => setEdgeSource(evt.target.value)}
                        >
                            {initialNodes.map((node: Node) => { // Esto imprimirá cada nodo en la consola
                                return (
                                    <option value={node.id}>
                                        {node.data.label || node.id}
                                    </option>
                                );
                            })}

                        </select>
                    </div>
                    <div className='col-start-5 m-2 p-2'>
                        <label>Destino:</label>
                        <select value={edgeTarget} onChange={(evt) => setEdgeTarget(evt.target.value)}>
                            {initialNodes.map((node) => (
                                <option value={node?.id}>
                                    {node?.data?.label || node?.id}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='col-start-1 m-2'>
                        <label>Background:</label>
                        <div className='m-2 bg-gray-600'>
                            <input
                                type="color"
                                value={edgeBg}
                                onChange={(evt) => setEdgeBg(evt.target.value)}
                            />
                        </div>
                    </div>
                    <div className='col-start-3 m-2 p-2'>
                        <label>Grosor del borde:</label>
                        <input
                            value={edgeStrokeWidth}
                            onChange={(evt) => setEdgeStrokeWidth(Number(evt.target.value))}
                        />
                    </div>
                    <div className="updatenode__checkboxwrapper col-start-5 m-2 p-2">
                        <label>hidden:</label>
                        <input
                            className='m-2 p-2'
                            type="checkbox"
                            checked={edgeHidden}
                            onChange={(evt) => setEdgeHidden(evt.target.checked)}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default UpdateEdge;
