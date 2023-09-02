import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    name: "Sunny",
    email:"sunny@gmail.com",
    userTasks: []
}

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{}
})

export default userSlice.reducer;