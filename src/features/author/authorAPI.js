import { apiSlice } from "../api/apiSlice";


export const authorApi = apiSlice.injectEndpoints({

    endpoints: (builder) => ({
        getAuthor: builder.query({
            query: (id) => `/users/${id}`
        })
    })
});

export const {useGetAuthorQuery} = authorApi;