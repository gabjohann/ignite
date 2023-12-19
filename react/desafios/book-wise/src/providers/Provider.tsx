'use client'

import { queryClient } from '@/lib/react-query'
import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

interface ProviderProps {
  children: React.ReactNode
}

export default function Provider({ children }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>{children}</SessionProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
