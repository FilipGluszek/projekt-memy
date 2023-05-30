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
                id: 1,
                title: "Mem 1",
                upvotes: 0,
                downvotes: 0,
                img: "mem-1.jpg",
                isStarred: true,
            },
            {
                id: 2,
                title: "Mem 2",
                upvotes: 0,
                downvotes: 0,
                img: "mem-2.jpg",
                isStarred: false,
            },
            {
                id: 3,
                title: "Mem 3",
                upvotes: 0,
                downvotes: 0,
                img: "mem-3.jpg",
                isStarred: false,
            },
        ],
    },
    reducers: {
        upvote: (state, action) => {
            state.value = state.value.map((meme) => {
                return {
                    ...meme,
                    upvotes:
                        meme.id === action.payload.memeId
                            ? meme.upvotes + 1
                            : meme.upvotes,
                };
            });
        },
        downvote: (state, action) => {
            state.value = state.value.map((meme) => {
                return {
                    ...meme,
                    downvotes:
                        meme.id === action.payload.memeId
                            ? meme.downvotes + 1
                            : meme.downvotes,
                };
            });
        },
        starChange: (state, action) => {
            state.value = state.value.map((meme) => {
                return {
                    ...meme,
                    isStarred:
                        meme.id === action.payload.memeId
                            ? !meme.isStarred
                            : meme.isStarred,
                };
            });
        },
    },
});

export const { upvote, downvote, starChange } = memesSlice.actions;
export default memesSlice.reducer;
