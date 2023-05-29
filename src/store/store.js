/**
 * External dependencies
 */
import { configureStore } from "@reduxjs/toolkit";

/**
 * Internal dependencies
 */
import memesReducer from "./memesSlice";

/**
 * Configure store
 */
export default configureStore({
    reducer: {
        memes: memesReducer,
    },
});
