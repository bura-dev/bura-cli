import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: false,
}

function toggleHomePage(state) {
  state.value = !state.value
}

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    toggleHomePage,
  },
})

export const { toggleHomePage: toggleHomePageAction } = homePageSlice.actions

export default homePageSlice.reducer
