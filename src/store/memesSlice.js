/**
 * External dependencies
 */
import { createSlice } from "@reduxjs/toolkit";

/**
 * Create memes slice
 */
export const memesSlice = createSlice({
    name: "memes",
    initialState: {
        value: [
            {
                title: "Mem 1",
                upvotes: 5,
                downvotes: 0,
                img: "mem-1.jpg",
            },
            {
                title: "Mem 2",
                upvotes: 15,
                downvotes: 2,
                img: "mem-2.jpg",
            },
            {
                title: "Mem 3",
                upvotes: 7,
                downvotes: 6,
                img: "mem-3.jpg",
            },
        ],
    },
    reducers: {},
});

// export const { increment, decrement, incrementByAmount } = memesSlice.actions

export default memesSlice.reducer;
