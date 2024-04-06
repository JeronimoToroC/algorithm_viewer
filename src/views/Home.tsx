import { ReactFlow } from 'reactflow'

const Home = () => {
    // Ejemplo de nodos
    const nodes = [
        {
            id: '1',
            type: 'input',
            data: { label: 'Nodo 1' },
            position: { x: 250, y: 5 },
        },
        { id: '2', data: { label: 'Nodo 2' }, position: { x: 100, y: 100 } },
        { id: '3', data: { label: 'Nodo 3' }, position: { x: 400, y: 100 } },
        {
            id: '4',
            type: 'output',
            data: { label: 'Nodo 4' },
            position: { x: 250, y: 200 },
        },
    ]

    // Ejemplo de aristas (edges)
    const edges = [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3', animated: false },
        { id: 'e3-4', source: '3', target: '4', animated: true },
        { id: 'e1-3', source: '1', target: '3', animated: false },
    ]
    return (
        <section className="container grid h-full w-full  grid-cols-2 p-2">
            <div className="col-start-1 m-2 gap-4 p-2">
                <h2 className="text-left font-sans text-3xl font-bold uppercase text-blue-600">
                    Algoritm Viewer
                </h2>
                <p className="m-2 text-wrap rounded-md p-4 font-mono capitalize shadow-md shadow-gray-600">
                    Algoritm Viewer is a web application designed to facilitate
                    the understanding and analysis of graph theory, providing an
                    interactive platform for both students and professionals.
                    Through Algoritm Viewer, you can experiment with graphs in
                    an intuitive way, exploring from basic concepts to complex
                    optimization problems.
                </p>
                <h2 className="text-left font-sans text-3xl font-bold uppercase text-blue-600">
                    Main Features:
                </h2>
                <ul className="m-2 list-disc text-clip rounded-md pl-8 font-mono shadow-md shadow-gray-600">
                    <li>
                        Now this is a story all about how, my life got
                        flipped-turned upside down
                    </li>
                    <li>
                        Graph Creation: Customize your study with manually
                        created or randomly generated graphs.
                    </li>
                    <li>
                        Interactive Visualization: View your graphs in different
                        representations, improving your understanding of their
                        properties.
                    </li>
                    <li>
                        Import/Export: Share and extend your work by importing
                        or exporting graphs in various formats.
                    </li>
                    <li>
                        Advanced Analysis: Explore complex algorithms with tools
                        designed to deepen your research and study.
                    </li>
                </ul>
            </div>
            <div className="col-start-2 gap-2">
                <div className="m-2 gap-2 p-2">
                    <h2 className="text-left font-sans text-3xl font-bold uppercase text-blue-600">
                        How to use Algoritm Viewer:
                    </h2>
                    <ul className="m-2 list-decimal text-clip rounded-md pl-8 font-mono shadow-md shadow-gray-600">
                        <li>
                            Create a Custom Graph: Step-by-step instructions for
                            creating your own graph, specifying nodes and edges.
                        </li>
                        <li>
                            Generate a Random Graph: Guide to using the random
                            generation functionality, including parameter
                            selection. Importing and Exporting Graphs: Process
                            for importing graphs from files and exporting your
                            work in different formats.
                        </li>
                        <li>
                            Graph Visualization: Tips for exploring the various
                            visualizations available and how to interpret them.
                        </li>
                    </ul>
                </div>
                <div style={{ height: 400 }}>
                    <ReactFlow nodes={nodes} edges={edges}></ReactFlow>
                </div>
            </div>
        </section>
    )
}
export default Home
