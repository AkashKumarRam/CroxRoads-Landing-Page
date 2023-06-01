import React from 'react';
import GooglePlay from "../assets/GooglePlay.png";
import AppleStore from "../assets/AppleStore.png";

const DownloadUs = () => {
  return (
    <div className='bg-[#F5F0F8] pl-[12rem] pr-[12rem] pt-[4rem] max-sm:pl-5 max-sm:pr-5'>
        <div className='bg-[#5F327C] rounded-3xl space-y-10 flex flex-col items-center justify-center p-[5rem] max-sm:p-4'>
            <h4 className='text-center font-raleway font-bold text-5xl max-sm:text-4xl text-white'>It’s actually fun</h4>
            <p className="text-center font-inter text-white">"I was a bit hesitant to try a team dating app, but I'm so glad I did! I went on a date with my friends and we had a blast with the guys we met. It was a fun and unique experience that I would definitely recommend to anyone looking to meet new people.</p>
            <p className='text-white font-poppins text-xl'>~ Anisha & Rohini</p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-8 pt-[4rem] pb-20 max-sm:flex max-sm:flex-col'>
            <h4 className='text-center font-raleway font-semibold text-4xl max-sm:text-3xl pb-5'>Download us @</h4>
            <div className='flex flex-row items-center justify-center space-x-5 max-sm:space-y-5 max-sm:space-x-0 max-sm:flex max-sm:flex-col'>
                <img className='max-sm:h-[4rem]' src={GooglePlay} alt="GooglePlay"/>
                <img className='max-sm:h-[4rem]' src={AppleStore} alt='AppleStore'/>
            </div>
        </div>
    </div>
  )
}

export default DownloadUs