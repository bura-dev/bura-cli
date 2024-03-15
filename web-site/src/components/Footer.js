import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="bg-bios-header flex justify-center items-center">
      <p className="text-bios-bg font-bios text-6 pt-10 text-center">
        &copy;{currentYear} Design & Develop
        <br />
        <br />
        <a
          href="https://www.jepbura.ir/"
          target="_blank"
          rel="noreferrer"
          className="text-orange-800 font-bios no-underline text-6"
        >
          Jepbura{" "}
        </a>
        {" & "}
        <a
          href="https://www.faranack.ir"
          target="_blank"
          rel="noreferrer"
          className="text-orange-800 font-bios no-underline text-6"
        >
          Fara
        </a>
      </p>
    </div>
  )
}

export default Footer
