import { promises as fs } from 'fs'
import path from 'path'

import { removeDiacritics } from '~/utils/text'

export async function loadData() {
  const jsonDirectory = path.join(process.cwd(), 'json')
  const airports = await fs.readFile(jsonDirectory + '/airports.json', 'utf8')

  return JSON.parse(airports) as Array<Airport>
}

export async function find(query: string) {
  const cleanedQuery = removeDiacritics(query)
  const airports = await loadData()

  return airports.filter(
    ({ iata, name, city }) =>
      iata?.match(cleanedQuery) ||
      name?.match(cleanedQuery) ||
      city?.match(cleanedQuery)
  )
}
