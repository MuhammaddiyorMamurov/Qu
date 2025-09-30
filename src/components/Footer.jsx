import React from 'react'
import { BsFacebook, BsTwitterX, BsYoutube } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
  <div className="container flex justify-between items-center">
      <aside className="grid-flow-col items-center">
        
        <p className='text-xl'>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 flex items-center text-2xl  md:place-self-center md:justify-self-end">
        <Link>
          <BsTwitterX/>
        </Link>
        <Link>
          <BsYoutube/>
        </Link>
        <Link>
          <BsFacebook/>
        </Link>
      </nav>
  </div>
</footer>
  )
}

export default Footer
