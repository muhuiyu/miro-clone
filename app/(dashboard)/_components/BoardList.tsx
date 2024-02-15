'use client'

interface BoardListProps {
  orgId: string
  query: {
    search?: string
    favorites?: string
  }
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [] // TODO: fetch data from the server

  if (!data.length && query.search) {
    // user searched for something but no results were found
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-2xl text-gray-400">
          No boards found for <strong>{query.search}</strong>, try search for
          something else
        </p>
      </div>
    )
  }

  if (!data.length && query.favorites) {
    // user has no favorites
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-2xl text-gray-400">
          No favorite boards found, try adding some
        </p>
      </div>
    )
  }

  if (!data.length) {
    // user has no boards
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-2xl text-gray-400">
          No boards found, try creating one
        </p>
      </div>
    )
  }

  return <div>{JSON.stringify(query)}</div>
}

export default BoardList
