import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../styles/App.css'
import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <NextUIProvider>
            <React.Fragment>
                <main className="min-w-screen m-0 min-h-screen bg-background p-0 text-foreground blue-dark">
                    <App />
                </main>
            </React.Fragment>
        </NextUIProvider>
    </React.StrictMode>
)
