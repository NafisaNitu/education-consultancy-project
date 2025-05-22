import './App.css'


function App() {

  return (
    <>
    <header className="bg-[#080D41]">
      <div className="container mx-auto lg:px-24 sm:px-12 px-6">
       <div className="flex justify-between items-center">
          <h3 className="text-white font-roboto font-medium lg:text-md text-xs">We're Leading Educational Consultancy in Bangladesh.</h3>
          <div className='flex justify-end items-center gap-6'>
            <p className="sm:text-sm text-xs text-white font-public font-medium">Office Hours: 10:00AM- 07:00PM</p>
            <div className='flex items-center justify-center'>
              <a href=""><i className="fa-brands fa-facebook-f text-white text-sm border-l border-r border-[#222546] py-4 px-5"></i></a>
              <a href=""><i className="fa-brands fa-instagram text-white text-sm border-l border-r border-[#222546] py-4 px-5"></i></a>
              <a href=""><i className="fa-brands fa-linkedin text-white text-sm border-l border-r border-[#222546] py-4 px-5"></i></a>
              <a href=""><i className="fa-brands fa-youtube text-white text-sm border-l border-r border-[#222546] py-4 px-5"></i></a>
            </div>
          </div>
        </div>
      </div>
    </header>

     <section className="bg-white py-8">
      <div className="container mx-auto px-24">
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

          <div className="flex items-center">
            <img src="images/logo.png" className='h-16'  alt="" />
          </div>
          <div className="flex justify-center items-center gap-6">
            <div>
              <i className="fa-solid fa-phone text-2xl text-[#1B9FCB]"></i>
            </div>
            <div>
                <h2 className="font-semibold text-lg font-public">Call Us:</h2>
                <a href="" className="font-public text-gray-700">+880 14066 99551-4</a>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6">
            <div>
              <i className="fa-solid fa-envelope text-2xl text-[#1B9FCB]"></i>
            </div>
            <div>
                <h2 className="font-semibold text-lg font-public">Email Us:</h2>
                <a href="" className="font-public text-gray-700">dreamstudyinternational@gmail.com</a>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6">
            <div>
              <i className="fa-solid fa-location-arrow text-3xl text-[#1B9FCB]"></i>
            </div>
            <div>
                <h2 className="font-semibold text-lg font-public">Location:</h2>
                <a href="" className="font-public text-gray-700">Gulshan 02</a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="bg-[#080D41]">
      <div className="container mx-auto px-24">
      <nav className="sticky top-0">
        <div className="flex justify-between items-center">
          <div className="md:hidden flex items-center justify-between">
            <img src="images/logo.png" className=''  alt="" />
          </div>

          <ul className="hidden md:flex items-center space-x-10">
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

        <a href="" className=' bg-[#2D88FF] rounded-lg w-32 py-2 px-4'>
          <div className='apply-button'>
          <div className=" text-lg font-bold text-gray-100 font-public ">Apply Now</div></div>
        </a>
         
        </div>
      </nav>
      </div>
    </section>

    <section class="bg-[#F1F4F9] py-12">
        <div class="mx-auto pb-4">
            <div className="flex items-center justify-center">
              <img src="images/logo.png" className='h-20'  alt="" />
            </div>
        </div>

        
      <div class="bg-cover bg-no-repeat bg-center h-full pt-10 pb-24" style={{backgroundImage: `url('/images/bg-image.jpg')`}}>

          <div class="container mx-auto lg:px-24 sm:px-12 px-6">

            <div class="flex">
              
                <div className="w-3/5 py-8">
                  <img src="images/expo.jpg" className=''  alt="" />
                </div>

                <div class="w-2/5 ps-10">
                    <div className="">
                      <h2 className="rounded-t-lg px-12 py-5 text-4xl font-semibold font-roboto bg-gradient-to-r from-[#24579F] to-[#209AC6] text-white">
                        Apply Now!
                      </h2>

                      <form className="space-y-5 rounded-b-lg px-12 py-10 bg-[#F6F9FE]">

                        <div class="relative">
                            <input type="text" class="form-input" placeholder="Name" />

                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="fa-regular fa-user text-gray-600"></i>
                            </div>
                        </div>

                        <div class="relative">
                            <input type="text" class="form-input" placeholder="Phone Number" />

                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="fa-solid fa-phone text-gray-600"></i>
                            </div>
                        </div>

                        <div class="relative">
                          <select name="" id="" class="pl-10 pr-4 py-4 w-full border border-[#E0ECFC] rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 bg-transparent placeholder-gray-500 font-medium font-public">
                            <option value="">Last Education </option>
                            <option value="">HSC </option>
                            <option value="">Bachelor </option>
                            
                          </select>
                           <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="fa-solid fa-building-columns text-gray-500"></i>
                            </div>
                        </div>


                       <div class="relative">
                            <input type="text" class="form-input" placeholder="Preferred Country" />

                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="fa-solid fa-globe text-gray-600"></i>
                            </div>
                        </div>
                        <div className='pb-4'>

                        <input 
                          type="submit" value="Register"
                          className="rounded-lg px-8 py-4 text-lg font-semibold font-roboto bg-gradient-to-r from-[#209AC6] to-[#24579F] hover:from-[#36A5CC] hover:to-[#3B75AA] transition duration-300 cursor-pointer text-white"
                        />
                        </div>
                      </form>
                    </div>
                </div>
                
            </div>
        </div>

        </div>
    </section>

    <section class="bg-[#ffffff] py-14 px-5">

       <div class="mx-auto pb-14">
            <div className="flex items-center justify-center">
              <img src="images/offer.png" className='h-20'  alt="" />
            </div>
        </div>

        <div class="container mx-auto max-w-7xl">
            <div className='flex justify-center items-center gap-6'>

                <a href="" class="w-1/4 h-24 hover:box-shadow relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] hover:after:bg-[#1B9FCB] transition-all duration-400 rounded-md py-2 flex flex-col items-center gap-3">
                   <i class="fa-regular fa-file-lines text-[#1B9FCB] text-4xl h-10"></i>
                    <h3 class="font-medium text-lg tracking-wider">Eligibility Assessment</h3>
                </a>

               <a href="" class="w-1/4 h-24 hover:box-shadow relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] hover:after:bg-[#1B9FCB] transition-all duration-400 rounded-md py-2 flex flex-col items-center gap-3">
                   <i class="fa-solid fa-building-columns text-[#1B9FCB] text-4xl h-10"></i>
                    <h3 class="font-medium text-lg tracking-wider">Eligibility Assessment</h3>
                </a>
               <a href="" class="w-1/4 h-24 hover:box-shadow relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] hover:after:bg-[#1B9FCB] transition-all duration-400 rounded-md py-2 flex flex-col items-center gap-3">
                   <i class="fa-solid fa-file-invoice-dollar text-[#1B9FCB] text-4xl h-10"></i>
                    <h3 class="font-medium text-lg tracking-wider">Eligibility Assessment</h3>
                </a>

                 <a href="" class="w-1/4 h-24 hover:box-shadow relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] hover:after:bg-[#1B9FCB] transition-all duration-400 rounded-md py-2 flex flex-col items-center gap-3">
                   <i class=" h-10"></i>
                    <h3 class="font-medium text-lg tracking-wider">Eligibility Assessment</h3>
                </a>
            </div>

            <div className='flex justify-center items-center gap-6 mt-8'>

                <a href="" class="w-1/4 h-24 hover:box-shadow relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] hover:after:bg-[#1B9FCB] transition-all duration-400 rounded-md py-2 flex flex-col items-center gap-3">
                   <i class="fa-solid fa-dollar-sign text-[#1B9FCB] text-4xl h-10"></i>
                    <h3 class="font-medium text-lg tracking-wider">Eligibility Assessment</h3>
                </a>

               <a href="" class="w-1/4 h-24 hover:box-shadow relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] hover:after:bg-[#1B9FCB] transition-all duration-400 rounded-md py-2 flex flex-col items-center gap-3">
                   <i class="h-10"></i>
                    <h3 class="font-medium text-lg tracking-wider">Eligibility Assessment</h3>
                </a>
               <a href="" class="w-1/4 h-24 hover:box-shadow relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] hover:after:bg-[#1B9FCB] transition-all duration-400 rounded-md py-2 flex flex-col items-center gap-3">
                   <i class="fa-solid fa-file-pen text-[#1B9FCB] text-4xl h-10"></i>
                    <h3 class="font-medium text-lg tracking-wider">Eligibility Assessment</h3>
                </a>

                 <a href="" class="w-1/4 h-24 hover:box-shadow relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[4px] hover:after:bg-[#1B9FCB] transition-all duration-400 rounded-md py-2 flex flex-col items-center gap-3">
                   <i class="fa-solid fa-plane-departure text-[#1B9FCB] text-4xl h-10"></i>
                    <h3 class="font-medium text-lg tracking-wider">Eligibility Assessment</h3>
                </a>
            </div>
        </div>
    </section>

    </>
  )
}

export default App
