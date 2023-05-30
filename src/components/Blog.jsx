import React from 'react';
import {AiFillEye} from "react-icons/ai";
import Thumbnail from "../assets/Thumbnail.png";
import { useNavigate } from 'react-router-dom';


const Blog = () => {
    const navigate = useNavigate();
  return ( 
    <div className='flex flex-row flex-wrap items-center justify-center gap-4 mt-12 pl-2 pr-2 pb-4 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:pl-3 max-sm:pr-3 max-sm:space-y-3 max-sm:space-x-0 maxx-sm:gap-0'>       
        <div onClick={() => navigate("/doubledating")}  className='w-3/12 cursor-pointer flex flex-col items-center justify-center space-y-5 border-[1px] shadow-xl bg-white border-slate-800 rounded-xl max-sm:w-full pb-2'>
            <div className='w-full flex flex-row items-center justify-between  pl-4 pr-4 mt-2'>
            <div>
                <p className='font-poppins'>Read Full</p>
                
            </div>
            <div className='flex flex-row items-center space-x-2'>
            <AiFillEye/>
            <p className='font-poppins'>144K</p>
            </div>
            </div>
            <div>
                <img className='h-[10rem] max-sm:h-[11rem] pl-2 pr-2' src={Thumbnail} alt='articleThumbnail'/>
            </div>
            <div>
                <h2 className='font-poppins text-xl text-center font-bold pl-2 pr-2'>From Bottles to Blockchain: Coca-Cola's NFT Marketing Experiment</h2>
            </div>
        </div>

        <div className='w-3/12 flex flex-col items-center justify-center space-y-5 border-[1px] shadow-xl bg-white border-slate-800 rounded-xl max-sm:w-full pb-2'>
            <div className='w-full flex flex-row items-center justify-between  pl-4 pr-4 mt-2'>
            <div>
                <p className='font-poppins'>Read Full</p>
                
            </div>
            <div className='flex flex-row items-center space-x-2'>
            <AiFillEye/>
            <p className='font-poppins'>144K</p>
            </div>
            </div>
            <div>
                <img className='h-[10rem] max-sm:h-[11rem] pl-2 pr-2' src={Thumbnail} alt='articleThumbnail'/>
            </div>
            <div>
                <h2 className='font-poppins text-xl text-center font-bold pl-2 pr-2'>From Bottles to Blockchain: Coca-Cola's NFT Marketing Experiment</h2>
            </div>
        </div>

        <div className='w-3/12 flex flex-col items-center justify-center space-y-5 border-[1px] shadow-xl bg-white border-slate-800 rounded-xl max-sm:w-full pb-2'>
            <div className='w-full flex flex-row items-center justify-between  pl-4 pr-4 mt-2'>
            <div>
                <p className='font-poppins'>Read Full</p>
                
            </div>
            <div className='flex flex-row items-center space-x-2'>
            <AiFillEye/>
            <p className='font-poppins'>144K</p>
            </div>
            </div>
            <div>
                <img className='h-[10rem] max-sm:h-[11rem] pl-2 pr-2' src={Thumbnail} alt='articleThumbnail'/>
            </div>
            <div>
                <h2 className='font-poppins text-xl text-center font-bold pl-2 pr-2'>From Bottles to Blockchain: Coca-Cola's NFT Marketing Experiment</h2>
            </div>
        </div>


        <div className='w-3/12 flex flex-col items-center justify-center space-y-5 border-[1px] shadow-xl bg-white border-slate-800 rounded-xl max-sm:w-full pb-2'>
            <div className='w-full flex flex-row items-center justify-between  pl-4 pr-4 mt-2'>
            <div>
                <p className='font-poppins'>Read Full</p>
                
            </div>
            <div className='flex flex-row items-center space-x-2'>
            <AiFillEye/>
            <p className='font-poppins'>144K</p>
            </div>
            </div>
            <div>
                <img className='h-[10rem] max-sm:h-[11rem] pl-2 pr-2' src={Thumbnail} alt='articleThumbnail'/>
            </div>
            <div>
                <h2 className='font-poppins text-xl text-center font-bold pl-2 pr-2'>From Bottles to Blockchain: Coca-Cola's NFT Marketing Experiment</h2>
            </div>
        </div>


        <div className='w-3/12 flex flex-col items-center justify-center space-y-5 border-[1px] shadow-xl bg-white border-slate-800 rounded-xl max-sm:w-full pb-2'>
            <div className='w-full flex flex-row items-center justify-between  pl-4 pr-4 mt-2'>
            <div>
                <p className='font-poppins'>Read Full</p>
                
            </div>
            <div className='flex flex-row items-center space-x-2'>
            <AiFillEye/>
            <p className='font-poppins'>144K</p>
            </div>
            </div>
            <div>
                <img className='h-[10rem] max-sm:h-[11rem] pl-2 pr-2' src={Thumbnail} alt='articleThumbnail'/>
            </div>
            <div>
                <h2 className='font-poppins text-xl text-center font-bold pl-2 pr-2'>From Bottles to Blockchain: Coca-Cola's NFT Marketing Experiment</h2>
            </div>
        </div>   


        <div className='w-3/12 flex flex-col items-center justify-center space-y-5 border-[1px] shadow-xl bg-white border-slate-800 rounded-xl max-sm:w-full pb-2'>
            <div className='w-full flex flex-row items-center justify-between  pl-4 pr-4 mt-2'>
            <div>
                <p className='font-poppins'>Read Full</p>
                
            </div>
            <div className='flex flex-row items-center space-x-2'>
            <AiFillEye/>
            <p className='font-poppins'>144K</p>
            </div>
            </div>
            <div>
                <img className='h-[10rem] max-sm:h-[11rem] pl-2 pr-2' src={Thumbnail} alt='articleThumbnail'/>
            </div>
            <div>
                <h2 className='font-poppins text-xl text-center font-bold pl-2 pr-2'>From Bottles to Blockchain: Coca-Cola's NFT Marketing Experiment</h2>
            </div>
        </div>
      
    </div>
  )
}

export default Blog