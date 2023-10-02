import { Flights } from '~/components/server/flights'
import { findRealTimeByIcao } from '~/services/flights'

type DynamicPageProps = {
  params: { icao: string }
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const flights = await findRealTimeByIcao(params.icao)

  return (
    <>
      <div className="text-lg font-semibold text-zinc-600 text-center">
        {flights.location.iata} - {flights.location.name} -{' '}
        {flights.location.city}
      </div>
      <div className="overflow-x-auto mt-10 pb-10">
        <Flights data={flights.data} />
      </div>
    </>
  )
}
