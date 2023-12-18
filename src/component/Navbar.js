import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/global.css"

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">About Us</a>
				<a href="/#">Donations</a>
				<a href="/#">Worship With Us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
            <h3>KADAAC</h3>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
           {/* <div className="nav_btn  style={{ display: 'none' }}">
           <a target='_blank' href=''>
            <button className='lg:w-36 md:w-28 rounded-md h-12 text-primary font-medium
             border-primary border-2 font-mono hover:scale-105'>
                Join Us
                </button>
                    </a>
                    <a href='/support'>
                            <button className='lg:w-54 md:w-48 border-primary rounded-md h-12 border-2
                              font-medium text-primary font-mono 
                            hover:scale-105'>
                                Support Our Vison
                                </button>
                        </a>
           </div> */}
		</header>
	);
}

export default Navbar;