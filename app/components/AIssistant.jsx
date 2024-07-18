import { useFetcher } from '@remix-run/react'
import { useEffect, useRef, useState } from 'react'
import { PiRobot } from 'react-icons/pi'
import { IoIosClose } from 'react-icons/io'
import { motion } from 'framer-motion'

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
        <motion.div layout className="chat chat-start">
          <div className="chat-bubble text-white flex justify-center bg-neutral-600 p-1">
            <PiRobot size={48} />
          </div>
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
        className={`chat-bubble flex items-center text-white ${
          index % 2 === 0 ? 'bg-neutral-600' : 'bg-neutral-400'
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
