import Header from './Header'
// import Home from '../../views/Home'
interface ILayout {
    children: React.ReactNode
    pageTitle?: string
}
const Layout = ({ children }: ILayout) => {
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <main className="h-full w-full">{children}</main>
        </div>
    )
}
export default Layout
