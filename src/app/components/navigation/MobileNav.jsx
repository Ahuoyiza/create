import {IoClose} from "react-icons/io5"
import Sidebar from "./Sidebar"

const MobileNav = ({onClose}) => {
  return (
    <div id='navbar-mobile' class='fixed top-0 lg:hidden z-10 right-0 w-screen h-screen bg-opacity-60 bg-[#1E1E1E] flex items-start justify-start'>
      <div class='bg-foreground w-5/6 h-full overflow-y-scroll'>
        <div class='flex items-center justify-between border-b border-neutral-100 p-4'>
          <div className=''>
            <h3 className='text-4xl font-semibold text-white'>LOGO</h3>
          </div>
          <IoClose size={28} onClick={onClose} className='text-white' />
        </div>
        <div className='flex-1 h-[90%]'>
          <Sidebar onCloseMobile={onClose} />
        </div>
      </div>
    </div>
  )
}

export default MobileNav
