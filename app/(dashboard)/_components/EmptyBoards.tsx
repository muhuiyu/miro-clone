import { Button } from '@/components/ui/button'
import Image from 'next/image'

const EmptyBoards = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image src="/note.svg" height={140} width={140} alt="empty" />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-background text-sm mt-2 text-gray-400">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button size="lg">Create board</Button>
      </div>
    </div>
  )
}

export default EmptyBoards
