import Image from 'next/image'

export default function Home() {
  return (
    <div className="px-4 w-full flex flex-col justify-center items-center">
      <Image
        src="/airport.svg"
        alt="Airport"
        width={500}
        height={200}
        priority
      />
      <div className="text-4xl font-semibold text-zinc-600 text-center mt-5">
        Flights Around The World
      </div>
      <div className="badge badge-primary badge-lg mt-2">
        live departures & arrivals
      </div>
    </div>
  )
}
