import { useState } from 'react';
import { Link } from '@remix-run/react';

const Header = ({ isLoggedIn }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { name: 'Landing', path: '/landing' },
    { name: 'Voyages', path: '/voyages' },
    { name: 'Start Planning', path: '/start-planning' },
    { name: 'Book', path: '/book' },
    { name: 'Payment', path: '/payment' }
  ];

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleForward = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-accent flex justify-between items-center p-4">
      <div className="flex items-center">
        {currentPage > 0 && (
          <button
            onClick={handleBack}
            className="mr-2 hover:bg-gray-200 px-4 py-2 rounded"
          >
            {pages[currentPage - 1].name}
          </button>
        )}
        <span className="mx-2">{pages[currentPage].name}</span>
        {currentPage < pages.length - 1 && (
          <button
            onClick={handleForward}
            className="ml-2 hover:bg-gray-200 px-4 py-2 rounded"
          >
            {pages[currentPage + 1].name}
          </button>
        )}
      </div>
      <div className="flex-grow flex justify-center">
        <nav>
          <Link to="/" className="mx-2 hover:text-gray-700">Home</Link>
          <Link to="/about" className="mx-2 hover:text-gray-700">About</Link>
        </nav>
      </div>
      <div>
        {isLoggedIn ? (
          <button onClick={() => alert('Logging out...')} className="hover:bg-gray-200 px-4 py-2 rounded">
            Logout
          </button>
        ) : (
          <Link to="/login" className="mx-2 hover:bg-gray-200 px-4 py-2 rounded">
            Login/Signup
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
