import React, { useState, useRef } from "react";
import img12 from "../../assets/img/img12.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link as Element } from "react-scroll";
import aloeferox from "../../assets/Jigsingmur imgs/aloeferox.png";
import img3 from "../../assets/img/img3.png";
import img4 from "../../assets/img/img4.jpeg";
import ImgMenu from "../../assets/img/ImgMenu.svg";
import close from "../../assets/img/close.svg";
import img6 from "../../assets/img/img6.jpg";
import auntyjayz2 from "../../assets/Jigsinmur logos/auntyjayz2.jpg";
import pp from "../../assets/img/pp.png";
import YoutubeEmbed from "./YoutubeEmbed";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

function App() {
  const [showFullText, setShowFullText] = useState(false);
  const [showSideBarMenu, setShowSideBarMenu] = React.useState(false);

  const toggleSideBar = () => {
    setShowSideBarMenu((prevState) => !prevState);
  };

  const handleNavigationClick = () => {
    setShowSideBarMenu(false); 
  };

  const videoId = "EdcgHfIYL9M";
  const videoId1 = "0jIVO6zsrcc";
  const videoId2 = "1l58O2UNQgE";
  const emailButtonRef = useRef(null);
  const handleClick = () => {
    const email = "mailto:ruthinasconcept1@gmail.com";
    window.location.href = email; 
  };

  return (
    <div>
      <nav className="bg-white h-48 text-white shadow-md fixed top-0 w-full z-50">
        <ul className="flex justify-between items-center w-full list-none pt-20 ">
          <li className="h-16">
            <Element
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center w-48 h-48 cursor-pointer mt-2 px-8 absolute bottom-4 text-base lg:text-xl font-lato font-lato-regular"
            >
              <img src={auntyjayz2} alt="site logo" />
            </Element>
            <p className="text-green-800 px-12 pt-16 font-semibold font-lato ">
              JIGSINMUR
            </p>
          </li>
          {/* Conditionally render hamburger menu for screen width less than 800px */}
          <li className="h-16 lg:hidden">
            <Element
              onClick={toggleSideBar}
              className="flex items-center bg-green-800 border-none mr-20 cursor-pointer px-4 rounded mt-4 py-2"
            >
              <img
                src={ImgMenu}
                id="open-harmburger"
                alt="side menu"
                style={{ filter: "invert(100%)" }}
              />
            </Element>
          </li>
          <li className="h-16 hidden lg:block pt-4 mr-8 items-center justify-center">
            <ul className="flex justify-between items-center list-none">
              <li>
                <Element
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleNavigationClick}
                  className="cursor-pointer px-4 py-4 rounded text-sm text-teal-800 font-lato font-lato-regular hover:bg-gray-200 "
                >
                  HOME
                </Element>
              </li>
              <li>
                <Element
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleNavigationClick}
                  className="cursor-pointer px-4 py-4 rounded text-sm font-lato font-lato-regular text-green-800 hover:bg-gray-200 "
                >
                  ABOUT JIGSINMUR
                </Element>
              </li>
              <li>
                <Element
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleNavigationClick}
                  className="cursor-pointer px-4 py-4 rounded text-sm font-lato font-lato-regular text-green-800 hover:bg-gray-200 "
                >
                  BENEFITS
                </Element>
              </li>
              <li>
                <Element
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleNavigationClick}
                  className="cursor-pointer px-4 py-4 rounded text-sm font-lato font-lato-regular text-green-800 hover:bg-gray-200 "
                >
                  STORE
                </Element>
              </li>
              <li>
                <Element
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleNavigationClick}
                  className="cursor-pointer px-4 py-4 rounded text-sm font-lato font-lato-regular text-green-800 hover:bg-gray-200 "
                >
                  CONTACT
                </Element>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <nav
        className={`fixed top-0 right-0 h-screen w-64 z-50 bg-white bg-opacity-20 shadow-lg backdrop-filter backdrop-blur-md ${
          showSideBarMenu ? "" : "hidden"
        }`}
      >
        {/* Close button for the side menu */}
        <ul className="flex flex-col justify-start items-start overflow-auto w-full list-none">
          <li className="h-16 mr-auto">
            <Element
              onClick={toggleSideBar}
              className="flex items-center bg-green-800 border-none mr-20 cursor-pointer px-4 ml-6 rounded mt-4 py-2"
            >
              <img
                src={close}
                id="close-harmburger"
                alt="side menu"
                style={{ filter: "invert(100%)" }}
              />
            </Element>
          </li>
          {/* Navigation links */}
          <li className="h-16 w-full">
            <Element
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleNavigationClick}
              className="flex items-center hover:bg-green-800 hover:text-white text-green-900 cursor-pointer px-6 text-sm font-lato font-lato-regular mt-2 py-2 "
            >
              HOME
            </Element>
          </li>
          <li className="h-16 w-full">
            <Element
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleNavigationClick}
              className="flex items-center hover:bg-green-800 hover:text-white text-green-900  cursor-pointer  px-6 text-sm font-lato font-lato-regular mt-2 py-2 "
            >
              ABOUT
            </Element>
          </li>
          <li className="h-16 w-full">
            <Element
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleNavigationClick}
              className="flex items-center hover:bg-green-800 hover:text-white text-green-900  cursor-pointer  px-6 text-sm font-lato font-lato-regular mt-2 py-2 "
            >
              SERVICES
            </Element>
          </li>
          <li className="h-16 w-full">
            <Element
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleNavigationClick}
              className="flex items-center hover:bg-green-800 hover:text-white text-green-900  cursor-pointer  px-6 text-sm font-lato font-lato-regular mt-2 py-2 "
            >
              PORTFOLIO
            </Element>
          </li>
          <li className="h-16 w-full">
            <Element
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleNavigationClick}
              className="flex items-center hover:bg-green-800 hover:text-white text-green-900  cursor-pointer  px-6 text-sm font-lato font-lato-regular mt-2 py-2 "
            >
              CONTACT
            </Element>
          </li>
        </ul>
      </nav>

      <Element name="home">
        <section className="h-screen relative">
          <div className="absolute inset-0 bg-black opacity-80"></div>{" "}
          {/* Black overlay with opacity */}
          <div
            className={`absolute inset-0 bg-cover bg-no-repeat flex justify-center items-center text-white `}
            // style={{ backgroundImage: `url(${aloeferox})` }}
            style={{
              backgroundImage: `url(${aloeferox}), url(overlay.jpg) rgba(0, 0, 0, 0.3)`,
              backgroundBlendMode: "multiply",
            }}
          >
            <div className="relative text-center bottom-24 z-20 bg-slate-700 rounded-md p-2">
              {" "}
              {/* Adjust opacity here */}
              <h1 className="text-6xl mb-1 text-white font-lato font-lato-normal">
                HI, I'M RUTHINAS
              </h1>
              <p className="text-xl text-white font-lato font-lato-normal">
                VOICE OVER ARTIST & VIDEO PRESENTER
              </p>
            </div>
          </div>
        </section>
      </Element>
      <Element
        name="about"
        showFullText={showFullText}
        setShowFullText={setShowFullText}
      >
        <section className="h-auto shadow-2xl rounded-md flex m-12 flex-col md:px-24 bg-gray-500 justify-center items-center text-center text-1xl">
          <h2 className="text-3xl mt-12 text-blue-400 font-lato font-lato-normal ">
            A LITTLE BIT ABOUT ME
          </h2>
          <img
            src={img3}
            alt="About Me"
            className="mt-4 mx-auto"
            style={{ width: "200px", height: "200px" }}
          />
          <div className="">
            <p className="mt-8 mb-4 lg:px-64 text-white font-lato font-lato-normal">
              Hello! I'm Ruthinas, a talented Multi-faceted Performer. I love
              telling stories and captivating audiences with my dynamic voice
              and charming on-screen presence. With years of experience, I
              specialize in creating professional voice-overs....{" "}
              {/* Truncated content */}
              {showFullText && (
                <p>
                  for commercials, narration, audiobooks, animations, and more.
                  Whether you need a warm, authoritative voice for your brand or
                  a playful, animated tone for characters, I've got you covered.
                  As a skilled video presenter, I shine in front of the camera,
                  delivering polished performances that resonate with
                  viewers.From corporate training videos to online tutorials and
                  product demos to event hosting, I excel in creating engaging
                  content that educates, entertains, and inspires. I'm dedicated
                  to excellence and exceeding client expectations. I'm excited
                  to collaborate with you to bring your project vision to life.
                  Let's create something unforgettable together!
                </p>
              )}
            </p>
            <button
              className="text-blue-400 border p-2 mb-12 rounded font-lato font-lato-normal hover:border-none hover:bg-gray-600"
              onClick={() => setShowFullText(!showFullText)}
            >
              {showFullText ? "show less" : "show more"}
            </button>
          </div>
        </section>
      </Element>
      <Element name="services">
        <section className="h-auto shadow-2xl rounded-md m-12 px-4 lg:px-12 py-24 bg-gray-100  flex flex-col  justify-center items-center text-center text-1xl">
          <h2 className="text-3xl font-lato font-lato-normal pt-8 pb-8 ">
            WHAT I DO
          </h2>
          <div className="flex w-full justify-between mx-64 gap-12 flex-col lg:flex-row">
            <div class=" px-4 flex flex-col rounded-md shadow-lg shadow-black/30 ">
              <div class="flex flex-col relative top-4 items-center">
                <div class="flex text-white items-center justify-center p-8">
                  <img
                    src={img4}
                    alt="voice over artist"
                    className="h-48 w-48 rounded-full"
                  />
                </div>
                <h3 class="font-lato w-full text-blue-900 font-lato-normal text-2xl">
                  VOICE OVER ARTIST
                </h3>
                <span className="font-lato font-lato-regular text-sm text-blue-900 pb-8">
                  <em>Captivating Narrator. Engaging Storyteller.</em>
                </span>
              </div>
              <p class="top-4 font-lato font-lato-normal">
                Voice over artist with a passion for crafting impactful audio
                experiences. Whether breathing life into character, narrating
                documentaries,or delivering persuasive messages for commercials,
                I use my clear, versatile voice to connect with your audience
                and elevate your project. <br />
                <span className="font-lato text-sm font-lato-regular mt-2 text-blue-950">
                  <em>...bringing your vision to life with my voice.</em>
                </span>
                <br />
                <br />
              </p>
            </div>
            <div class=" px-4 flex flex-col  rounded-md shadow-lg shadow-black/30 ">
              <div class="flex flex-col relative top-4 items-center">
                <div class="flex text-white items-center justify-center p-8">
                  <img
                    src={img6}
                    alt="voice over artist"
                    className="h-48 w-48 rounded-full"
                  />
                </div>
                <h3 class=" font-lato w-full text-blue-900 font-lato-normal text-2xl">
                  BRAND INFLUENCER
                </h3>
                <span className="font-lato font-lato-regular text-sm text-blue-900 pb-8">
                  <em>Lifestyle Enthusiast. Trusted Brand Partner.</em>
                </span>
              </div>
              <p class="top-4 font-lato font-lato-normal">
                "I'm a creative influencer who excels at spotlighting innovative
                products, captivating audiences with authentic content and
                genuine charisma. My focus is on building trust and forging
                connections between brands and their target communities."
                <br />
                <span className="font-lato text-sm font-lato-regular mt-2 text-blue-950">
                  <em>...connecting brands with communities.</em>
                </span>
                <br />
              </p>
            </div>
            <div class=" px-4 flex flex-col  rounded-md shadow-lg shadow-black/30 ">
              <div class="flex flex-col relative top-4 items-center">
                <div class="flex text-white items-center justify-center p-8">
                  <img
                    src={img12}
                    alt="voice over artist"
                    className="h-48 w-48 rounded-full"
                  />
                </div>
                <h3 class=" font-lato w-full text-blue-900 font-lato-normal text-2xl">
                  SOCIAL MEDIA MANAEGMANT
                </h3>
                <span className="font-lato font-lato-regular text-sm text-blue-900 pb-9">
                  <em>Social Media Strategist. Content Creator.</em>
                </span>
              </div>
              <p class="top-4 font-lato font-lato-normal">
                I specialize in empowering brands to flourish in the digital
                realm! Through meticulous data-driven strategies, compelling
                content creation, and adept management across platforms, I
                ensure your online presence shines. Let's collaborate to enhance
                brand visibility and cultivate devoted communities. <br />
                <span className="font-lato text-sm font-lato-regular mt-2 text-blue-950">
                  <em>...I turn followers into fans for your brand.</em>
                </span>
                <br />
              </p>
            </div>
          </div>
        </section>
      </Element>
      <Element name="portfolio">
        <section className="h-auto shadow-2xl rounded-md pl-52 pr-48 pb-52 bg-gray-100 flex flex-col justify-center items-center text-center text-1xl">
          <h2 className="text-3xl font-lato font-lato-normal pt-8 pb-8 ">
            PORTFOLIO
          </h2>
          <div className="flex w-full flex-col lg:flex-row  justify-between mx-64 gap-12 items-center ">
            <Card
              hoverable
              style={{ width: 380 }}
              cover={<YoutubeEmbed videoId={videoId} />}
            >
              <Meta
                title="Renda Animation Conference Submit 2024"
                description="www.rendacon.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 380 }}
              cover={<YoutubeEmbed videoId={videoId1} />}
            >
              <Meta title="Aquafina Water" description="www.aquafina.com" />
            </Card>
            <Card
              hoverable
              style={{ width: 380 }}
              cover={<YoutubeEmbed videoId={videoId2} />}
            >
              <Meta title="Real Estate" description="www.amestate.com" />
            </Card>
          </div>
        </section>
      </Element>
      <Element name="contact">
        <section className="h-auto shadow-2xl rounded-md m-12 px-12 py-24 bg-gray-100 justify-center items-center text-center text-1xl relative">
          <div className="grid place-items-center">
            <img
              src={pp}
              alt="paper-plane"
              className="h-14 w-14 absolute top-0 animate-drop"
            />
            <h2 className="text-3xl font-lato font-lato-normal pt-8 pb-8 ">
              GET IN TOUCH!
            </h2>
            <p className="font-lato font-lato-normal text-base">
              DIscuss your needs. Feel free to send me an email to explore{" "}
              <br /> how I can contribute to your vision.
            </p>
            <div className="mt-8 px-6 py-3 border-2 border-black hover:bg-blue-900 hover:border-none hover:text-white transition duration-500">
              <button
                id="email-button"
                ref={emailButtonRef}
                onClick={handleClick}
              >
                Say Hello
              </button>
            </div>
          </div>
        </section>
      </Element>
      <footer className="bg-gray-900 h-64 flex flex-col justify-center items-center text-white">
        <div className="justify-center items-center mb-2 ">
          <a
            href="https://www.instagram.com/ruthinasconceptz?utm_source=qr"
            id="instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-solid fa-brands fa-instagram rounded-md bg-neutral-700 p-4 m-1 hover:bg-gray-400"></i>
          </a>
          <a
            href="https://wa.me/08182128516"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-solid rounded-md fa-brands fa-whatsapp bg-neutral-700 p-4 m-1 hover:bg-gray-400"></i>
          </a>
        </div>
        <Element to="home" spy={true} smooth={true} duration={500}>
          <i class="fa fa-rocket" aria-hidden="true"></i>
        </Element>
        &copy; 2024 Ruthinas Concepts
      </footer>
    </div>
  );
}

export default App;
