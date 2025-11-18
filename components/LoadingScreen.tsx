'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Coffee, Rocket, Sparkles, WifiOff } from 'lucide-react'

const funnyMessages = [
  'Brewing coffee... ☕',
  'Summoning code spirits... ✨',
  'Compiling awesomeness... 🚀',
  'Loading your future... 💫',
  'Waking up the servers... 🌐',
  'Polishing pixels... 🎨',
  'Charging the matrix... ⚡',
  'Almost there... 🏃',
  'Connecting to the matrix... 🔌',
  'Optimizing awesomeness... ⚡',
]

interface LoadingScreenProps {
  isLoading: boolean
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [messageIndex, setMessageIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isOnline, setIsOnline] = useState(true)

  // Check online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    setIsOnline(navigator.onLine)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  // Update progress and messages when loading
  useEffect(() => {
    if (!isLoading) {
      setProgress(0)
      return
    }

    let progressInterval: NodeJS.Timeout
    let messageInterval: NodeJS.Timeout

    setProgress(0)

    // Change message every 800ms
    messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % funnyMessages.length)
    }, 800)

    // Simulate loading progress
    progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100
        }
        // Faster progress if online, slower if offline
        const increment = isOnline ? Math.random() * 15 : Math.random() * 5
        return Math.min(prev + increment, 100)
      })
    }, 200)

    return () => {
      clearInterval(messageInterval)
      clearInterval(progressInterval)
    }
  }, [isLoading, isOnline])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary-900 via-gray-900 to-purple-900"
    >
          <div className="text-center">
            {/* Network Status Indicator */}
            {!isOnline && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 flex items-center justify-center gap-2 text-amber-400"
              >
                <WifiOff className="w-5 h-5" />
                <span className="text-sm">No internet connection</span>
              </motion.div>
            )}

            {/* Animated Icons */}
            <div className="relative mb-8 flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute"
              >
                <Code2 className="w-16 h-16 text-primary-400" />
              </motion.div>
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute"
              >
                <Sparkles className="w-12 h-12 text-purple-400" />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute"
              >
                <Rocket className="w-10 h-10 text-cyan-400" />
              </motion.div>
            </div>

            {/* Loading Message */}
            <motion.div
              key={messageIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {funnyMessages[messageIndex]}
              </h2>
              <p className="text-gray-400 text-sm">
                {isOnline
                  ? 'Preparing something amazing for you'
                  : 'Waiting for connection...'}
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 md:w-80 mx-auto mb-4">
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 via-purple-500 to-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Progress Percentage */}
            <motion.p
              className="text-gray-300 text-sm font-medium"
              key={Math.floor(progress)}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              {Math.floor(progress)}%
            </motion.p>

            {/* Coffee Icon Animation */}
            <motion.div
              className="mt-8 flex justify-center"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Coffee className="w-6 h-6 text-amber-400" />
            </motion.div>
          </div>
    </motion.div>
  )
}

