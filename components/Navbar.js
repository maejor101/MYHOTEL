import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    
      <nav className='navbar'>
        <h1>Admin dashboard</h1>
         <div className='links'>
            <Link to='/' style={{
                color: "rgb(77, 77, 77)",
            }}>All hotels</Link>
            <Link to='/create' style={{
                color: "rgb(77, 77, 77)",
                borderRadius: "8px",
            }}>New hotels</Link>

            

         </div>
      </nav>
    
  )
}

export default Navbar;
