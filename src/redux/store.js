import { configureStore } from "@reduxjs/toolkit";
import skillsRedioser from './skillsSlice'

const store = configureStore({
    reducer: {
        skills : skillsRedioser
    }
})

export default store