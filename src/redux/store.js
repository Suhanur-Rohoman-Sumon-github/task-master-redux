import {configureStore} from "@reduxjs/toolkit"
import tasksSlice from "./fetures/task/tasksSlice"
const store = configureStore({
    reducer:{
        task: tasksSlice,
    },
})

export default store