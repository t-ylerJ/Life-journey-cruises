import { useFetcher } from '@remix-run/react'
import { useEffect, useRef, useState } from 'react'
import { PiRobot } from 'react-icons/pi'
import { IoIosClose } from 'react-icons/io'
import { LayoutGroup, motion } from 'framer-motion'

const initial = {
  role: 'assistant',
  content:
    'Hello. I am your robotic AI overlo... I mean, your friendly human assistant. How may I help you today?',
}

const AIssistant = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState()
  const fetcher = useFetcher()

  const formRef = useRef()
  const chatRef = useRef()

  // console.log('fetcher data:', fetcher.data)

  const handleOpen = () => {
    if (!open) setOpen(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMessage = { role: 'user', content: e.target.message.value }
    fetcher.submit([...messages, newMessage], {
      method: 'post',
      encType: 'application/json',
      action: '/aissistant',
    })
    setMessages((prevMessages) => [...prevMessages, newMessage])
    formRef.current.reset()
  }

  useEffect(() => {
    setMessages(fetcher.data ?? [initial])
  }, [fetcher.data])

  useEffect(() => {
    chatRef.current?.scrollTo({ top: 999999, behavior: 'smooth' })
  }, [messages])

  return (
    <motion.div
      layout
      className={`flex flex-col justify-center items-center gap-2 fixed right-4 bottom-4 bg-white p-2 border rounded-2xl shadow-xl ${
        open ? 'max-h-[50%] w-96' : ''
      }`}
      onClick={handleOpen}
    >
      {open ? (
        <>
          <IoIosClose
            className="absolute top-0 right-0 "
            size={48}
            onClick={() => setOpen(false)}
          />
          <div
            ref={chatRef}
            className="flex flex-col gap-2 overflow-y-auto overscroll-contain"
          >
            {messages.map((message, i) => (
              <Message key={i} index={i} message={message} />
            ))}
            {fetcher.state !== 'idle' ? (
              <Message index={0} message="typing" />
            ) : null}
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="w-full">
            <input
              name="message"
              className="form-input rounded-xl"
              placeholder="Enter your question"
            />
          </form>
        </>
      ) : (
        <motion.div className="chat chat-start w-full h-full">
          <motion.div className="chat-bubble text-white flex justify-center bg-secondary p-1 w-full h-full">
            {/* <PiRobot size={48} /> */}
            <motion.svg
              className="w-8 h-8"
              viewBox="0 0 28 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="23" r="2" fill="currentColor" />
              <circle cx="18" cy="23" r="2" fill="currentColor" />
              <path
                d="M4 23V20C4 20 4 16 8 16C8.66667 16 9.33333 16 10 16M4 23H1V29H4M4 23V29M4 29V34H8M24 23V20C24 20 24 16 20 16C19.3333 16 18.6667 16 18 16M24 23H27V29H24M24 23V29M24 29V34H20M8 34V29H12M8 34H12M20 34V29H16M20 34H16M12 29V34M12 29H16M12 34H16M16 29V34M10 16L14 4L18 16M10 16C12.6667 16 15.3333 16 18 16"
                stroke="currentColor"
                strokeWidth="2"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}

const Message = ({ message, index }) => {
  return (
    <div
      className={`chat w-full ${index % 2 === 0 ? 'chat-start' : 'chat-end'}`}
    >
      <div
        className={`chat-bubble flex items-center text-white font-medium ${
          index % 2 === 0 ? 'bg-secondary' : 'bg-primary'
        }`}
      >
        {message === 'typing' ? (
          <span className="loading loading-dots loading-md"></span>
        ) : (
          message.content
        )}
      </div>
    </div>
  )
}

export default AIssistant
