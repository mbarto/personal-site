import { useLoaderData } from "remix"

import type { Location } from "~/travel/locations"
import locations from "~/travel/locations"
import TravelCard from "~/travel/travel-card"

export function loader(): Location[] {
    return locations
}

export default function Index() {
    const locations = useLoaderData<Location[]>()
    return (
        <div className="m-10 flex">
            {locations.map((l, idx) => (
                <TravelCard key={idx} location={l} />
            ))}
        </div>
    )
}
