'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { LoadingScreen } from './LoadingScreen'

interface LoadingContextType {
  setLoading: (loading: boolean) => void
  isLoading: boolean
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Simple initial load - show for 1.5 seconds then hide
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    // Safety: Always hide after 2.5 seconds max
    const safetyTimer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearTimeout(safetyTimer)
    }
  }, [])

  // Only show loading screen if mounted and loading
  const showLoading = mounted && loading

  return (
    <LoadingContext.Provider value={{ setLoading, isLoading: showLoading }}>
      {showLoading && <LoadingScreen isLoading={showLoading} />}
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}
