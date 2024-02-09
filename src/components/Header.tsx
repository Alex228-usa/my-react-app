import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
