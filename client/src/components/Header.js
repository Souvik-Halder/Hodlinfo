import React from 'react'
import {AiOutlineDown} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import ProgressBar from './ProgressBar';
const Header = ({toogleMode,dark}) => {

  return (
    <nav className='py-4 px-16'>
        <div className='flex flex-row flex-wrap justify-between gap-4 '>
            <div className='start lg:w-[15%] w-[100%] flex items-center'><img className='' alt='logo' src='/hi.png'/></div>
            <div className='flex mid justify-between gap-3'>
                <button className={`flex items-center px-3 h-12 ${dark ? ' text-[#ffffff]':'text-[#0c0f48]'} border-[rgb(43,48,59)] border-solid border-w-2 ${dark &&'focus:bg-[#545b62]'} ${
                  dark ? ' bg-[#2e3241]':'bg-[#f8f9fa]'
                } rounded-lg white `}>INR<span className='whitespace-nowrap  mx-1'> <AiOutlineDown/></span></button>
                <button className={`flex items-center px-3 h-12 ${dark ? ' text-[#ffffff]':'text-[#0c0f48]'} border-[rgb(43,48,59)] border-solid border-w-2  ${
                  dark ? ' bg-[#2e3241]':'bg-[#f8f9fa]'
                } ${dark &&'focus:bg-[#545b62]'}  rounded-lg white `}>BTC<span className='whitespace-nowrap  mx-1'> <AiOutlineDown/></span></button>
                <button className={`flex items-center px-3 h-12 ${dark ? ' text-[#ffffff]':'text-[#0c0f48]'} border-[rgb(43,48,59)] border-solid border-w-2  ${
                  dark ? ' bg-[#2e3241]':'bg-[#f8f9fa]'
                } ${
                  dark ? ' bg-[#2e3241]':'bg-[#f8f9fa]'
                }  rounded-lg white whitespace-nowrap `}>BUY BTC</button>
            </div>
            <div className='end flex justify-between gap-4'>
              <div><ProgressBar/></div>
              <div className='bg-[#3dc6c1] text-white h-[35px] px-4 rounded-[10px] whitespace-nowrap flex items-center'><FaTelegramPlane className='mx-1'/> Connect Telegram</div>
              <div>
              <label for="toggleFour" className="flex cursor-pointer select-none items-center">
  <div  className="relative">
    <input type="checkbox" id="toggleFour" className="sr-only" />
    <div onClick={toogleMode} className={`box  ${dark?'bg-[#2e3241]':'bg-[#f8f9fa]'} block h-8 w-14 rounded-full`}></div>
    <div  onClick={toogleMode}
      className={`dot absolute left-1 top-1 ${dark ? 'translate-x-full' :'translate-x-0'} flex h-6 w-6 items-center justify-center rounded-full bg-[#3dc6c1]   transition`}
    ></div>
  </div>
</label>

</div>
            </div>
        </div>
        </nav>
  )
}

export default Header
