import { Metadata } from 'next'
import { ReactNode } from 'react'

import { TanstackProvider } from '~/providers/tanstack-provider'

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
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  )
}
