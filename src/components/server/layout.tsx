import { PropsWithChildren } from 'react'

import SearchBar from '../client/search-bar'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="h-full min-h-full md:mx-auto container flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center flex-col">
      <div className="w-full flex-1 flex flex-col">
        <div className="h-full w-full flex items-center flex-col gap-1 mt-10">
          <SearchBar />
          <div className="w-full mt-10">{children}</div>
        </div>
      </div>
    </div>
  )
}
