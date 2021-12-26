export type Location = {
    id: string
    name: string
    timestamp: string
    lat: number
    lon: number
}

const locations: Location[] = [
    {
        id: "rifugio_scarfiotti",
        name: "Rifugio Scarfiotti",
        timestamp: "2021-08-15T09:00:00Z",
        lat: 45.132222,
        lon: 6.801667,
    },
]

export default locations
