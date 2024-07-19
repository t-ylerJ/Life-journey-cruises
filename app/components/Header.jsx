import { useState } from 'react';
import { Link, Form, useNavigate } from '@remix-run/react';

const Header = ({ user }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleHomeClick = () => {
    setCurrentPage(0);
    navigate('/');
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white">
      <img className="w-64" src="/Logo.svg" alt="Logo" />

      <nav className="flex-1 flex justify-center space-x-12">
        <Link
          onClick={handleHomeClick}
          to="/"
          className="text-lg pr-20 font-semibold text-black no-underline"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-lg pl-20 pr-40 font-semibold text-black no-underline"
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
              className="p-2 w-12 h-12 cursor-pointer"
              onMouseEnter={() => setDropdownOpen(true)}
            />
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-20 bg-secondary rounded-md shadow-lg py-2 z-50"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Form method='post'>
                  <button>
                    Logout
                  </button>
                </Form>
                <Link to="/account">Account</Link>
              </div>
            )}
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login" className="btn bg-secondary text-white">Login</Link>
            <Link to="/signup" className="btn bg-secondary text-white">Signup</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
