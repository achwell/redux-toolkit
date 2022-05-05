import { createAction, createReducer, createSlice, PayloadAction} from "@reduxjs/toolkit"

// export const increment = createAction("increment/counter")
// export const decrement = createAction("decrement/counter")
// export const increaseAmount = createAction<number>("increaseAmount/counter")

const initialState = {value: 0}

const counterSlices = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: state => {state.value++},
        decrement: state => {state.value--},
        increaseAmount: (state, action) => {state.value += action.payload}
    }
})
//
// const counterSlices = createReducer(initialState, builder => {
//     builder
//         .addCase(increment, state => {
//             state.value++
//         })
//         .addCase(decrement, state => {
//             state.value--
//         })
//         .addCase(increaseAmount, (state, action: PayloadAction<number>) => {
//             state.value += action.payload
//         })
//
// })
//
// const counterSlices = createReducer(initialState, {
//     [increment.type]: (state) => {
//         state.value++
//     },
//     [decrement.type]: (state) => {
//         state.value--
//     },
//     [increaseAmount.type]: (state, action) => {
//         state.value += action.payload
//     },
// })
export const {decrement, increment, increaseAmount} = counterSlices.actions
export default counterSlices.reducer
