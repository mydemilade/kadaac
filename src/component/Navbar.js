import React from 'react'

const Navbar = () => {
  return (
    <div className='id'>
        <div className='overflow'>
            <div className='overflow-hidden px-5 cursor-pointer lg:bg-white lg:bg-opacity-0 bg-primary bg-opacity-10'>
                <nav className='flex lg:flex-row items-center container mx-auto py-10 lg:py-1 flex-col-reverse lg:justify-center"'>
                    <ul className="  lg:inline-flex lg:flex-row xl:w-5/12 lg:w-96 md:w-12/12 w-12/12 flex flex-col  justify-between lg:pt-10 items-start lg:items-center lg:justify-between lg:text-lg text-2xl lg:font-normal font-semibold">
                        
                   
                        <li className='border-b-2 border-primary   hover:font-medium'>
                            <a href="/">Home</a>
                        </li>
                        <li className='hover:font-light'>
                            <a href='/about'>About Us</a>
                        </li>
                        <li className='hover:font-light'>
                            <a href='/volunteer'>Volunteer</a>
                        </li>
                        <li className='hover:font-light'>
                            <a href='/events'>Events</a>
                        </li>
                    </ul>
                    <figure className='flex justify-between w-full lg:h-0 h-10 px-1 lg:px-2 xl:w-2/12 lg:justify-center items-center'>
                    <a className='border-none' href='/'>
                        <img src='' alt='logo' width={100} height={100}/>
                    </a>
                    <button className='rounded lg:hidden text-white over:text-white active:bg-white outline-none'></button>
                    </figure>
                    <div className='w-4/12 md:w-5/12 lg:flex'>
                        <a target='_blank' href=''>
                            <button>Join Us</button>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar
