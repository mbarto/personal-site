import { LoaderFunction } from "remix"
import locations from "~/travel/locations"

const mapBoxUrl = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static"
const size = 200
export const zoom = 15

export const loader: LoaderFunction = async ({ params }) => {
    const location = locations.find((l) => l.id === params.id)
    const token = process.env.MAPBOX_ACCESS_TOKEN ?? ""
    if (location) {
        const url = `${mapBoxUrl}/${location.lon},${location.lat},${zoom}/${size}x${size}?access_token=${token}`
        try {
            const imageRes = await fetch(url)
            const image = await imageRes.arrayBuffer()
            return new Response(image, {
                status: 200,
                headers: {
                    "Content-Type": "image/png",
                },
            })
        } catch (e) {
            return new Response(`Error: ${e}`, {
                status: 500,
                headers: {
                    "Content-Type": "text/plain",
                },
            })
        }
    }
    return new Response(`${params.id} not found`, {
        status: 404,
        headers: {
            "Content-Type": "text/plain",
        },
    })
}
