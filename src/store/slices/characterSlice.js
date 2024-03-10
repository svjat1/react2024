import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services";
const initialState = {
    characters:[]
}
const getAll = createAsyncThunk(
    'characterSlice/getAll',
    async ({ids}, thunkAPI)=>{
        try {
       const {data} = await characterService.getById(ids)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const characterSlice = createSlice({
    name:'characterSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, actions)=>{
                state.characters = actions.payload
            })

})
const {reducer: characterReducer, actions} = characterSlice
const characterActions = {
    ...actions,
    getAll
}

export {
    characterReducer,
    characterActions
}