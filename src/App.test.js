import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
const [isOpen, setIsOpen] = useState(false);

//     const handleClick = () => {
//         setIsOpen(!isOpen)
//     };
//     const handleCloseMenu = () => {
//         setIsOpen()
//     }
//   return (
// //     <div id='__next'>
// //         <div className='overflow-hidden'>
// //             <div className='overflow-hidden px-5 cursor-pointer lg:bg-white lg:bg-opacity-0 bg-primary bg-opacity-10'>
// //                 <nav className=' flex lg:flex-row items-center container mx-auto py-10 lg:py-1 flex-col-reverse lg:justify-center'>
// //                     <ul className=" lg:inline-flex lg:flex-row xl:w-5/12 lg:w-96 md:w-12/12 w-12/12 flex flex-col lg:h-0 h-[400px] justify-between lg:pt-0 pt-10 items-start lg:items-center lg:justify-between lg:text-lg text-2xl lg:font-normal font-semibold ">
                   
// //                         <li className='border-b-2 border-primary   hover:font-medium'>
// //                             <a href="/">Home</a>
// //                         </li>
// //                         <li className='hover:font-light'>
// //                             <a href='/about'>About Us</a>
// //                         </li>
// //                         <li className='hover:font-light'>
// //                             <a href='/volunteer'>Volunteer</a>
// //                         </li>
// //                         <li className='hover:font-light'>
// //                             <a href='/events'>Events</a>
// //                         </li>
// //                         </ul>
// //                     <figure class=" flex justify-between w-full lg:h-0 h-10 px-1 lg:px-2 xl:w-3/12 lg:w-2/12 lg:justify-center items-center">
// //                         <a class="border-none" href="/">
// //                         <img src={logo} alt="logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"  />
// //                         </a>
// //                         </figure>
// //                         <h1 className='lg:hidden text-5xl flex pr-3 items-center font-medium'
// //                         onClick={handleCloseMenu}>
// //                             X
// //                             </h1>
// //                         <button class=" rounded lg:hidden text-white ml-auto hover:text-white active:bg-white outline-none"
// //                         onClick={handleClick} 
// //                         >
// //                             <svg class="w-12 h-12" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
// //                                     </path>
// //                                     </svg>
                                    
// //                     </button>

                   
// //                     <div
// //                         className={`w-4/12 md:w-5/12 lg:flex ${
// //                             isOpen ? 'flex' : 'hidden'
// //                          } lg:flex-row flex-col justify-around items-center h-56 lg:h-0 lg-py-0 py-11 transition-all duration-300`}>
// //                         
                        
// //                     </div>
                    
// //                 </nav>
// //             </div>
// //         </div>
// //     </div>
// //   )
// // }


