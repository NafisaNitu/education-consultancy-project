import React from 'react'

function UnderHeader() {
  return (
   <section className="bg-white 2xl:py-8 sm:py-6 py-4">
      <div className="container mx-auto 2xl:px-32 sm:px-16 px-6">
        <div className='grid grid-cols-1 md:grid-cols-4 2xl:gap-4 gap-4'>

          <div className="md:flex items-center">
            <img src="images/logo.png" className='2xl:h-16 h-12'  alt="" />
          </div>
          <div className="flex sm:justify-center items-center 2xl:gap-6 gap-2">
            <div>
              <i className="fa-solid fa-phone xl:text-2xl sm:text-md text-sm text-[#1B9FCB]"></i>
            </div>
            <div>
                <h2 className="font-semibold xl:text-lg sm:text-md text-sm font-public">Call Us:</h2>
                <a href="" className="font-public xl:text-lg sm:text-md text-sm text-gray-700">+880 14066 99551-4</a>
            </div>
          </div>
          <div className="flex sm:justify-center items-center 2xl:gap-6 gap-4">
            <div>
              <i className="fa-solid fa-envelope xl:text-2xl sm:text-md text-sm text-[#1B9FCB]"></i>
            </div>
            <div>
                <h2 className="font-semibold xl:text-lg sm:text-md text-xs font-public">Email Us:</h2>
                <a href="" className="font-public xl:text-lg sm:text-md text-sm text-gray-700">dreamstudyinternational@gmail.com</a>
            </div>
          </div>
          <div className="flex sm:justify-center items-center 2xl:gap-6 gap-4">
            <div>
              <i className="fa-solid fa-location-arrow xl:text-3xl sm:text-md text-sm text-[#1B9FCB]"></i>
            </div>
            <div>
                <h2 className="font-semibold xl:text-lg sm:text-md text-sm font-public">Location:</h2>
                <a href="" className="font-public xl:text-lg sm:text-md text-sm text-gray-700">Gulshan 02</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default UnderHeader