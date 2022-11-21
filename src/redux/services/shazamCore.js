import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1', 
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'd5a71def2fmshaf4198b8ce52dc9p192322jsn63a6b4fec5b3');
            
            return headers;
        },
    }),
    endpoints: (builders) => ({
        getTopCharts: builders.query({ query: () => '/charts/world'}),
    })
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;

// starts at 35:56