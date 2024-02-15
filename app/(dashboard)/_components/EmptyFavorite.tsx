import Image from 'next/image'

const EmptyFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image src="/empty-favorites.svg" height={140} width={140} alt="empty" />
      <h2 className="text-2xl font-semibold mt-6">No favorite boards found</h2>
      <p className="text-muted-background text-sm mt-2 text-gray-400">
        Try favoriting a board to keep it at the top of your list
      </p>
    </div>
  )
}

export default EmptyFavorites
