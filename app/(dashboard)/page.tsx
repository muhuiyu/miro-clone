'use client'
import { useOrganization } from '@clerk/nextjs'
import BoardList from './_components/BoardList'
import EmptyOrg from './_components/EmptyOrg'

interface DashboardPageProps {
  searchParams: {
    search?: string
    favorites?: string
  }
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization()

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {organization ? (
        <BoardList orgId={organization.id} query={searchParams} />
      ) : (
        <EmptyOrg />
      )}
    </div>
  )
}

export default DashboardPage
