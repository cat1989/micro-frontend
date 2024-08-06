import * as React from 'react'
import { createRoot, Root } from 'react-dom/client'
import routes from '@/router/routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let instance: Root | null = null

export function bootstrap() {

}

export function mount({
    container,
    base,
}: {
    container: HTMLElement;
    base: string;
}) {
    const router = createBrowserRouter(routes, {
        basename: base,
    })
    const Router: React.FC = () => {
        return (
            <RouterProvider
                router={router}
            ></RouterProvider>
        )
    }
    instance = createRoot(container)
    instance.render(
        <React.StrictMode>
            <Router />
        </React.StrictMode>
    )
}

export function unmount() {
    instance?.unmount()
}
