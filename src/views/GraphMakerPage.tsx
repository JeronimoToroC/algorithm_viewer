import React, { useCallback, useState } from 'react';
import CreateNode from '@/components/CreateNode';
import GraphTools from '@/components/GraphTools';
import UpdateNode from '@/components/UpdateNode';
import { Node, Connection, addEdge, useEdgesState, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';

//TODO: PASAR LOS DEMAS HOOKS A LA RESPECTIVA CARPETA
const GraphMakerPage = () => {
    const [id, setId] = useState(0); // Ahora id se maneja como parte del estado
    const getNodeId = () => {
        setId(id + 1); // Actualiza el estado de id para el próximo nodo
        return id + 1; // Retorna el próximo id
    };
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [selectedNode, setSelectedNode] = useState<Node | null>(null);

    const onConnect = useCallback((connection: Connection) => {
        setEdges((eds) => addEdge({ ...connection, id: `e${eds.length}` }, eds));
    }, [setEdges]);

    const addNode = useCallback(() => {
        const newNodeId = getNodeId().toString(); // Asegúrate de que se usa el id actualizado
        const nuevoNodo: Node = {
            id: newNodeId,
            type: 'default',
            position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
            data: { label: `Nodo ${newNodeId}`, value: 0 },
        };
        setNodes((nds) => [...nds, nuevoNodo]);
    }, [setNodes, getNodeId]); // Ahora `getNodeId` es una dependencia

    const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
        event.stopPropagation();
        setSelectedNode(node);
    }, []);

    const onPaneClick = useCallback(() => setSelectedNode(null), []);

    return (
        <section className="container grid h-full w-full grid-cols-12 gap-x-2 p-4">
            <GraphTools addNode={addNode} />
            <section className="col-span-10 rounded-small border-medium border-primary-50 px-1 py-2 text-center text-2xl text-white blue-dark">
                <CreateNode
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onPaneClick={onPaneClick}
                    onNodeClick={onNodeClick}
                />
                {selectedNode && (
                    <div className='overflow-x-clip'>
                        <UpdateNode
                            setEdges={setEdges}
                            initialNodes={nodes}
                            selectedNode={selectedNode}
                            onNodesChange={onNodesChange}
                            setSelectedNode={setSelectedNode}
                            setNodes={setNodes}
                            onPaneClick={onPaneClick}
                        />
                    </div>
                )}
            </section>
        </section>
    );
};

export default GraphMakerPage;
