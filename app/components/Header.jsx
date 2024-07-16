/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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
            className="btn btn-outline mr-2"
          >
            {pages[currentPage - 1].name}
          </button>
        )}
        <span className="mx-2">{pages[currentPage].name}</span>
        {currentPage < pages.length - 1 && (
          <button
            onClick={handleForward}
            className="btn btn-outline ml-2"
          >
            {pages[currentPage + 1].name}
          </button>
        )}
      </div>
      <div className="flex-grow flex justify-center">
        <nav>
          <Link to="/" className="btn btn-link mx-2">Home</Link>
          <Link to="/about" className="btn btn-link mx-2">About</Link>
        </nav>
      </div>
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
