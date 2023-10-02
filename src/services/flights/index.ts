import { loadData } from '../airports'
import { findRealTimeFlightsByIcao } from '../external/aviation-edge'

export async function findRealTimeByIcao(
  icao: string
): Promise<FindRealTimeByIcaoResponse> {
  const airports = await loadData()
  const { departures, arrivals } = await findRealTimeFlightsByIcao(icao)

  const location = airports.find((airport) => airport.icao === icao)!

  const parsedArrivals: Array<Flight> = arrivals.map((arrival) => {
    const match = airports.find(
      (airport) => airport.icao === arrival.departure.icaoCode
    )!
    return {
      type: 'departure',
      data: match,
    }
  })

  const parsedDepartures: Array<Flight> = departures.map((departure) => {
    const match = airports.find(
      (airport) => airport.icao === departure.arrival.icaoCode
    )!
    return {
      type: 'arrival',
      data: match,
    }
  })

  return {
    location,
    data: [...parsedArrivals, ...parsedDepartures].filter(({ data }) => data),
  }
}
