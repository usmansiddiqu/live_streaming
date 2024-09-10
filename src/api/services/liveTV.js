import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const liveTVapi = createApi({
  reducerPath: "liveTVapi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pixelsport.tv/backend" }),
  endpoints: (builder) => ({
    events: builder.query({
      query: () => ({
        url: `/liveTV/events`,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useEventsQuery } = liveTVapi;
