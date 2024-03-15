import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../assets/image/bura.png"
import { useDispatch, useSelector } from "react-redux"
import { toggleHomePageAction } from "../store/homePageStyle/homePageSlice"
import { tabChangeAction } from "../store/tab/tabSlice"

const Header = ({ siteTitle }) => {
  const [collapsed, setCollapsed] = React.useState(true)
  const value = useSelector(state => state.tab.value)
  const dispatch = useDispatch()
  // const [mobailOnclick, setMobailOnclick] = React.useState(false)

  // const classOne = collapsed
  //   ? "collapse navbar-collapse"
  //   : "collapse navbar-collapse show"
  const classTwo = collapsed
    ? "sm:hidden m-10 navbar-toggler navbar-toggler-right collapsed"
    : "sm:hidden m-10 navbar-toggler navbar-toggler-right"

  const toggleNavbar = () => {
    // setMobailOnclick(true)
    setCollapsed(!collapsed)
  }

  function navBarFunction() {
    return (
      <>
        <button
          type="button"
          className="btn common-btn m-10 text-5 w-2/3 rounded-4"
          onClick={() => {
            setTimeout(function () {
              setCollapsed(true)
            }, 250)
            dispatch(tabChangeAction({ props: 0 }))
          }}
        >
          <span className="font-bios">Home</span>
        </button>
        {/* <button
          type="button"
          className="btn common-btn m-10 text-5 w-2/3 rounded-4"
          onClick={() => {
            setTimeout(function () {
              setCollapsed(true)
            }, 250)
            dispatch(tabChangeAction({ props: 1 }))
          }}
        >
          <span className="font-bios">Products</span>
        </button> */}
        <button
          type="button"
          className="btn common-btn m-10 text-5 w-2/3 rounded-4"
          onClick={() => {
            setTimeout(function () {
              setCollapsed(true)
            }, 250)
            dispatch(tabChangeAction({ props: 2 }))
          }}
        >
          <span className="font-bios">About</span>
        </button>
        <button
          type="button"
          className="btn common-btn m-10 text-5 w-2/3 rounded-4"
          onClick={() => {
            setTimeout(function () {
              setCollapsed(true)
            }, 250)
            dispatch(tabChangeAction({ props: 3 }))
          }}
        >
          <span className="font-bios">Contact</span>
        </button>
      </>
    )
  }

  return (
    <header className="bg-bios-header m-0 flex flex-row items-center justify-between">
      <div className="flex justify-center items-center ml-10">
        <img className="w-20 mb-4 mr-10" src={logo} alt="logo" />
        <Link className="text-bios-bg font-bios2 text-16 no-underline" to="/">
          {siteTitle}
        </Link>
      </div>

      <button
        onClick={toggleNavbar}
        className={classTwo}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="icon-bar top-bar"></span>
        <span className="icon-bar middle-bar"></span>
        <span className="icon-bar bottom-bar"></span>
      </button>

      <div className="hidden w-2/3 sm:flex sm:flex-row sm:items-center sm:justify-start overflow-x-auto">
        {navBarFunction()}
      </div>

      {!collapsed && (
        <div className="bg-bios-header w-2/3 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-9999">
          <div className="border-spacing-4 border-4 border-bios-bg flex flex-col justify-center items-center m-4">
            {navBarFunction()}
          </div>
        </div>
      )}

      {value === 0 && (
        <div className="demo-side-icon">
          <button
            type="button"
            className="modal-btn"
            onClick={() => {
              dispatch(toggleHomePageAction())
            }}
          >
            <span className="font-bios">Simple</span>
          </button>
        </div>
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
