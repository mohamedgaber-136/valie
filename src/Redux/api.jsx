import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { clearUser, setUser } from './authSlice';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

// Create a base query instance to avoid redundant calls
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth?.accessToken;
    if (token) {
      headers.set('Authorization', `${token}`); 
    }
    headers.set('x-localization', 'ar');
    headers.set('Accept', 'application/json');
    headers.set('Content-type', 'application/json; charset=utf-8');
    return headers;
  },
});

// Custom base query with token refresh logic
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Handle 401 (Unauthorized) errors
  if (result?.error?.status === 401) {
    const refreshToken = api.getState().auth?.refreshToken;
    
    if (!refreshToken) {
      api.dispatch(clearUser());  // Clear user data if no refresh token exists
      return result; 
    }

    // Attempt to refresh the token
    const refreshResult = await baseQuery(
      {
        url: 'auth/token',
        method: 'POST',
        body: { refreshToken },
      },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      // Store the new access and refresh tokens
      api.dispatch(
        setUser({
          accessToken: refreshResult.data.accessToken,
          refreshToken: refreshResult.data.refreshToken,
        })
      );

      // Retry the original request with the new token
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.error('Token Refresh Failed:', refreshResult.error);
      api.dispatch(clearUser()); // Log out user if refresh fails
    }
  }

  return result;
};

// API Service Definition
export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['UserHistory', 'userFavourites', 'vehicle', 'userData'],
  endpoints: (builder) => ({
    // Fetch a specific item by ID
    getItems: builder.query({
      query: (itemId) => `${itemId}`,
      providesTags: ['userData'],
    }),

    // Fetch all vehicles
    getProducts: builder.query({
      query: () => 'vehicle',
      providesTags: ['vehicle'],
    }),

    // Add a new item dynamically
    addItem: builder.mutation({
      query: ({ endpoint, newItem }) => ({
        url: endpoint,
        method: 'POST',
        body: newItem,
      }),
      invalidatesTags: ['UserHistory', 'userFavourites', 'userData'],
    }),

    // Delete an item dynamically
    deleteItem: builder.mutation({
      query: ({ endpoint }) => ({
        url: endpoint,
        method: 'DELETE',
      }),
    }),

    // User login mutation
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

// Export hooks for API calls
export const {
  useGetItemsQuery,
  useGetProductsQuery,
  useAddItemMutation,
  useDeleteItemMutation,
  useLoginMutation,
} = api;
