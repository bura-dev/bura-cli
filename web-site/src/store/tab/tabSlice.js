import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 0,
}

function tabChange(state, actions) {
  state.value = actions?.payload?.props
}

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: { tabChange },
})

export const { tabChange: tabChangeAction } = tabSlice.actions

export default tabSlice.reducer
