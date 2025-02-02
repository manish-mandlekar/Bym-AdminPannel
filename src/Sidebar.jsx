const Sidebar = ({ isSideMenuOpen }) => {
    return (
      <>
        {/* Desktop sidebar */}
        <aside className={`z-20 w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 
      ${isSideMenuOpen ? 'fixed inset-y-0 left-0 top-[8.6vmax]' : 'hidden'}`}>
          <div className="py-4 text-gray-500 dark:text-gray-400">
            <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
             Builds Your Mind
            </a>
            
            {/* Button sizes section */}
            <div className="px-6 my-6">
              
              <div className="flex flex-col space-y-4">
                
                
                <button className="px-5 py-3 font-medium leading-5 text-black transition-colors duration-150  border border-transparent rounded-lg  hover:bg-[#dadada] focus:outline-none focus:shadow-outline-purple flex items-center gap-6">
                <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                Dashboard
                </button>
                
                <button className="px-5 py-3 font-medium leading-5 text-black transition-colors duration-150  border border-transparent rounded-lg  hover:bg-[#dadada] focus:outline-none focus:shadow-outline-purple flex items-center gap-6">
                <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
                Forms
                </button>

                <button className="px-5 py-3 font-medium leading-5 text-black transition-colors duration-150  border border-transparent rounded-lg  hover:bg-[#dadada] focus:outline-none focus:shadow-outline-purple flex items-center gap-6">
                <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                Cards
                </button>

                <button className="px-5 py-3 font-medium leading-5 text-black transition-colors duration-150  border border-transparent rounded-lg  hover:bg-[#dadada] focus:outline-none focus:shadow-outline-purple flex items-center gap-6">
                <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
                Charts
                </button>

                <button className="px-5 py-3 font-medium leading-5 text-black transition-colors duration-150  border border-transparent rounded-lg  hover:bg-[#dadada] focus:outline-none focus:shadow-outline-purple flex items-center gap-6">
                <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
             Pages
                </button>

                <button className="px-5 py-3 font-medium leading-5 text-black transition-colors duration-150  border border-transparent rounded-lg  hover:bg-[#dadada] focus:outline-none focus:shadow-outline-purple flex items-center gap-6">
                <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                Modals
                </button>

                <button className="px-5 py-3 font-medium leading-5 text-black transition-colors duration-150  border border-transparent rounded-lg  hover:bg-[#dadada] focus:outline-none focus:shadow-outline-purple flex items-center gap-6">
                <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                </svg>
                Tables
                </button>
              </div>
            </div>
  
            {/* Buttons with icons section */}
            <div className="px-6 my-6">
             
              <div className="flex flex-col space-y-4">
                <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-[#7e3af2] border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                  <span>Create Account</span>
                  <span class="ml-2" aria-hidden="true">+</span>
                </button>
  
               
              </div>
            </div>
          </div>
        </aside>
  
        {/* Mobile sidebar */}
        {/* ... rest of your mobile sidebar code ... */}
      </>
    )
  }
  
  export default Sidebar