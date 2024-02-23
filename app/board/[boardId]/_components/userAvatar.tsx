import Hint from '@/components/Hint'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'

interface UserAvaterProps {
  src?: string
  name?: string
  fallback?: string
  borderColor?: string
}

const UserAvatar = ({ src, name, fallback, borderColor }: UserAvaterProps) => {
  return (
    <Hint label={name || 'Anonymous'} side="bottom" sideOffset={18}>
      <Avatar className="h-8 w-8 border-2" style={{ borderColor }}>
        <AvatarImage src={src} />
        <AvatarFallback className="text-xs font-semibold">
          {fallback}
        </AvatarFallback>
      </Avatar>
    </Hint>
  )
}

export default UserAvatar
