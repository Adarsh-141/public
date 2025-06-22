import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ watchLaterCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger px-4">
      <Link className="navbar-brand" to="/">MiniYouTube</Link>
      <input
        className="form-control mx-3 w-50"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <Link to="/watch-later" className="btn btn-light">
        Watch Later ({watchLaterCount})
      </Link>
    </nav>
  );
};

export default Navbar;
