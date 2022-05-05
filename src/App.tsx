import React, {useEffect} from 'react'
import './App.css'
import {useAppDispatch, useAppSelector} from "./redux/hooks/hooks"
import {decrement, increment, increaseAmount} from "./redux/slices/counterSlices"
import {fetchPost} from "./redux/slices/postSlices";

function App() {
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchPost())
    },[])

    const counter = useAppSelector(state => state?.counter)
    const {postList, loading, error} = useAppSelector(state => state?.post)
    // @ts-ignore
    return (
        <div className="App">
            <h1>Redux toolkit Counter</h1>
            <h2>Counter: {counter?.value}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increaseAmount(10))}>Increase Amount</button>
            <h1>Post List</h1>
            <ul>
                {loading ? <li><h2>Loading</h2></li> : postList.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                )
            )}
            </ul>
        </div>
    );
}

export default App
