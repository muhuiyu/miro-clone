'use client'

import { useOthersConnectionIds } from '@/liveblocks.config'
import { memo } from 'react'
import Cursor from './Cursor'

const Cursors = () => {
  const ids = useOthersConnectionIds()

  return (
    <>
      {ids.map((connectionId) => (
        <Cursor key={connectionId} connectionId={connectionId} />
      ))}
    </>
  )
}

const CursorsPresence = memo(() => {
  return (
    <>
      {/* TODO: Draft pencel */}
      <Cursors />
    </>
  )
})

CursorsPresence.displayName = 'CursorsPresence'

export default CursorsPresence
