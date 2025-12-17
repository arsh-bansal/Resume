'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    try {
      const savedTheme = localStorage.getItem('theme') as Theme | null
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      if (savedTheme) {
        setTheme(savedTheme)
      } else if (prefersDark) {
        setTheme('dark')
      }
    } catch (error) {
      // Handle localStorage access errors (e.g., in private browsing)
      console.error('Error accessing theme preferences:', error)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', theme === 'dark')
      try {
        localStorage.setItem('theme', theme)
      } catch (error) {
        // Handle localStorage write errors (e.g., quota exceeded)
        console.error('Error saving theme preference:', error)
      }
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  // Always provide the context, even before mounting
  // This prevents the "useTheme must be used within a ThemeProvider" error
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

