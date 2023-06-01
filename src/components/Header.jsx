import React from 'react';
import Mobile from "../assets/Mobile.png"
import CroxLogo from "../assets/croxheaderlogp.png"
import GooglePlay from "../assets/GooglePlay.png"
import AppleStore from "../assets/AppleStore.png"

const Header = () => {
  return (
    <div className='h-[calc(100vh-4rem)] w-[100%] bg-[#F5F0F8] flex items-center justify-center space-x-20 pl-20 pr-20 mb-48 mt-[-3rem] max-sm:flex max-sm:flex-col-reverse max-sm:items-center max-sm:justify-center max-sm:pl-0 max-sm:pr-0 max-sm:space-x-0 max-sm:mt-0'>
        <div className='flex flex-col space-y-12 max-sm:pl-2 max-sm:pr-2'>
            <div className='max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                <img className='h-[6rem] max-sm:h-[4rem]' src={CroxLogo} alt="croxLogo"/>               
                <h1 className='font-raleway font-bold text-[1.8rem] text-[#5F327C] max-sm:text-center max-sm:text-[1.3rem]'>India's Largest Team Dating App</h1>
                <p className='max-sm:hidden font-raleway text-[1rem] text-[#6E6E6E]'>Discover a new way of meeting people, form teams <br/>with friends and match up with other teams to meet up<br/> in real life.</p>
                <p className='sm:hidden max-sm:text-center max-sm:font-raleway text-[#6E6E6E]'>Discover a new way of meeting people, form teams with friends and match up with other teams to meet up in real life.</p>
            </div>
            <div className='flex flex-row items-center space-x-5 max-sm:flex max-sm:flex-row max-sm:items-center max-sm:justify-center max-sm:pl-3 max-sm:pr-3 max-sm:space-x-1'>
                <img className='h-[4rem] max-sm:h-[3rem]' src={GooglePlay} alt='googleStore'/>
                <img className='h-[4rem] max-sm:h-[3rem]' src={AppleStore} alt='appleStore'/>
            </div>
        </div>
        <div className='max-sm:w-full max-sm:flex max-sm:items-center max-sm:justify-center'>
            <img className='h-[30rem] max-sm:h-[20rem]' src={Mobile} alt="heroMobileImage" />
        </div>
    </div>
  )
}

export default Header