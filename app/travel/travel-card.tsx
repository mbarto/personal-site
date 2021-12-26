import React, { createRef, useEffect } from "react"
import type { Location } from "./locations"
import { format, parseISO } from "date-fns"

import { zoom } from "~/routes/travel/cards/$id/map"

type TravelCardProps = {
    location: Location
}

const size = 200

const TravelCard: React.FC<TravelCardProps> = ({ location }) => {
    const mapContainer = createRef<HTMLDivElement>()
    const mapId = `${location.id}-map`
    useEffect(() => {
        if (mapContainer.current) {
            Promise.all([
                import("ol/Map"),
                import("ol/View"),
                import("ol/layer/Tile"),
                import("ol/source/OSM"),
                import("ol/proj"),
            ]).then(([Map, View, TileLayer, OSM, proj]) => {
                const img = document.getElementById(mapId)?.querySelector("img")
                if (img) {
                    img.style.display = "none"
                }

                const openStreetsLayer = new TileLayer.default({
                    source: new OSM.default(),
                })

                new Map.default({
                    layers: [openStreetsLayer],
                    target: mapId,
                    view: new View.default({
                        maxZoom: 18,
                        center: proj.fromLonLat([location.lon, location.lat]),
                        zoom: zoom,
                    }),
                })
            })
        }
    }, [])
    return (
        <div className="bg-white text-black rounded-md p-3">
            <div>{location.name}</div>
            <div>{format(parseISO(location.timestamp), "dd-MM-yyyy")}</div>
            <div
                id={mapId}
                ref={mapContainer}
                style={{ width: size, height: size }}
            >
                <img
                    width={size}
                    height={size}
                    src={`/travel/cards/${location.id}/map`}
                />
            </div>
        </div>
    )
}

export default TravelCard
