import { FiTwitter, FiInstagram } from 'react-icons/fi'
import { FaRegThumbsUp } from 'react-icons/fa'
import { Link } from '@remix-run/react'

const Footer = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-white border-b-4 border-blue-500">
      <div className="text-left flex-1">
        <h1 className="text-xl font-bold">Join the Journey</h1>
        <p className="text-sm">Subscribe to our mailing list.</p>
      </div>

      <div className="text-center flex-1">
        <h1 className="text-xl font-bold">Follow the Journey</h1>
        <p className="text-sm">
          <Link to="/flappycruise">#JourneyCruises</Link>
        </p>
        <div className="flex justify-center items-center space-x-4 mt-2">
          <FiTwitter className="text-2xl" />
          <FiInstagram className="text-2xl" />
          <FaRegThumbsUp className="text-2xl" />
        </div>
      </div>

      <div className="text-right flex-1">
        <h1 className="text-xl font-bold">Become the Journey</h1>
        <p className="text-sm">JOBS.CAREERS@LIFEJOURNEYCRUISES.COM</p>
      </div>
    </div>
  )
}

export default Footer
