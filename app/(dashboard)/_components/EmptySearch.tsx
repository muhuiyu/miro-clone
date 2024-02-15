import Image from 'next/image'

const EmptySearch = ({ queryString }: { queryString: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image src="/empty-search.svg" height={140} width={140} alt="empty" />
      <h2 className="text-2xl font-semibold mt-6">
        No boards found for <strong>{queryString}</strong>
      </h2>
      <p className="text-muted-background text-sm mt-2 text-gray-400">
        try search for something else
      </p>
    </div>
  )
}

export default EmptySearch
