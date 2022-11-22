import { apiSlice } from "../api/apiSlice";


export const photoApi = apiSlice.injectEndpoints({

    endpoints: (builder) => ({
        getPhoto: builder.query({
            query: (id) => `/photos/${id}`
        })
    })
});

export const {useGetPhotoQuery} = photoApi;