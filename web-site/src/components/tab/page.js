import * as React from "react"
import { useSelector } from "react-redux"
import AboutUs from "./aboutUs"
import Contact from "./contact"
import Home from "./home"
import Products from "./products"

export default function Page(params) {
  const value = useSelector(state => state.tab.value)

  return value === 0 ? (
    <Home />
  ) : value === 1 ? (
    <Products />
  ) : value === 2 ? (
    <AboutUs />
  ) : value === 3 ? (
    <Contact />
  ) : (
    <div></div>
  )
}
