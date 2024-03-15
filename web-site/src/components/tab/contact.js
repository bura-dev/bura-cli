import * as React from "react"
import { Link } from "gatsby"
import call from "../../assets/image/call.png"
import pin from "../../assets/image/pin.png"
import network from "../../assets/image/network.png"
import email from "../../assets/image/email.png"
import bg from "../../assets/gif/bg.webp"
import PageTitle from "../pageTitle"

export default function Contact() {
  return (
    // <div className="w-full min-h-screen relative">
    //   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-left">
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: 'fixed',
        backgroundSize: "100% 100%",
      }}
      className="w-full min-h-screen flex flex-col sm:justify-center justify-start pt-80 sm:pt-0 sm:items-center items-left relative pl-10"
    >
      <PageTitle title={"Contact"} />
      <span className="text-bios-header font-bios sm:flex sm:items-center text-8">
        <img className="w-12 mb-4  mr-10" src={call} alt="call" />
        Phone: +98 919 1211790
      </span>
      <br />
      <span className="text-bios-header font-bios sm:flex sm:items-center text-8">
        <img className="w-12 mb-4  mr-10" src={email} alt="email" />
        Email: jepbura@gmail.com
      </span>
      <br />
      <div className="sm:flex sm:items-center">
        <span className="text-bios-header font-bios sm:flex sm:items-centerr text-8">
          <img className="w-12 mb-4 mr-10" src={network} alt="network" />
          Website:
        </span>
        <div className="text-bios-header font-bios sm:pl-10">
          <Link
            className="text-bios-header font-bios text-8 no-underline"
            to="https://www.bura.dev"
            target={"_blank"}
          >
            www.bura.dev
          </Link>
          <br />
          <Link
            className="text-bios-header font-bios text-8 no-underline"
            to="https://www.jepbura.ir"
            target={"_blank"}
          >
            www.jepbura.ir
          </Link>
          <br />
          <Link
            className="text-bios-header font-bios text-8 no-underline"
            to="https://www.faranack.ir"
            target={"_blank"}
          >
            www.faranack.ir
          </Link>
        </div>
      </div>
      <br />

      <span className="text-bios-header font-bios sm:flex sm:items-center text-8">
        <img className="w-12 mb-4  mr-10" src={pin} alt="pin" />
        Address: <br />
        Bura/West BandPey/Babol/Mazandaran/Iran
      </span>
      <br />
    </div>
  )
}
