import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqBox from "../components/FaqBox";
import FaqVector from "../assets/FaqVector.png";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-[#F5F0F8] pt-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <img
              className="h-[30rem] max-sm:h-[10rem]"
              src={FaqVector}
              alt="faqVectorImage"
            />
          </div>
          <div className="flex flex-col items-center justify-center pt-5">
            <h1 className="font-space max-sm:hidden text-center text-5xl">
              Frequently asked Questions
            </h1>
            <h1 className="font-space sm:hidden text-center text-3xl">FAQs</h1>
            <p className="font-inter pt-6 text-center max-sm:pl-4 max-sm:pr-4">
              Wondering how things work at Croxroads and how can you maximize
              your experience?
            </p>
          </div>
        </div>

        {/* Faq Section */}
        <div className="mt-24 max-sm:mt-20 flex flex-col items-center pb-5">
          <FaqBox
            question="What is a Team Dating App?"
            answer="A Team Dating App is a platform that allows two sets of friends to connect and arrange double dates together. It provides a fun and social way for people to meet and mingle with other like-minded individuals and couples."
          />
          <FaqBox
            question="How is safer than conventional dating apps?"
            answer="Team Dating apps are more secure than conventional dating apps since every user always have one friend all along the journey making it much more safer. Also every user is verified by expert team to check for catfishing or bots."
          />
          <FaqBox
            question="How does the Team Dating App work?"
            answer="The Double Dating App works by creating profiles for each individual or couple. Users can then search for other pairs based on shared interests, location, and preferences. Once a match is made, both pairs can chat and plan their double date through the app."
          />
          <FaqBox
            question="How can I team-up with a friend?"
            answer="It's super easy! You can team up with a friend by either using their team-up code or share your team-up code with them which they can enter while sign-up."
          />
          <FaqBox
            question="Does my teammate need to be the same gender identity as me?"
            answer="No! You can team-up with friends from opposite gender as well. While you team with opposite gender it is important to say if you guys are already a couple or not."
          />
          <FaqBox
            question="Can I join if I don't have a friend to team up?"
            answer="Yes! Croxroads has a solo mode which allows individuals to find other solo profile. Later when you have a friend to team-up with you can do that."
          />
          <FaqBox
            question="Can I team up with multiple friends?"
            answer="Yes! In Croxroads one can team-up with multiple friends and switch teams from within the application while swiping matches or group chats."
          />
          <FaqBox
            question="Can I switch between solo mode and team mode?"
            answer="Yes! You can switch between solo mode and team mode anytime in-between while using the application."
          />
          <FaqBox
            question="Can I use the Team Dating App if I'm single?"
            answer="Absolutely! The Team Dating App is designed to cater to both couples and single individuals who are interested in meeting new people and enjoying double dates. You can team up with another single friend and match up with other single teams of opposite gender mix."
          />
          <FaqBox
            question="Can we use Team Dating App if we are couple"
            answer="Yes! Croxroads also support couples who wants to meet other couples and discover teams to double date."
          />
          <FaqBox
            question="Some of my friends are already using Croxroads, how can I team up with them?"
            answer="You can request them to share their team-up code which you must enter while in sign-up procress. Once signed-up you will also have your team-up code which you can share with your who intent to pair up."
          />
          <FaqBox
            question="Is it free to use?"
            answer="Basic features in the application are free while some of the advanced features can be accessed by plus members."
          />
          <FaqBox
            question="How can I be Plus member?"
            answer="To become a plus member, you can either purchase a Plus Membership plan or pair-up with 5 friends to create 5 unique teams and avail a plus member plan for free."
          />
        </div>
        <div className="flex flex-col items-center justify-center pt-8">
          <h3 className="font-space text-center text-4xl max-sm:text-3xl">
            Further Query
          </h3>
          <p className="font-inter text-[#3E3E59] text-center pt-4 max-sm:pl-5 max-sm:pr-5">
            For further query reach out to us at the below mail address
          </p>
          <p className="font-poppins text-center pt-4 text-2xl pb-14 max-sm:text-xl">
            humans@croxroads.app
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
