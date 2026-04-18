import { createSlice } from "@reduxjs/toolkit"

const gptSlice = createSlice({
    name: "gpt",
    initialState: { showGpt: false },
    reducers: {
        toggleShow: (state) => {
            state.showGpt = !state.showGpt
        }
    }
})
export default gptSlice.reducer
export const { toggleShow } = gptSlice.actions
