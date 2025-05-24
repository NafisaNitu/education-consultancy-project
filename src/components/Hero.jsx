import React from 'react'

function Hero() {
  return (
   <section className="bg-[#F1F4F9] xl:pt-12 pt-6">
        <div className="mx-auto pb-4">
            <div className="flex items-center justify-center">
              <img src="images/logo.png" className='xl:h-20 h-16'  alt="" />
            </div>
        </div>

        
      <div className="bg-cover bg-no-repeat bg-center xl:pt-10 md:pt-8 xl:pb-24 pb-4" style={{backgroundImage: `url('/images/bg-image.jpg')`}}>

          <div className="container mx-auto 2xl:px-32 sm:px-16 px-6">

            <div className="md:flex flex-wrap">
              
                <div className="md:w-3/5 w-full md:py-8 py-4">
                  <img src="images/expo.jpg" className=''  alt="" />
                </div>

                <div className="md:w-2/5 w-full md:ps-10">
                    <div className="">
                      <h2 className="rounded-t-lg md:px-12 px-4 xl:py-5 py-3 xl:text-4xl md:text-2xl text-lg font-semibold font-roboto bg-gradient-to-r from-[#24579F] to-[#209AC6] text-white">
                        Apply Now!
                      </h2>

                      <form className="space-y-5 rounded-b-lg xl:px-12 px-6 xl:py-10 py-6 bg-[#F6F9FE]">

                        <div className="relative">
                            <input type="text" className="form-input" placeholder="Name" />

                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="fa-regular fa-user text-gray-600"></i>
                            </div>
                        </div>

                        <div className="relative">
                            <input type="text" className="form-input" placeholder="Phone Number" />

                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="fa-solid fa-phone text-gray-600"></i>
                            </div>
                        </div>

                        <div className="relative">
                          <select name="" id="" className="pl-10 pr-4 xl:py-4 py-2 w-full border border-[#E0ECFC] rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 bg-transparent placeholder-gray-500 font-medium cursor-pointer font-public">
                            <option value="">Last Education </option>
                            <option value="">HSC </option>
                            <option value="">Bachelor </option>
                            
                          </select>
                           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="fa-solid fa-building-columns text-gray-500"></i>
                            </div>
                        </div>


                       <div className="relative">
                            <input type="text" className="form-input" placeholder="Preferred Country" />

                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="fa-solid fa-globe text-gray-600"></i>
                            </div>
                        </div>
                        <div className='2xl:pb-4'>

                        <input 
                          type="submit" value="Register"
                          className="rounded-lg px-8 xl:py-4 py-2 xl:text-lg text-md font-semibold font-roboto bg-gradient-to-r from-[#209AC6] to-[#24579F] hover:from-[#36A5CC] hover:to-[#3B75AA] transition duration-300 cursor-pointer text-white"
                        />
                        </div>
                      </form>
                    </div>
                </div>
                
            </div>
        </div>

        </div>
    </section>
  )
}

export default Hero