type AviationEdgeAircraft = {
  iataCode: string
  icao24: string
  icaoCode: string
  regNumber: string
}

type AviationEdgeAirline = {
  iataCode: string
  icaoCode: string
}

type AviationEdgeLocation = {
  iataCode: string
  icaoCode: string
}

type AviationEdgeFlightInfo = {
  iataNumber: string
  icaoNumber: string
  number: string
}

type AviationEdgeGeography = {
  altitude: number
  direction: number
  latitude: number
  longitude: number
}

type AviationEdgeSpeed = {
  horizontal: number
  isGround: number
  vspeed: number
}

type AviationEdgeSystemInfo = {
  squawk: null | number
  updated: number
}

type AviationEdgeFlightData = {
  airline: AviationEdgeAirline
  arrival: AviationEdgeLocation
  departure: AviationEdgeLocation
  flight: AviationEdgeLocation
  geography: AviationEdgeGeography
  speed: AviationEdgeSpeed
  status: AviationEdgeSpeed
  system: AviationEdgeSystemInfo
}

type FindRealTimeFlightsByIcaoResponse = {
  departures: Array<AviationEdgeFlightData>
  arrivals: Array<AviationEdgeFlightData>
}
