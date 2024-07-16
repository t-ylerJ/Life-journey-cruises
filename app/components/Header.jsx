import { useState } from 'react';
import { Link } from '@remix-run/react';

const Header = ({ isLoggedIn }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { name: 'Voyage', path: '/voyages/:voyage' },
    { name: 'Plan', path: '/voyages/:voyage/plan' },
    { name: 'Book', path: '/voyages/:voyage/book' },
    { name: 'Checkout', path: '/voyages/checkout' }
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

  const getPath = (index) => {
    const path = pages[index].path;
    if (path.includes(':voyage')) {
      return path.replace(':voyage', 'alaska'); // replace later
    }
    return path;
  };
  const handleHomeClick = () => {
    setCurrentPage(0);
    navigate('/');
  };

  return (
    <div className="bg-accent flex justify-between items-center p-4">
      <div className="flex items-center">
        {currentPage > 0 && (
          <Link
            to={getPath(currentPage - 1)}
            className="btn btn-outline mr-2"
            onClick={handleBack}
          >
            {pages[currentPage - 1].name}
          </Link>
        )}


      </div>
      <div className="flex-grow flex justify-center">
        <nav>
          <Link onClick={handleHomeClick}to="/" className="btn btn-link mx-2">Home</Link>
          <Link to="/about" className="btn btn-link mx-2">About</Link>
          {currentPage > 1 && (
            <Link to={getPath(1)} className="btn btn-link mx-2">Plan</Link>
          )}
        </nav>
      </div>
      {currentPage < pages.length - 1 && (
          <Link
            to={getPath(currentPage + 1)}
            className="btn btn-outline ml-2"
            onClick={handleForward}
          >
            {pages[currentPage + 1].name}
          </Link>
        )}
      <div>
        {isLoggedIn ? (
          <button onClick={() => alert('Logging out...')} className="btn btn-outline">
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn btn-outline mx-2">
            Login/Signup
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
