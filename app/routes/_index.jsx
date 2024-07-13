import { motion } from 'framer-motion'

export const meta = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ type: 'spring' }}
          className="text-6xl w-4/5 font-extrabold"
        >
          <img src="/Logo.svg" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </>
  )
}
