import { Metadata } from 'next'
import { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '~/lib/query-client'

type RootLayoutProps = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to verteal app dir template! :)',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
