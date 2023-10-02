import { logger } from '~/services/logger'

import { API_KEY, API_URL } from './constants'

async function findRealTimeDeparturesByIcao(icao: string) {
  try {
    const response = await fetch(
      `${API_URL}/v2/flights?key=${API_KEY}&depIcao=${icao}&status=en-route`,
      {
        cache: 'no-cache',
      }
    )

    const departures = await response.json()
    if (departures.error) throw new Error(departures.error)

    return departures
  } catch (error) {
    logger.error(
      error,
      'An unexpected error occurred while processing the request'
    )
    return []
  }
}

async function findRealTimeArrivalsByIcao(icao: string): Promise<any> {
  try {
    const response = await fetch(
      `${API_URL}/v2/flights?key=${API_KEY}&arrIcao=${icao}&status=en-route`,
      {
        cache: 'no-cache',
      }
    )

    const arrivals = await response.json()
    if (arrivals.error) throw new Error(arrivals.error)

    return arrivals
  } catch (error) {
    logger.error(
      error,
      'An unexpected error occurred while processing the request'
    )
    return []
  }
}

export async function findRealTimeFlightsByIcao(
  icao: string
): Promise<FindRealTimeFlightsByIcaoResponse> {
  const [departures, arrivals] = await Promise.all([
    findRealTimeDeparturesByIcao(icao),
    findRealTimeArrivalsByIcao(icao),
  ])

  return { departures, arrivals }
}
