import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const sliderApi = createApi({
  reducerPath: "sliderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pixelsport.tv/backend" }),
  endpoints: (builder) => ({
    slider: builder.query({
      query: () => ({
        url: `/slider/getSliders`,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSliderQuery } = sliderApi;
