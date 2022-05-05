import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

export const fetchPost = createAsyncThunk("post/list", async (payload, {dispatch, getState, rejectWithValue}) => {
    try {
        const {data} = await axios.get("http://jsonplaceholder.typicode.com/posts")
        return data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return error.response
        } else if (error) {
            return (error as Error).message
        } else {
            return "Feilet"
        }
    }
})

type StateType = {
    postList: Post[],
    error: string,
    loading: boolean
}
const initialState: StateType = {postList: [], error: "", loading: false}

const postSlices = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPost.pending.type]: (state, action) =>{
            state.loading = true
        },
        [fetchPost.fulfilled.type]: (state, action) =>{
            state.postList = action.payload
            state.loading = false
        },
        [fetchPost.rejected.type]: (state, action) =>{
            state.error = action.payload
            state.loading = false
        }

    }
})
export default postSlices.reducer
