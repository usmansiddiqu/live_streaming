import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const liveTVapi = createApi({
  reducerPath: "liveTVapi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pixelsport.tv/backend" }),
  refetchOnFocus: true,
  keepUnusedDataFor: 0, // Data will not be kept in cache
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    events: builder.query({
      query: () => `/liveTV/events?ts=${Date.now()}`,
      // Ensure data is refetched each time
      // Refetch on mount or if the argument changes
    }),
  }),
});

// Export hooks for usage in functional components
export const { useEventsQuery } = liveTVapi;
