import Image from 'next/image'

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src="/mikan-logo.svg"
        alt="Logo"
        height={120}
        width={120}
        className="animate-pulse duration-700"
      />
    </div>
  )
}
