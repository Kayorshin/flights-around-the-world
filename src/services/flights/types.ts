type Flight = {
  type: 'departure' | 'arrival'
  data: Airport
}

type FindRealTimeByIcaoResponse = {
  location: Airport
  data: Array<Flight>
}
