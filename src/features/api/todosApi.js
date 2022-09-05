import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {apiBaseURL} from "../../services/auth-service";

export const todosApi = createApi({
        reducerPath: 'todosApi',
        baseQuery: fetchBaseQuery({ baseUrl: apiBaseURL }),
        endpoints: (builder) => ({
            findAllTodos: builder.query({
            query: (userId) => `todos/${userId}`,
        }),
    }),
})

export const { useFindAllTodosQuery } = todosApi;