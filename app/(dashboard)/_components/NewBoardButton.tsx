'use client'

import { api } from '@/convex/_generated/api'
import { useApiMutation } from '@/hooks/useApiMutation'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { toast } from 'sonner'

interface Props {
  orgId: string
  disabled?: boolean
}
const NewBoardButton = ({ orgId, disabled }: Props) => {
  const { mutate, pending } = useApiMutation(api.board.create)

  const onClick = () => {
    mutate({
      title: 'Untitled',
      orgId,
    })
      .then((id) => {
        toast.success('Board created')
        // TODO: redirect to the /board/{id}
      })
      .catch(() => toast.error('Failed to create board'))
  }

  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        'col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6',
        (pending || disabled) && 'cursor-not-allowed opacity-75'
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-xs text-white font-light">New board</p>
    </button>
  )
}

export default NewBoardButton
