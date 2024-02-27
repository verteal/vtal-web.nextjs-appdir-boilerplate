'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { ReactNode } from 'react'

type TanstackProviderProps = {
  children: ReactNode
}
export function TanstackProvider({ children }: TanstackProviderProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}
