import Layout from './layouts/Layout'
import Home from './views/Home'
import GraphMakerPage from './views/GraphMakerPage'
import { Route, Routes } from 'react-router-dom'

function App(): JSX.Element {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/graph-maker" element={<GraphMakerPage />} />
            </Routes>
        </Layout>
    )
}
export default App
