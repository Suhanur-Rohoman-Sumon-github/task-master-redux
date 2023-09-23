import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task:[],
}

const taksSlice = createSlice({
    name:"taskSlice",
    initialState,
    reducer:{},
})

export default taksSlice.reducer