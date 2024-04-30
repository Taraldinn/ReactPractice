import {combineReducers} from "@reduxjs/toolkit";
import postReducer from "./postReducers.js";

const rootReducer = combineReducers({
    posts: postReducer,
})


export default rootReducer;

