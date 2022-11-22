import { apiSlice } from "../api/apiSlice";


export const commentsApi = apiSlice.injectEndpoints({

    endpoints: (builder) => ({
        getComments: builder.query({
            query: (id) => `/comments?postId=${id}`
        })
    })
});

export const {useGetCommentsQuery} = commentsApi;