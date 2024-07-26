import { FiTwitter, FiInstagram } from 'react-icons/fi'
import { FaRegThumbsUp } from 'react-icons/fa'
import { Link } from '@remix-run/react'

const Footer = () => {
  return (
    <div
      // style={{
      //   backgroundImage: "url('/wave.svg')",
      //   backgroundSize: '30px auto',
      //   backgroundPosition: '0% 180%',
      //   backgroundRepeat: 'repeat-x',
      // }}
      className="flex justify-between items-center relative overflow-clip"
    >
      <div
        className="absolute w-full h-full top-[20%] -z-10"
        style={{
          background: 'url(/wave.svg)',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom',
          backgroundSize: '30px 35%',
        }}
      />
      <div className="ml-6 flex flex-col">
        <h1 className="text-xl font-bold">Join the Journey</h1>
        <p className="text-sm">Subscribe to our mailing list.</p>
      </div>

      <div className="flex flex-col items-center pb-6">
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

      <div className="flex flex-col mr-6">
        <h1 className="text-xl font-bold">Become the Journey</h1>
        <p className="text-sm">JOBS.CAREERS@LIFEJOURNEYCRUISES.COM</p>
      </div>
    </div>
  )
}

export default Footer
