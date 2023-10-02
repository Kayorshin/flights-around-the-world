'use client'

import { IconAirTrafficControl } from '@tabler/icons-react'
import Link from 'next/link'
import { useRef, useState } from 'react'

export default function SearchBar() {
  const existingAbortController = useRef<AbortController>()

  const [airports, setAirports] = useState<Array<Airport>>([])

  const input = useRef<HTMLInputElement>(null)

  const handleInputChange = async () => {
    const query = input.current?.value

    if (query && query.length >= 3) {
      existingAbortController.current?.abort()

      const abortController = new AbortController()
      existingAbortController.current = abortController

      try {
        const response = await fetch(`/api/v1/airports?query=${query}`, {
          signal: abortController?.signal,
        })
        setAirports(await response.json())
      } catch {
        setAirports([])
      }
    } else {
      setAirports([])
    }
  }

  const handleLinkClicked = (text: string) => {
    if (input.current) input.current.value = text
  }

  return (
    <div className="dropdown w-full flex justify-center px-4 z-20">
      <div className="relative w-full max-w-lg">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <div className="p-1 focus:outline-none focus:shadow-outline">
            <IconAirTrafficControl className="text-gray-500" />
          </div>
        </span>

        <input
          ref={input}
          type="search"
          onChange={handleInputChange}
          placeholder="Type here a city or airport..."
          className="input w-full bg-neutral-100 focus:outline-none py-2 pl-12 sm:text-lg"
        />
        <div className="dropdown-content bg-base-200 top-14 max-h-96 overflow-auto flex-col rounded-md w-full">
          {!!airports.length && (
            <ul className="menu menu-compact w-full" tabIndex={0}>
              {airports.map((item) => (
                <Link
                  className="border-b border-b-base-content/10 w-full text-lg cursor-pointer py-2 px-4"
                  href={`/${item.icao}`}
                  key={item.icao}
                  onClick={() =>
                    handleLinkClicked(
                      `${item.iata} - ${item.name} - ${item.city}`
                    )
                  }
                >
                  {item.iata} - {item.name} - {item.city}
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
