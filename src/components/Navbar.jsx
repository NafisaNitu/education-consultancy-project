import React from 'react'

function Navbar() {
  return (
   <nav className="bg-[#080D41]">
      <div className="container mx-auto 2xl:px-32 sm:px-16 px-6">
        <div className="flex justify-between items-center">

          <ul className="block md:flex items-center xl:space-x-10 sm:space-x-6">
            <li className='navbar-text'> <a href="#">Home</a></li>
            <li className='navbar-text'> <a href="#">About</a></li>
            <li className='navbar-text'> <a href="#">Service</a></li>
           
            <li className="relative group navbar-text">
              <a href='' className="flex items-center navbar-text gap-2">
                Countries
                <i className="fa-solid fa-angle-down"></i>
              </a>
              <ul className="absolute left-0 mt-2 w-52 bg-white shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <li><a href="#" className="sub-navbar-text">Canada</a></li>
                <li><a href="#" className="sub-navbar-text">Australia</a></li>
                <li><a href="#" className="sub-navbar-text">New Zealand</a></li>
                <li><a href="#" className="sub-navbar-text">UK</a></li>
                <li><a href="#" className="sub-navbar-text">USA</a></li>
                <li><a href="#" className="sub-navbar-text">Sweden</a></li>
                <li><a href="#" className="sub-navbar-text">Denmark</a></li>
                <li><a href="#" className="sub-navbar-text">Netherlands</a></li>
              </ul>
            </li>

            <li className="navbar-text"><a href="#">Contact</a></li>
            <li className='navbar-text'><a href="#">Privacy Policy</a></li>
          </ul>

        <a href="" className=' bg-[#2D88FF] rounded-lg w-32 py-2 px-4 sm:block hidden'>
          <div className='apply-button'>
          <div className=" text-lg font-bold text-gray-100 font-public ">Apply Now</div></div>
        </a>
         
        </div>
      </div>
    </nav>
  )
}

export default Navbar