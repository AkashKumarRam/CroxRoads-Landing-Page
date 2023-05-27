import React,{useEffect} from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Blogs from '../components/Blogs';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar/>
      <Blogs/>
      <Footer/>
    </>
  )
}

export default Blog