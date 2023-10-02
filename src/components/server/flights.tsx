import { IconPlaneArrival, IconPlaneDeparture } from '@tabler/icons-react'
import Link from 'next/link'

type FlightsProps = {
  data: Array<Flight>
}

export function Flights({ data }: FlightsProps) {
  return (
    <table className="table z-10">
      <thead>
        <tr>
          <th></th>
          <th>Direction</th>
          <th>Country</th>
          <th>City</th>
          <th>Airport</th>
        </tr>
      </thead>
      <tbody>
        {data.map((flight, index) => (
          <tr key={index}>
            <th>{index + 1}</th>
            <td>
              {flight.type === 'departure' ? (
                <div className="flex gap-2">
                  Arriving from
                  <IconPlaneArrival color="green" />
                </div>
              ) : (
                <div className="flex gap-2">
                  Departing to
                  <IconPlaneDeparture color="blue" />
                </div>
              )}
            </td>
            <td>{flight.data.country}</td>
            <td>{flight.data.city}</td>
            <td>
              <Link href={`${flight.data.icao}`} className="link link-primary">
                {flight.data.iata} - {flight.data.name}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
