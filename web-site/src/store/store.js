import homePageSlice from "./homePageStyle/homePageSlice"
import tabSlice from "./tab/tabSlice"

const { configureStore } = require("@reduxjs/toolkit")

const store = configureStore({
  reducer: {
    homePage: homePageSlice,
    tab: tabSlice,
  },
})

export default store
