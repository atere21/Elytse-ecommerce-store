import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiFillRightCircle } from 'react-icons/ai';
import blkMen from '../assets/blkMen.png'
import biz from '../assets/biz.png'
import AIman from '../assets/AIman.png'
import msg from '../assets/msg.png'
// import ChatWithUS from "./ChatWithUS";
function Hero() {

  const [current, setCurrent] = useState(0);
	const [openChat, setOpenChat] = useState(false);
	const imagesArray = [biz, AIman, blkMen];
	useEffect(() => {}, []);

	useEffect(() => {
		AOS.init({ duration: 2000 });
		const timer = setTimeout(() => {
			if (current === 2) {
				setCurrent(0);
			} else {
				setCurrent(current + 1);
			}
		}, 10000);
		return () => clearTimeout(timer);
	}, [current]);

	const styleBg = {
		backgroundImage: `url(${imagesArray[current]})`,
		height: "100vh",
    
	    width: "100%",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		display: "flex",
		justifyItems: "center",
		flexDirection: "column",
		paddingLeft: "2rem",
		paddingRight: "3rem",
		paddingTop: "-2rem",
		paddingBottom: "2rem",
		transition: "all 2s ease-in-out",
	};

  return (
		<div style={styleBg} className='object-cover'>
			<h1
				data-aos='fade-right'
				className='font-bold w-full text-2xl md:text-4xl drop-shadow-2xl text-white mt-[3rem] sm:mt-[7rem] leading-relaxed md:leading-relaxed text-center sm:text-left
        mx-[2rem]'>
				Get the ultimate shopping
				<br /> <span className='text-[#C9A800]'>Experience from the Comfort</span>
				
				<br /> of your home
			</h1>

			<p
				data-aos='fade-right'
				className='drop-shadow-2xl font-bold sm:font-[500] py-8 text-xl  text-center leading-relaxed sm:text-left text-[#5f5f68] '>
				
			</p>

			<div className='flex  items-center justify-center sm:justify-between mt-[1rem]'>
				<button className='bg-white border-none text-[#082EB5] flex items-center sm:justify-between justify-center  font-bold w-[200px] h-[54px] p-2 px-[1.5rem] rounded-full hover:text-white hover:bg-[#082EB5]'>
					Start Shopping
					<span className='group-hover:rotate-90 duration-300  px-2  hidden md:block '>
						<AiFillRightCircle size={30} className='' />
					</span>
				</button>
				{/* {openChat ? (
					<div className='chatContainer'>
						<ChatWithUS setOpenChat={() => setOpenChat(false)} />
					</div>
				) : (
					<div className='sticky-btn'>
						<img src={msg} alt='/' onClick={() => setOpenChat(true)} />
					</div>
				)} */}
				
				<div className='sticky-btn'>
						<img src={msg} alt='/' />
					</div>
			</div>
		</div>
	);
};

export default Hero;
