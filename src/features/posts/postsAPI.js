import { apiSlice } from "../api/apiSlice";



export const postsApi = apiSlice.injectEndpoints({

    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (url) => `/posts${url}`
        }),
        getPostById: builder.query({
            query: (id) => `/posts/${id}`
        }),
        getPostByAuthor: builder.query({
            query: (authorId) => `/posts?userId=${authorId}`
        }),
    })
});

export const { useGetPostsQuery, useGetPostByIdQuery, useGetPostByAuthorQuery } = postsApi;