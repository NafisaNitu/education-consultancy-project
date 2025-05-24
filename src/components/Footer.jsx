import React from 'react'

function Footer() {
  return (
   <footer className="bg-[#22254B] py-3">
      <div className="container mx-auto 2xl:px-32 sm:px-16 px-6">
       <div className="lg:flex justify-between items-center">
          <h3 className="text-white font-public lg:text-md text-sm"> &copy; 2023 Dream Study Int.. Designed By *hirebirds Team.</h3>
          <div className='lg:flex justify-end items-center gap-6'>
             <ul className="flex items-center gap-6 marker:text-color list-inside list-disc text-[#1B9FCB] [&>li>a]:inline [&>li>a]:text-gray-100">
                    <li className='py-2'>
                      <a href='' className='lg:text-md text-sm font-roboto font-semibold hover:text-[#1A73E9]'>About</a>
                    </li>
                    <li className='py-2'>
                      <a href='' className='lg:text-md text-sm font-roboto font-semibold hover:text-[#1A73E9]'>FAQ</a>
                    </li>
                    <li className='py-2'>
                      <a href='' className='lg:text-md text-sm font-roboto font-semibold hover:text-[#1A73E9]'>Contact</a>
                    </li>
                    </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer