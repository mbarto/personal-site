import { useLoaderData } from "remix"

import type { Location } from "~/travel/locations"
import locations from "~/travel/locations"
import TravelCard from "~/travel/travel-card"

type Data = {
    locations: Location[]
    token: string
}

export function loader(): Data {
    return {
        locations,
        token: process.env.MAPBOX_ACCESS_TOKEN ?? "",
    }
}

export default function Index() {
    const { locations, token } = useLoaderData<Data>()
    return (
        <div className="m-10 flex">
            {locations.map((l, idx) => (
                <TravelCard key={idx} location={l} token={token} />
            ))}
        </div>
    )
}
