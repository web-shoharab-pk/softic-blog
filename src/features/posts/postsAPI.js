import { apiSlice } from "../api/apiSlice";

 

export const postsApi = apiSlice.injectEndpoints({

    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (arg) => `/posts?_limit=${21}`
        })
    })
});

export const {useGetPostsQuery} = postsApi;