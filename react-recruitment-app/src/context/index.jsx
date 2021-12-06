
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {QueryClient,QueryClientProvider} from 'react-query'

import {AuthProvider} from 'context/auth-context'
export const AppProviders = ({children})=> {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <AuthProvider>{children}</AuthProvider>
            </BrowserRouter>
        </QueryClientProvider>
    )
}
