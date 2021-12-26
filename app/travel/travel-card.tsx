import React from "react"
import type { Location } from "./locations"
import { format, parseISO } from "date-fns"

type TravelCardProps = {
    location: Location
    token: string
}

const size = 200

const TravelCard: React.FC<TravelCardProps> = ({ location, token }) => {
    return (
        <div className="bg-white text-black rounded-md p-3">
            <div>{location.name}</div>
            <div>{format(parseISO(location.timestamp), "dd-MM-yyyy")}</div>
            <img
                width={size}
                height={size}
                src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${location.lon},${location.lat},15/${size}x${size}?access_token=${token}`}
            />
        </div>
    )
}

export default TravelCard
