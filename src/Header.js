import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <div className="logo">
        <Link to="/">
          Fine Coffee <span role="img" aria-label="Coffee">☕</span>
        </Link>
      </div>
      <ul className="menu">
        <li><Link to="/blog">Blog</Link></li>
        <li><a href="tel:">Call Us</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;