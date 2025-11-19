'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/data/portfolio'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="projects"
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group h-full"
              >
                <Card className="h-full flex flex-col hover:shadow-2xl hover:shadow-primary/10 transition-all hover:-translate-y-2 border-border/50 bg-card dark:bg-gray-800/95 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="w-full"
                    >
                      <Link href={`/projects/${project.slug}`}>
                        Know More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <div className="flex items-center gap-2 w-full">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

