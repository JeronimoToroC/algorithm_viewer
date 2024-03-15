import { Node as ReactFlowNode, Edge as ReactFlowEdge } from 'reactflow';
import { IGraph, IGraphData, INode, NodeType, INodeLinkedTo } from '../types/types';
//TODO: EJORAR HOOK PARA CREACION DE JSON A PARTIR DE GRAFO CREADO A MANO
export const createGraphData = (
    nodes: ReactFlowNode[],
    edges: ReactFlowEdge[],
    graphName: string
): IGraphData => {
    const graph: IGraph = {
        name: graphName,
        nodes: nodes.map((node): INode => {
            //console.log("Marlon hook node", node)
            // Asume que la posición ya está definida en `node.position`
            // y que `node.data` contiene la información que necesitas para `INode`
            const linkedTo: INodeLinkedTo[] = edges
                .filter(edge => edge.source === node.id || edge.target === node.id)
                .map(edge => ({
                    source: parseInt(edge.source),
                    target: parseInt(edge.target),
                    weight: edge.data?.weight || 0,
                }));

            // Ajusta la siguiente línea si la propiedad `type` no es parte de `node.data`.
            const nodeType = node.data.type as NodeType || 'Object';  // Suponiendo que 'Object' es el tipo por defecto.

            return {
                id: parseInt(node.id),
                label: node.data.label as string,
                data: node.data,
                type: nodeType,
                linkedTo: linkedTo,
                radius: node.data.radius as number || 0,
                coordenates: {
                    x: node.position.x,
                    y: node.position.y,
                },
            };
        }),
        isConnected: false, // Necesitarás lógica para determinar esto.
        isComplete: false, // Necesitarás lógica para determinar esto.
        isWeighted: edges.some(edge => edge.data && 'weight' in edge.data), // Asumiendo que 'weight' indica si es ponderado.
        isDirected: true, // Asume que el gráfico es dirigido por defecto o ajusta según sea necesario.
    };

    const graphData: IGraphData = {
        graphs: [graph]
    };

    return graphData;
};