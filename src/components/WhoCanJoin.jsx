import React from 'react';
import BoyA from "../assets/BoyA.png";
import BoyB from "../assets/BoyB.png";
import BoyC from "../assets/BoyC.png";

const WhoCanJoin = () => {
  return (
    <div className='mt-20 flex flex-col pl-10 pr-10 pb-20'>
        <div>
            <h4 className='font-custom text-3xl text-center'>Who can Join?</h4>
        </div>
        <div className='flex flex-row items-center justify-center  mt-10 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:space-y-8'>
            <div className='flex flex-col items-center justify-center space-y-5 '>
                <div><img className='h-[15rem]' src={BoyA} alt="boyImage"/></div>
                <div className='space-y-4'>
                    <h5 className='font-custom text-center text-xl'>Same Gender Team</h5>
                    <p className='font-poppins text-center text-xs'>Can be Friends,Colleagues or even cousins, a boys scout and a girls gang make a great team.</p>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center space-y-5' >
                <div><img className='h-[15rem]' src={BoyB} alt="boyImage"/></div>
                <div className='space-y-4'>
                    <h5 className='font-custom text-center text-xl'>Mix Gender Team</h5>
                    <p className='font-poppins text-center text-xs'>Sometimes you find a friend who might not be from same gender but share a great comrade.</p>

                </div>
            </div>

            <div className='flex flex-col items-center justify-center space-y-5'>
                <div><img className='h-[15rem]' src={BoyC} alt="boyImage"/></div>
                <div className='space-y-4'>
                    <h5 className='font-custom text-center text-xl'>Couple Team</h5>
                    <p className='font-poppins text-center text-xs '>Finding a partner should not stop you from meeting people. Couples love hanging out with other couples.</p>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoCanJoin