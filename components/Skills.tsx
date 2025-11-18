'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '@/data/portfolio'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const categoryColors = {
  frontend: 'from-blue-500 to-cyan-500',
  backend: 'from-purple-500 to-pink-500',
  tools: 'from-green-500 to-emerald-500',
  other: 'from-orange-500 to-red-500',
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof skills>
  )

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              >
                <Card className="h-full border-border/50 bg-card dark:bg-gray-800/95 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl capitalize font-bold">
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-5">
                      {categorySkills.map((skill, index) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-semibold text-foreground">
                              {skill.name}
                            </span>
                            <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-0.5 rounded">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-muted/50 rounded-full h-2.5 overflow-hidden shadow-inner">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${categoryColors[skill.category] || categoryColors.other} rounded-full shadow-sm`}
                              initial={{ width: 0 }}
                              animate={
                                isInView ? { width: `${skill.level}%` } : { width: 0 }
                              }
                              transition={{
                                delay: categoryIndex * 0.1 + index * 0.05,
                                duration: 0.8,
                                ease: 'easeOut',
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

