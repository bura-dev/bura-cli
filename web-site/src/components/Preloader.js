import React from "react"
import loading from "../assets/gif/loading.gif"

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black z-9999">
      <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={loading} alt="loading" />
    </div>
    // <div className="loader">
    //     <div className="d-table">
    //         <div className="d-table-cell">
    //             <div className="preloader__wrapper">
    //                 <div className="preloader__circle">
    //                     <div className="preloader__circle-line preloader__circle-line--1"></div>
    //                     <div className="preloader__circle-line preloader__circle-line--2"></div>
    //                     <div className="preloader__circle-line preloader__circle-line--3"></div>
    //                     <div className="preloader__circle-line preloader__circle-line--4"></div>
    //                     <div className="preloader__circle-line preloader__circle-line--5"></div>
    //                     <div className="preloader__circle-line preloader__circle-line--6"></div>
    //                     <div className="preloader__circle-line preloader__circle-line--7"></div>
    //                     <div className="preloader__circle-line preloader__circle-line--8"></div>
    //                     <div className="preloader__circle-line preloader__circle-line--9"></div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Preloader
