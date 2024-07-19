import { useEffect, useRef, useState } from 'react'

const FlappyCruise = () => {
  const [played, setPlayed] = useState(false)

  const playerRef = useRef()

  // useEffect(() => {
  //   playerRef.current?.addEventListener('ended', () =>
  //     setTimeout(() => playerRef.current?.load(), 2000)
  //   )
  // }, [])

  const handleClick = () => {
    if (!playerRef.current?.playing && !played) {
      playerRef.current?.play()
      setPlayed(true)
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <video
        ref={playerRef}
        onClick={handleClick}
        className="w-1/2 aspect-square"
      >
        <source src="/fc.mp4" />
      </video>
    </div>
  )
}

export default FlappyCruise
