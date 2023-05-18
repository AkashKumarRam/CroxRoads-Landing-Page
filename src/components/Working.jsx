import React from 'react';
import Chatting from "../assets/Chatting.png";
import Talking from "../assets/Talking.png";
import GroupChat from "../assets/GroupChat.png";
import GroupChatting from "../assets/GroupChatting.png";
import CampChat from "../assets/CampChat.png";

const Working = () => {
  return (
    <div className='bg-[#F5F0F8] pt-[5rem] pb-20'>
        <div>
            <h1 className='font-custom text-4xl text-center max-sm:text-2xl'>How does it work?</h1>
        </div>
        <div  className='mt-[8rem] flex flex-row items-center justify-center space-x-20 max-sm:flex max-sm:flex-col max-sm:space-x-0 max-sm:mt-[5rem] max-sm:space-y-8 max-sm:pl-5 max-sm:pr-5'>
        <div>
            <img className='h-[20rem] max-sm:h-[15rem]' src={Chatting} alt='chatting'/>
        </div>
        <div className='max-sm:space-y-5 space-y-4'>
            <h2 className="font-custom text-2xl max-sm:text-center" >Join Croxroads</h2>
            <p className='font-poppins max-sm:hidden'>Join a new exciting way of meeting people!<br/> Where four lives cross their paths to create a <br/>lasting experiences and relationships for lives.</p>
            <p className='font-poppins text-center sm:hidden'>Join a new exciting way of meeting people! Where four lives cross their paths to create a lasting experiences and relationships for lives.</p>
        </div>
        </div>

        {/* Second For Desktop */}
        <div  className='mt-[8rem] flex flex-row-reverse items-center justify-center space-x-20 max-sm:hidden'>
            <div className='flex  items-center justify-center space-x-20'>
            <div className='space-y-4'>
            <h2 className="font-custom text-end text-2xl " >Team Up with your friend</h2>
            <p className='font-poppins text-end '>Pair up and enjoy the company of your<br/> friend while explore our diverse <br/>community of like-minded teams. </p>
        </div>
        <div>
            <img className='h-[20rem] max-sm:h-[15rem]' src={Talking} alt='chatting'/>
        </div>
        
        </div>
        </div>

        {/* Second For Mobile */}
        <div  className='mt-[8rem] sm:hidden flex flex-row-reverse items-center justify-center space-x-20 max-sm:flex max-sm:flex-col max-sm:space-x-0 max-sm:mt-[5rem] max-sm:space-y-8 max-sm:pl-5 max-sm:pr-5'>
        <div>
            <img className='h-[20rem] max-sm:h-[15rem]' src={Talking} alt='Talking'/>
        </div>
        <div className='max-sm:space-y-5'>
            <h2 className="font-custom text-end text-2xl max-sm:text-center" >Team Up with your friend</h2>
            <p className='font-poppins max-sm:hidden text-end'>Pair up and enjoy the company of your <br/>friend while explore our diverse <br/>community of like-minded teams. </p>
            <p className='font-poppins text-center sm:hidden'>Pair up and enjoy the company of your friend while explore our diverse community of like-minded teams. </p>
        </div>
        </div>

        {/* Third For Desktop */}
        <div  className='mt-[8rem] flex flex-row items-center justify-center space-x-20 max-sm:flex max-sm:flex-col max-sm:space-x-0 max-sm:mt-[5rem] max-sm:space-y-8 max-sm:pl-5 max-sm:pr-5'>
        <div>
            <img className='h-[20rem] max-sm:h-[15rem]' src={GroupChat} alt='chatting'/>
        </div>
        <div className='max-sm:space-y-5 space-y-4'>
            <h2 className="font-custom text-2xl max-sm:text-center" >Get Matched with other Teams</h2>
            <p className='font-poppins max-sm:hidden'>Send your request to express your interest.<br/> Once the other team accept, start a group <br/>chat and get to know each other better.</p>
            <p className='font-poppins text-center sm:hidden'>Send your request to express your interest. Once the other team accept, start a group chat and get to know each other better.</p>
        </div>
        </div>


        {/* Fourth For Desktop */}
        <div  className='mt-[8rem] flex flex-row-reverse items-center justify-center space-x-20 max-sm:hidden'>
            <div className='flex  items-center justify-center space-x-20'>
            <div className='space-y-4'>
            <h2 className="font-custom text-end text-2xl " >Plan Meet-up in Group Chat</h2>
            <p className='font-poppins text-end '>Get on to the group chat and share your<br/> interests, plan activities, and get excited about<br/> your upcoming meet-up!  </p>
        </div>
        <div>
            <img className='h-[20rem] max-sm:h-[15rem]' src={GroupChatting} alt='chatting'/>
        </div>
        
        </div>
        </div>

        {/* Fourth For Mobile */}
        <div  className='mt-[8rem] sm:hidden flex flex-row-reverse items-center justify-center space-x-20 max-sm:flex max-sm:flex-col max-sm:space-x-0 max-sm:mt-[5rem] max-sm:space-y-8 max-sm:pl-5 max-sm:pr-5'>
        <div>
            <img className='h-[20rem] max-sm:h-[15rem]' src={GroupChatting} alt='Talking'/>
        </div>
        <div className='max-sm:space-y-5'>
            <h2 className="font-custom text-end text-2xl max-sm:text-center" >Plan Meet-up in Group Chat</h2>
            <p className='font-poppins max-sm:hidden text-end'>Pair up and enjoy the company of your <br/>friend while explore our diverse <br/>community of like-minded teams. </p>
            <p className='font-poppins text-center sm:hidden'>Get on to the group chat and share your interests, plan activities, and get excited about your upcoming meet-up!  </p>
        </div>
        </div>

        {/* Fifth For Desktop */}
        <div  className='mt-[8rem] flex flex-row items-center justify-center space-x-20 max-sm:flex max-sm:flex-col max-sm:space-x-0 max-sm:mt-[5rem] max-sm:space-y-8 max-sm:pl-5 max-sm:pr-5'>
        <div>
            <img className='h-[20rem] max-sm:h-[15rem]' src={CampChat} alt='chatting'/>
        </div>
        <div className='max-sm:space-y-5 space-y-4'>
            <h2 className="font-custom text-2xl max-sm:text-center" >Gang Up & Party Out</h2>
            <p className='font-poppins max-sm:hidden'>Meet other teams in real life and form a gang <br/> that sticks into a life long friendship and <br/>frequent parties</p>
            <p className='font-poppins text-center sm:hidden'>Meet other teams in real life and form a gang that sticks into a life long friendship and frequent parties</p>
        </div>
        </div>
    </div>
  )
}

export default Working