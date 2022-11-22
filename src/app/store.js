import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import authorReducer from '../features/author/authorSlice';
import commentsReducer from '../features/comments/commentsSlice';
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    posts: postsReducer,
    comments: commentsReducer,
    author: authorReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});
