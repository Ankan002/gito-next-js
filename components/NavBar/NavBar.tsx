import Link from 'next/link';
import { useState } from 'react';
const icon = require('../../assets/main-logo.svg')

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  //bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500

  return (
    <>
      <nav className='flex items-center flex-wrap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <img src={icon?.default?.src} className='w-8 h-8 mr-3' />
            <span className='text-xl text-[#FEE3EC] font-bold uppercase tracking-wide font-m-plus'>
              Gito
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 rounded lg:hidden text-[#FEE3EC] ml-auto hover:text-[#FEE3EC] outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            {/* <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-white font-mono'>
                Home
              </a>
            </Link> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar