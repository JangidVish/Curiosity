"use client"
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import Services from './components/Services';
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import AboutUs from "./components/AboutUs";
import Contact from "./components/ContactUs/Contact";
import CuriosityLogo from "../../public/Curiosity logo.png";
import Feedback from './components/FeedbackCrausal'
import Image from "next/image";
import Pravi from "../../public/Logo.png";
import Founders from "./components/Founders";

const aboutUs = "At Curiosity, we are dedicated to igniting the inquisitive spirit within every learner and innovator. As a parent company to various educational and product-based platforms, our mission is to be a catalyst for shaping the future of our tech-savvy nation while staying rooted in our rich cultural heritage. We believe that advancements in technology and our ancient culture can go hand in hand, creating a unique blend of innovation and tradition. Join us as we foster a generation of thinkers and creators, committed to making a meaningful impact on the world."

const projects = [
  {
    title: "Pravi",
    description: "Pravi, embodying the essence of mindfulness like a focused river carving through mountains, nurtures young minds under Curiosity's guidance. We channel curiosity into mindful innovation, teaching the importance of Intellectual Property Rights. Through our programs, we cultivate growth and development, empowering our champs to navigate the future with wisdom and creativity, transforming their ideas into lasting legacies.",
    link: "/parvi",
    learnmore: true,
    img: "/Logo.png"
  },
  {
    title: "Our Product Based Platform",
    description: "Coming Soon...",
    link: "/",
  },
]

const Home=()=> {
  const [showStarterPage, setShowStarterPage] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const starterPageTimeout = setTimeout(() => {
      setShowStarterPage(false);
      setShowContent(true);
    }, 3000);

    return () => {
      clearTimeout(starterPageTimeout);
    };
  }, []);

  return (
    <>
      {showStarterPage && (
        <div className='startPage min-h-screen bg-black flex flex-row items-center justify-center'>
          <div className="logo">
            <Image src={CuriosityLogo} alt="logo" />
          </div>
        </div>
      )}
      {
        showPopup && (
          <div className="popup-overlay w-full min-h-screen bg-slate-400 z-50 absolute overflow-y-hidden overflow-x-hidden">
            <div className="popup-content w-full min-h-screen flex align-middle justify-center content-center items-center">
              <div className="close-icon text-3xl text-red-700 font-bold right-10 md:right-28 md:top-10 top-20 absolute cursor-pointer" onClick={closePopup}>X</div>
            
                <Image src="/popUpCuriosity.jpg" alt="" width={5000} height={100} className="md:w-3/4 h-fit rounded-md mb-10"/>
          
            </div>
          </div>
        )
      }
      {!showPopup &&  (
        <div>
          <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
            <Navbar />
            <HeroSection title="Curiosity" content="Your curiosity our solutions" />
            <AboutUs description={aboutUs} url={CuriosityLogo} />
            <Services array={projects} Heading="Services" />
            {/* <Projects /> */}
            {/* <Testimonals /> */}
            <Feedback />
            <Founders />
            <Contact />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}

export default Home