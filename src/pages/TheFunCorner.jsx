import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Paper from "../assets/PaperToy.png";
import PlayImage from "../assets/PlayImage.png";
// import PlayImageBackSide from "../assets/PlayImageBackside.png";
import { ImDownload3 } from "react-icons/im";
import "../pages/TheFunCorner.css";

const TheFunCorner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-[#F5F0F8] pt-8">
        <div className="flex flex-row gap-x-5 items-center justify-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-x-0">
          <div className="flex items-center justify-center">
            <img className="h-[20rem]" src={Paper} alt="PaperToyImage" />
          </div>
          <div className="flex flex-col items-start justify-start max-sm:flex max-sm:items-center">
            <h1 className="font-space text-center text-4xl">
              Print, Fold & Play
            </h1>
            <p className="font-inter text-[#3E3E59] text-start pt-5 max-sm:hidden">
              Discover the fun of our Foldable Origami Games, designed to
              <br />
              be shared with your Croxroads teammates and gangs.
            </p>
            <p className="font-inter text-[#3E3E59] text-center pt-5 sm:hidden">
              Discover the fun of our Foldable Origami Games, designed to be
              shared with your Croxroads teammates and gangs.
            </p>
          </div>
        </div>


        {/* <div className="bg-red-500 pb-10">
        <div className="flip bg-green-500">
          <div className="flip-content bg-yellow-300">
            <div className="flip-front">
              <img src={PlayImage} alt="PlayImage" />
            </div>
            <div className="flip-back">
              <img src={PlayImageBackSide} alt="PlayImageBackSide" />
            </div>
          </div>
        </div>
        <div>
          <p>Download PDF</p>
          <ImDownload3 />
        </div>
        </div> */}

        <div className="flex flex-col gap-y-20 items-center justify-center pb-10 max-sm:pt-12 max-sm:gap-y-0 max-sm:space-y-5">
          <div className="flex flex-row items-center justify-center space-x-20 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:space-x-0 max-sm:space-y-5">
            <div className="flex flex-col items-center justify-center rounded-xl bg-white shadow-lg">
              <div className="p-5">
                <img className="h-[20rem]" src={PlayImage} alt="PlayImage" />
              </div>
              <div className="flex flex-row items-center justify-center gap-x-3 px-10 py-2 bg-[#662AB6] rounded-lg mb-5">
                <p className="font-poppins font-semibold text-white">Download PDF</p>
                <ImDownload3 style={{color:'white'}}/>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl bg-white shadow-lg">
              <div className="p-5">
                <img className="h-[20rem]" src={PlayImage} alt="PlayImage" />
              </div>
              <div className="flex flex-row items-center justify-center gap-x-3 px-10 py-2 bg-[#662AB6] rounded-lg mb-5">
                <p className="font-poppins font-semibold text-white">Download PDF</p>
                <ImDownload3 style={{color:'white'}}/>
              </div>
            </div>
          </div>


          <div className="flex flex-row items-center justify-center space-x-20 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:space-x-0 max-sm:space-y-5">
            <div className="flex flex-col items-center justify-center rounded-xl bg-white shadow-lg">
              <div className="p-5">
                <img className="h-[20rem]" src={PlayImage} alt="PlayImage" />
              </div>
              <div className="flex flex-row items-center justify-center gap-x-3 px-10 py-2 bg-[#662AB6] rounded-lg mb-5">
                <p className="font-poppins font-semibold text-white">Download PDF</p>
                <ImDownload3 style={{color:'white'}}/>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl bg-white shadow-lg">
              <div className="p-5">
                <img className="h-[20rem]" src={PlayImage} alt="PlayImage" />
              </div>
              <div className="flex flex-row items-center justify-center gap-x-3 px-10 py-2 bg-[#662AB6] rounded-lg mb-5">
                <p className="font-poppins font-semibold text-white">Download PDF</p>
                <ImDownload3 style={{color:'white'}}/>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-8">
          <div className="flex flex-col items-center justify-center space-y-3">
            <h4 className="font-space text-4xl text-center">How to fold?</h4>
            <p className="font-inter text-[#3E3E59] max-sm:hidden text-center">Step by Step Instructions to make your very own fortune teller <br/>and have cute little fun with your gang.</p>
            <p className="font-inter text-xs text-[#3E3E59] sm:hidden text-center pl-10 pr-10">Step by Step Instructions to make your very own fortune teller and have cute little fun with your gang.</p>
          </div>

          <div className="mt-8 pb-20 flex items-center justify-center">
          <iframe className="rounded-2xl max-sm:w-[18rem] max-sm:h-[10rem]" width="560" height="315" src="https://www.youtube.com/embed/CODnVX7VAZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TheFunCorner;
