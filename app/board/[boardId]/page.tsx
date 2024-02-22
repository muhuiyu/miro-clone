import { Room } from '@/components/Room'
import { Loading } from './_components/Loading'
import { Canvas } from './_components/canvas'

interface BoardIdPageProps {
  params: {
    boardId: string
  }
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  )
}

export default BoardIdPage
