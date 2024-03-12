import GraphTools from '@/components/GraphTools'

const GraphMakerPage = () => {
    return (
        <section className="container grid h-full w-full grid-cols-12 gap-x-2 p-4">
            <GraphTools />
            <article className="col-span-10 rounded-small border-medium border-primary-50 px-1 py-2 text-center text-2xl text-white blue-dark">
                Graphs
            </article>
        </section>
    )
}
export default GraphMakerPage
