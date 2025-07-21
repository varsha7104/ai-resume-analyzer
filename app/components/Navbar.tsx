import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/">
        <p className='text-2xl font-bold text-gradient'>Resumind</p>
      </Link>
 <Link to="/upload" className="primary-button w-fit">
  Upload Resume
</Link>

    </div>
  )
}

export default Navbar