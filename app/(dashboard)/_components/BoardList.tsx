'use client'

import _ from 'lodash'
import EmptyBoards from './EmptyBoards'
import EmptyFavorites from './EmptyFavorite'
import EmptySearch from './EmptySearch'

interface BoardListProps {
  orgId: string
  query: {
    search?: string
    favorites?: string
  }
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [] // TODO: fetch data from the server

  if (_.isEmpty(data.length) && query.search) {
    return <EmptySearch queryString={query.search} />
  }

  if (_.isEmpty(data.length) && query.favorites) {
    return <EmptyFavorites />
  }

  if (_.isEmpty(data.length)) {
    return <EmptyBoards />
  }

  return <div>{JSON.stringify(query)}</div>
}

export default BoardList
