/* eslint-disable no-unused-vars */
import { useState } from 'react';

import { Link, Form, useNavigate, useLocation } from '@remix-run/react';

const SubHeader = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const pages = [
    { name: 'Voyage', path: '/voyages/:voyage' },
    { name: 'Plan', path: '/voyages/:voyage/plan' },
    { name: 'Book', path: '/voyages/:voyage/book' },
    { name: 'Checkout', path: '/voyages/checkout' }
  ];

  const getCurrentPageIndex = () => {
    return pages.findIndex(page => location.pathname.startsWith(page.path.replace(':voyage', '')));
  };

  const currentPageIndex = getCurrentPageIndex();


  const handleBack = () => {
    if (currentPageIndex > 0) {
      navigate(pages[currentPageIndex - 1].path.replace(':voyage', 'alaska'));
    }
  };

  const handleForward = () => {
    if (currentPageIndex < pages.length - 1) {
      navigate(pages[currentPageIndex + 1].path.replace(':voyage', 'alaska'));
    }
  };

  const getPath = (index) => {
    const path = pages[index].path;
    if (path.includes(':voyage')) {
      return path.replace(':voyage', 'alaska'); // replace later
    }
    return path;
  };
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <div>
        {currentPageIndex > 0 && (
          <Link
            to={pages[currentPageIndex - 1].path.replace(':voyage', 'alaska')}
            className="btn btn-outline mr-2"
          >
            {pages[currentPageIndex - 1].name}
          </Link>
        )}
        <span className="mx-2">{pages[currentPageIndex]?.name || 'Page'}</span>
        {currentPageIndex < pages.length - 1 && (
          <Link
            to={pages[currentPageIndex + 1].path.replace(':voyage', 'alaska')}
            className="btn btn-outline ml-2"
          >
            {pages[currentPageIndex + 1].name}
          </Link>
        )}
      </div>

      </div>

    </div>
  )
}

export default SubHeader;