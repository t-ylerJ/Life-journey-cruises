import { useState } from 'react';
import { Link, Form, useNavigate,} from '@remix-run/react';


const Header = ({ user }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const handleHomeClick = () => {
    setCurrentPage(0);
    navigate('/');
  };

  return (
    <div className="flex justify-between items-center p-4">

      <div className="flex-grow flex items-center justify-between">
        <img className="w-64"
        src="/Logo.svg"
        alt="Logo"
        />
        <nav>
          <Link onClick={handleHomeClick}to="/" className="btn btn-link mx-2">Home</Link>
          <Link to="/about" className="btn btn-link mx-2">About</Link>
          {currentPage > 1 && (
            <Link to="/" className="btn btn-link mx-2">Plan</Link>
          )}
        </nav>
      </div>
      <div className="relative">
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
                className="absolute right-0 mt-2 w-20 bg-white rounded-md shadow-lg py-2 z-50"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                 <Form method='post'>
                   <button>
                    Logout
                  </button>
                  </Form>
                <Link
                  to="/account"

                >
                  Account
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login" className="btn btn-outline mx-2">Login</Link>
            <Link to="/signup" className="btn btn-outline mx-2">Signup</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
