import {
    Link,
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "remix"
import type { MetaFunction } from "remix"
import styles from "./tailwind.css"
import olStyles from "ol/ol.css"

export function links() {
    return [
        { rel: "stylesheet", href: styles },
        { rel: "stylesheet", href: olStyles },
    ]
}

export const meta: MetaFunction = () => {
    return { title: "Mauro Bartolomeoli's personal website" }
}

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body className="bg-black text-white">
                <div className="flex m-5 mt-10 text-gray-400 text-lg w-3/4">
                    <div className="p-5 grow hover:text-white">
                        <Link to="/">Mauro Bartolomeoli Personal WebSite</Link>
                    </div>
                    <div className="p-5 text-right hover:text-white">
                        <Link to="/tech">Tech</Link>
                    </div>
                    <div className="p-5 text-right hover:text-white">
                        <Link to="/travel">Travel</Link>
                    </div>
                </div>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === "development" && <LiveReload />}
            </body>
        </html>
    )
}
