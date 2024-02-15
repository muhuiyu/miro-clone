'use client'

import { useOrganizationList } from '@clerk/nextjs'
import Item from './Item'

const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  })

  if (!userMemberships) {
    return null
  }

  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((membership) => (
        <Item
          key={membership.organization.id}
          id={membership.organization.id}
          name={membership.organization.name}
          imageUrl={membership.organization.imageUrl}
        />
      ))}
    </ul>
  )
}

export default List