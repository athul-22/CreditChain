import React from 'react'
import '../css/Borrow.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
   <div className="scrollable-nav">
        <ul>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}> <li>Home</li></Link>
          <Link to='/borrow' style={{ textDecoration: 'none', color: 'inherit' }}>
            <li>Borrow</li>
          </Link>
          <li>Lend</li>
          <li className="connect-wallet">Connect Wallet</li>
        </ul>
      </div>
  )
}

export default Navbar