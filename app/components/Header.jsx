import { useState } from 'react'
import { Link, Form, useNavigate } from '@remix-run/react'

const Header = ({ user }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleHomeClick = () => {
    setCurrentPage(0)
    navigate('/')
  }

  return (
    <div
      // style={{ backgroundImage: "url('/HeaderBG.svg')" }}

      className="flex justify-between items-center px-4 py-2 relative"
    >
      <div className="relative">
        <img src="/LogoTop.svg" style={{ width: '220px' }} />
        <img
          className="absolute top-0 left-0 z-30"
          src="/LogoBottom.svg"
          style={{ width: '220px' }}
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background: 'url(/wave.svg)',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom',
          backgroundSize: '30px 65%',
        }}
      />
      <nav className="flex-1 flex justify-center space-x-12 z-30 relative top-1/4 text-white">
        <Link
          onClick={handleHomeClick}
          to="/"
          className="text-lg pr-20 font-semibold no-underline hover:underline"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-lg pl-20 pr-40 font-semibold  no-underline hover:underline"
        >
          About
        </Link>
        {currentPage > 1 && (
          <Link
            to="/"
            className="text-lg font-semibold text-black no-underline"
          >
            Plan
          </Link>
        )}
      </nav>

      <div className="relative flex items-center">
        {user ? (
          <div className="relative">
            <img
              src="/avatar.svg"
              alt="Avatar"
              className="w-12 h-12 cursor-pointer"
              onMouseEnter={() => setDropdownOpen(true)}
            />
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-20 bg-white rounded-md shadow-lg z-50 divide-y divide-y-black overflow-hidden flex flex-col"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Form method="post">
                  <button className="b-2 hover:bg-gray-200 p-3">Logout</button>
                </Form>
                <Link to="/account" className="b-2 hover:bg-gray-200 p-3">
                  Account
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login" className="btn btn-secondary">
              Login
            </Link>
            <Link to="/signup" className="btn btn-secondary">
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
