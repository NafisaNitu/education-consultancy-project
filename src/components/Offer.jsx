import React from 'react'

function Offer() {
  return (
   <section className="bg-[#ffffff] xl:py-16 py-8 px-5">

       <div className="mx-auto xl:pb-14 pb-6">
            <div className="flex items-center justify-center">
              <img src="images/offer.png" className='xl:h-20 h-16'  alt="" />
            </div>
        </div>

        <div className="container mx-auto 2xl:px-32 sm:px-16 px-6">
            <div className='md:flex justify-center items-center xl:gap-8'>

                <a href="" className="md:w-1/4 w-full xl:h-24 lg:h-28 sm:h-32 h-24 hover:box-shadow relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] hover:after:bg-[#1B9FCB] hover:scale-[1.01] transition duration-300 rounded-sm py-2 flex flex-col items-center gap-3">
                   <i className="fa-regular fa-file-lines text-[#1B9FCB] text-4xl h-10"></i>
                    <h3 className="font-medium 2xl:text-lg xl:text-md text-sm text-center tracking-wider">Eligibility Assessment</h3>
                </a>

               <a href="" className="md:w-1/4 w-full xl:h-24 lg:h-28 sm:h-32 h-24 hover:box-shadow relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] hover:after:bg-[#1B9FCB] hover:scale-[1.01] transition duration-300 rounded-sm py-2 flex flex-col items-center gap-3">
                   <i className="fa-solid fa-building-columns text-[#1B9FCB] text-4xl h-10"></i>
                    <h3 className="font-medium 2xl:text-lg xl:text-md text-sm text-center tracking-wider">University & Program Selection	</h3>
                </a>
               <a href="" className="md:w-1/4 w-full xl:h-24 lg:h-28 sm:h-32 h-24 hover:box-shadow relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] hover:after:bg-[#1B9FCB] hover:scale-[1.01] transition duration-300 rounded-sm py-2 flex flex-col items-center gap-3">
                   <i className="fa-solid fa-file-invoice-dollar text-[#1B9FCB] text-4xl h-10"></i>
                    <h3 className="font-medium 2xl:text-lg xl:text-md text-sm text-center tracking-wider">Scholarship Application</h3>
                </a>

                 <a href="" className="md:w-1/4 w-full xl:h-24 lg:h-28 sm:h-32 h-24 hover:box-shadow relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] hover:after:bg-[#1B9FCB] hover:scale-[1.01] transition duration-300 rounded-sm py-2 flex flex-col items-center gap-3">
                   <i className=" h-10"></i>
                    <h3 className="font-medium 2xl:text-lg xl:text-md text-sm text-center tracking-wider">Sponsor Documents Support</h3>
                </a>
            </div>

            <div className='md:flex justify-center items-center gap-8 md:mt-8'>

                <a href="" className="md:w-1/4 w-full xl:h-24 lg:h-28 sm:h-32 h-24 hover:box-shadow relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] hover:after:bg-[#1B9FCB] hover:scale-[1.01] transition duration-300 rounded-sm py-2 flex flex-col items-center gap-3">
                   <i className="fa-solid fa-dollar-sign text-[#1B9FCB] text-4xl h-10"></i>
                    <h3 className="font-medium 2xl:text-lg xl:text-md text-sm text-center tracking-wider">Bank Statement Support</h3>
                </a>

               <a href="" className="md:w-1/4 w-full xl:h-24 lg:h-28 sm:h-32 h-24 hover:box-shadow relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] hover:after:bg-[#1B9FCB] hover:scale-[1.01] transition duration-300 rounded-sm py-2 flex flex-col items-center gap-3">
                   <i className="h-10"></i>
                    <h3 className="font-medium 2xl:text-lg xl:text-md text-sm text-center tracking-wider">SOP Letter Writing</h3>
                </a>
               <a href="" className="md:w-1/4 w-full xl:h-24 lg:h-28 sm:h-32 h-24 hover:box-shadow relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] hover:after:bg-[#1B9FCB] hover:scale-[1.01] transition duration-300 rounded-sm py-2 flex flex-col items-center gap-3">
                   <i className="fa-solid fa-file-pen text-[#1B9FCB] text-4xl h-10"></i>
                    <h3 className="font-medium 2xl:text-lg xl:text-md text-sm text-center tracking-wider">Visa Application Support</h3>
                </a>

                 <a href="" className="md:w-1/4 w-full xl:h-24 lg:h-28 sm:h-32 h-24 hover:box-shadow relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] hover:after:bg-[#1B9FCB] hover:scale-[1.01] transition duration-300 rounded-sm py-2 flex flex-col items-center gap-3">
                   <i className="fa-solid fa-plane-departure text-[#1B9FCB] text-4xl h-10"></i>
                    <h3 className="font-medium 2xl:text-lg xl:text-md text-sm text-center tracking-wider">Pre-Departure Information</h3>
                </a>
            </div> 
        </div>
    </section>
  )
}

export default Offer