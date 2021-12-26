import React from "react"
import type { Location } from "./locations"
import { format, parseISO } from "date-fns"

type TravelCardProps = {
    location: Location
}

const size = 200

const TravelCard: React.FC<TravelCardProps> = ({ location }) => {
    return (
        <div className="bg-white text-black rounded-md p-3">
            <div>{location.name}</div>
            <div>{format(parseISO(location.timestamp), "dd-MM-yyyy")}</div>
            <img
                width={size}
                height={size}
                src={`/travel/cards/${location.id}/map`}
            />
        </div>
    )
}

export default TravelCard
