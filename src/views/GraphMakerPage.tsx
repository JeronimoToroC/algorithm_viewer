import GraphTools from '@/components/GraphTools'
import UpdateGraph from '@/components/UpdateGraph';
import 'reactflow/dist/style.css';

const GraphMakerPage = () => {
    return (
        <section className="container grid h-full w-full grid-cols-12 gap-x-2 p-4">
            <GraphTools />
            <section className="col-span-10 rounded-small border-medium border-primary-50 px-1 py-2 text-center text-2xl text-white blue-dark">
                <UpdateGraph
                    initialNodes={[
                        { id: '1', data: { value: 0, label: 'Node 1' }, position: { x: 100, y: 100 } },
                        { id: '2', data: { value: 1, label: 'Node 2' }, position: { x: 100, y: 200 } },
                    ]}
                    initialEdges={[{ id: 'e1-2', source: '1', target: '2' }]}
                    selectedNode={{ id: '2', data: { label: 'Node 2', value: 0 }, position: { x: 100, y: 200 } }}
                />

            </section>
        </section>
    )
}
export default GraphMakerPage
