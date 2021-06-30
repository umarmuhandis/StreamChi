import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <header className="header border-bottom">
      <nav className="nav py-3 navbar navbar-expand-lg d-flex justify-content-between">
        <Link
          className="text-dark text-decoration-none navbar-brand"
          to="/streams"
        >
          StreamChi
        </Link>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              className="nav-link active text-secondary"
              aria-current="page"
              to="/streams"
            >
              All Streams
            </Link>
          </li>
          <li className="nav-item">
            <GoogleAuth />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
