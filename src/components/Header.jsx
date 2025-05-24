import React from 'react'

function Header() {
  return (
    <header className="bg-[#080D41]">
      <div className="container mx-auto 2xl:px-32 sm:px-16 px-6 sm:py-0 py-2">
       <div className="sm:flex block justify-between items-center">
          <h3 className="text-white font-roboto font-medium xl:text-md md:text-md text-xs">We're Leading Educational Consultancy in Bangladesh.</h3>
          <div className='flex sm:justify-end items-center xl:gap-6 sm:gap-4 sm:mt-0 mt-2'>
            <p className="xl:text-md text-xs text-white font-public font-medium">Office Hours: 10:00AM- 07:00PM</p>
            <div className='flex items-center justify-center'>
              <a href=""><i className="fa-brands fa-facebook-f text-white text-sm sm:border-l sm:border-r border-[#222546] sm:py-4 py-2 px-2 sm:px-5"></i></a>
              <a href=""><i className="fa-brands fa-instagram text-white text-sm sm:border-l sm:border-r border-[#222546] sm:py-4 py-2 px-2 sm:px-5"></i></a>
              <a href=""><i className="fa-brands fa-linkedin text-white text-sm sm:border-l sm:border-r border-[#222546] sm:py-4 py-2 px-2 sm:px-5"></i></a>
              <a href=""><i className="fa-brands fa-youtube text-white text-sm sm:border-l sm:border-r border-[#222546] sm:py-4 py-2 px-2 sm:px-5"></i></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header