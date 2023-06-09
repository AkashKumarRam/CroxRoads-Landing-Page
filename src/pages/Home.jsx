import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Features from '../components/Features'
import Working from '../components/Working'
import WhoCanJoin from '../components/WhoCanJoin'
import DownloadUs from '../components/DownloadUs'
import Footer from '../components/Footer'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar/>
      <Header/>
      <Features/>
      <Working/>
      <WhoCanJoin/>
      <DownloadUs/>
      <Footer/>
    </>
  )
}

export default Home