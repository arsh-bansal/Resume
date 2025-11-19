'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { socialLinks } from '@/data/portfolio'
import { LightRays } from './LightRays'
import { Button } from '@/components/ui/button'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
}

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />
      
      {/* Light Rays Background */}
      <LightRays />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hi, I'm{' '}
              <span className="text-gradient">Arsh Bansal</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Full Stack Developer & Software Engineering Student
            </motion.p>

            <motion.p
              className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Building web applications and creating solutions that connect people.
              Currently at Monash University, Melbourne.
            </motion.p>

            <motion.div
              className="flex items-center justify-center md:justify-start space-x-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap] || Mail
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={link.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex justify-center md:justify-start"
            >
              <Button
                onClick={scrollToAbout}
                size="lg"
                className="rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <span>Learn More</span>
                <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Developer Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src="/images/developer.jpg"
                  alt="Arsh Bansal - Full Stack Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

