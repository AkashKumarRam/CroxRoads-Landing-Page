import React from 'react';
import Camping from "../assets/Camping.png";
import Movie from "../assets/Movie.png";
import Party from "../assets/Party.png";
import Library from "../assets/Library.png";

const Features = () => {
  return (
    <div className='mt-[-5rem] flex flex-col pl-[10rem] pr-[10rem] space-y-20 max-sm:flex max-sm:items-center max-sm:justify-center max-sm:pl-0 max-sm:pr-0 max-sm:space-y-10 pb-[5rem]'>
        <div>
            <h2 className='font-raleway font-extrabold text-4xl text-center max-sm:text-2xl'>Why Double Date?</h2>
        </div>
        {/* Features */}
        <div className='mt-10 flex items-center justify-center space-x-20 max-sm:flex-col max-sm:space-x-0 max-sm:pl-4 max-sm:pr-4' >
            <div>
                <img className='h-[15rem] max-sm:h-[10rem]' src={Party} alt="partyImage" />
            </div>
            <div className='flex flex-col space-y-5 max-sm:pl-4 max-sm:pr-4'>
                <h3 className='font-raleway font-bold text-3xl max-sm:hidden'>Safer, with a friend by your<br/> side</h3>
                <p className='font-raleway text-[#6E6E6E] max-sm:hidden'>Unlike solo dating, you will have a known <br/> friend by your side, providing a much <br/>safer and more enjoyable experience.</p>
                {/* For Mobile */}
                <h3 className='font-raleway font-bold  text-xl sm:hidden text-center'>Safer, with a friend by your side</h3>
                <p className='font-raleway text-[#6E6E6E] sm:hidden text-center'>Unlike solo dating, you will have a known friend by your side, providing a much safer and more enjoyable experience.</p>
            </div>
        </div>
        {/* Reverse Features */}
        <div className='mt-10 flex items-center justify-center space-x-20 max-sm:hidden'>
        <div className='flex flex-col space-y-5'>
                <h3 className='font-raleway font-bold  text-3xl text-end'>More People, stick <br/>stronger</h3>
                <p className='font-raleway text-[#6E6E6E] text-end'>Unlike boring 1v1 chat where two <br/>people try push the conversation, <br/>group chats flow smoother and longer</p>
            </div>
            <div>
                <img className='h-[15rem]' src={Library} alt="libraryImage" />
            </div>
            
        </div>

        {/* Features */}
        <div className='mt-10 flex items-center justify-center space-x-20 max-sm:hidden'>
            <div>
                <img className='h-[15rem]' src={Movie} alt="movieImage" />
            </div>
            <div className='flex flex-col space-y-5'>
                <h3 className='font-raleway font-bold text-3xl'>Relaxed, as hanging out <br/>with friends</h3>
                <p className='font-raleway text-[#6E6E6E]'>No-more lonely creeps of solo dating.<br/> Team Dating creates a easier laid-back<br/> and comfortable atmosphere.</p>
            </div>
        </div>
        {/* Reverse Features */}
        <div className='mt-10 flex items-center justify-center space-x-20 max-sm:hidden'>
        <div className='flex flex-col space-y-5'>
                <h3 className='font-raleway font-bold text-3xl text-end'>Fun & Unpredictable,<br/> Outcomes</h3>
                <p className='font-raleway text-[#6E6E6E]'>When four people meet in real life.<br/> Events spin up many ways. Who knows<br/> where it could take you!</p>
            </div>
            <div>
                <img className='h-[15rem]' src={Camping} alt="libraryImage" />
            </div>
            
        </div>

        {/* For Mobile */}
        {/* Features */}
        <div className='mt-10 flex items-center justify-center space-x-20 max-sm:flex-col max-sm:space-x-0 max-sm:pl-4 max-sm:pr-4 sm:hidden' >
            <div>
                <img className='h-[13rem] max-sm:h-[10rem]' src={Library} alt="libearyImage" />
            </div>
            <div className='flex flex-col space-y-5 max-sm:pl-4 max-sm:pr-4'>
                <h3 className='font-custom text-3xl max-sm:hidden'>Safer, with a friend by your<br/> side</h3>
                <p className='font-poppins max-sm:hidden'>Unlike solo dating, you will have a known <br/> friend by your side, providing a much <br/>safer and more enjoyable experience.</p>
                {/* For Mobile */}
                <h3 className='font-raleway font-bold text-xl sm:hidden text-center'>More People, stick stronger</h3>
                <p className='font-raleway text-[#6E6E6E] sm:hidden text-center'>Unlike boring 1v1 chat where two people try push the conversation, group chats flow smoother and longer</p>
            </div>
        </div>

        <div className='mt-10 flex items-center justify-center space-x-20 max-sm:flex-col max-sm:space-x-0 max-sm:pl-4 max-sm:pr-4 sm:hidden' >
            <div>
                <img className='h-[13rem] max-sm:h-[10rem]' src={Movie} alt="movieImage" />
            </div>
            <div className='flex flex-col space-y-5 max-sm:pl-4 max-sm:pr-4'>
                <h3 className='font-custom text-3xl max-sm:hidden'>Safer, with a friend by your<br/> side</h3>
                <p className='font-poppins max-sm:hidden'>Unlike solo dating, you will have a known <br/> friend by your side, providing a much <br/>safer and more enjoyable experience.</p>
                {/* For Mobile */}
                <h3 className='font-raleway font-bold text-xl sm:hidden text-center'>Relaxed, as hanging out with friends</h3>
                <p className='font-raleway text-[#6E6E6E] sm:hidden text-center'>No-more lonely creeps of solo dating. Team Dating creates a easier laid-back and comfortable atmosphere.</p>
            </div>
        </div>

        <div className='mt-10 flex items-center justify-center space-x-20 max-sm:flex-col max-sm:space-x-0 max-sm:pl-4 max-sm:pr-4 sm:hidden' >
            <div>
                <img className='h-[13rem] max-sm:h-[10rem]' src={Camping} alt="campingImage" />
            </div>
            <div className='flex flex-col space-y-5 max-sm:pl-4 max-sm:pr-4'>
                <h3 className='font-custom text-3xl max-sm:hidden'>Safer, with a friend by your<br/> side</h3>
                <p className='font-poppins max-sm:hidden'>Unlike solo dating, you will have a known <br/> friend by your side, providing a much <br/>safer and more enjoyable experience.</p>
                {/* For Mobile */}
                <h3 className='font-raleway font-bold  text-xl sm:hidden text-center'>Fun & Unpredictable Outcomes</h3>
                <p className='font-raleway text-[#6E6E6E] sm:hidden text-center'>When four people meet in real life. Events spin up many ways. Who knows where it could take you!</p>
            </div>
        </div>
    </div>
  )
}

export default Features