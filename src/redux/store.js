import { configureStore } from "@reduxjs/toolkit";
import skillsRedioser from './skillsSlice'
import projectsRedioser from './projectsSlice'

const store = configureStore({
    reducer: {
        skills : skillsRedioser,
        projects: projectsRedioser
    }
})

export default store