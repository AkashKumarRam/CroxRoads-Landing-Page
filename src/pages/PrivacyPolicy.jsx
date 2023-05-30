import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Privacy from '../components/Privacy';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar/>
        <div className='bg-[#F5F0F8]'>
            <Privacy/>
        </div>
      <Footer/>
    </>
  )
}

export default PrivacyPolicy