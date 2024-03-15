import * as React from "react"
import { Link } from "gatsby"
import fara from "../../assets/image/fara.png"
import jepbura from "../../assets/image/jepbura.png"
// import bg from "../../assets/gif/bg2.webp"
import about from "../../assets/gif/about.webp"
import PageTitle from "../pageTitle"

export default function AboutUs() {
  return (
    // <div className="w-full min-h-screen relative">
    //   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-left">
    <div
      // style={{
      //   backgroundImage: `url(${bg})`,
      //   backgroundRepeat: "no-repeat",
      //   // backgroundAttachment: 'fixed',
      //   backgroundSize: "100% 100%",
      // }}
      className="w-full min-h-screen flex flex-col justify-center items-center relative"
    >
      <PageTitle title={"About"} />
      <img
        className="w-3/4 sm:w-1/3 mt-32 mb-20 sm:absolute sm:top-0 sm:right-0 sm:mt-0"
        src={about}
        alt="about"
      />

      <span className="text-bios-header font-bios text-center text-14 mb-40 sm:mt-96 animate-textTyping overflow-hidden whitespace-nowrap">
        We are BURA
      </span>
      <span className="text-bios-header font-bios text-center text-10 leading-4">
        Two individuals that offer creative, helpful and intuitive products.
      </span>
      <span className="text-bios-header font-bios text-10 mt-20 mb-20 sm:p-40 text-center tracking-wide leading-4 sm:text-justify">
        We are a group of passionate and lively people who love and enjoy
        creativity and being helpful.
        <br />
        <br />
        Mobile app development, web development, IoT and Embedded development
        are some of the services that we provide.
        <br />
        <br />
        Our clients come from different industries including Retail, HealthTech,
        Blockchain, FinTech and more.
        <br />
        <br />
      </span>
      <span className="text-bios-header font-bios text-10 text-center mb-20">
        Let's make it happen!
      </span>

      <div className="p-2 m-2 flex flex-col sm:flex-row justify-center items-center">
        {/* ****************************************** */}
        <div className="border-spacing-4 border-4 m-10 border-bios-header rounded-4">
          <div className="p-2 m-2 flex flex-col justify-center items-center">
            <img
              className="w-128 mt-4 mb-4 rounded-4"
              src={jepbura}
              alt="jepbura"
            />

            <div className="flex flex-wrap flex-row justify-center items-center">
              <Link
                className="m-4"
                target="_blank"
                to="https://www.instagram.com/jepbura/"
              >
                <i className="bx bxl-instagram"></i>
              </Link>
              <Link
                className="m-4"
                target="_blank"
                to="https://www.facebook.com/jepbura/"
              >
                <i className="bx bxl-facebook"></i>
              </Link>
              <Link className="m-4" target="_blank" to="https://t.me/jepbura">
                <i className="bx bxl-telegram"></i>
              </Link>
              <Link
                className="m-4"
                target="_blank"
                to="https://www.youtube.com/channel/UCAuHfV-1WFEO_rKogAXzKmw"
              >
                <i className="bx bxl-youtube"></i>
              </Link>
              <Link
                className="m-4"
                target="_blank"
                to="https://twitter.com/jepbura"
              >
                <i className="bx bxl-twitter"></i>
              </Link>
              <Link
                className="m-4"
                target="_blank"
                to="https://www.linkedin.com/in/jepbura/"
              >
                <i className="bx bxl-linkedin"></i>
              </Link>
              <Link
                className="m-4"
                target="_blank"
                to="https://github.com/jepbura"
              >
                <i className="bx bxl-github"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* ****************************************** */}
        <div className="border-spacing-4 border-4 m-10 border-bios-header rounded-4">
          <div className="p-2 m-2 flex flex-col justify-center items-center">
            <img className="w-128 mt-4 mb-4 rounded-4" src={fara} alt="fara" />

            <div className="flex flex-wrap flex-row justify-center items-center">
              <Link
                className="m-4"
                target="_blank"
                to="https://www.instagram.com/faranackbura/"
              >
                <i className="bx bxl-instagram"></i>
              </Link>
              <Link
                className="m-4"
                target="_blank"
                to="https://www.linkedin.com/in/faranack/"
              >
                <i className="bx bxl-linkedin"></i>
              </Link>
              <Link
                className="m-4"
                target="_blank"
                to="https://github.com/faranack"
              >
                <i className="bx bxl-github"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
