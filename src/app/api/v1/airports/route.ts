import { type NextRequest, NextResponse } from 'next/server'

import { find as findAirports } from '~/services/airports'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')

  if (!query)
    return NextResponse.json(
      { error: 'The query parameter is required' },
      { status: 400 }
    )

  const results = await findAirports(query)

  return NextResponse.json(results)
}
