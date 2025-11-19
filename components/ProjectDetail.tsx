"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Button
            variant="ghost"
            asChild
            className="mb-8 text-primary hover:text-primary"
          >
            <Link href="/#projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
        </motion.div>

        {/* Project Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Project Image */}
        {project.imageUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-12 rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="relative w-full h-[500px] md:h-[600px]">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {project.liveUrl && (
            <Button size="lg" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Live Project
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" size="lg" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </Button>
          )}
        </motion.div>

        {/* Technologies Used */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <Card className="bg-card dark:bg-gray-800/95 border-border/50">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {project.keyFeatures.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-muted-foreground"
                    >
                      <span className="text-primary mr-3 mt-1">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Technical Highlights */}
        {project.technicalHighlights &&
          project.technicalHighlights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6">Technical Highlights</h2>
              <div className="space-y-6">
                {project.technicalHighlights.map((highlight, index) => (
                  <Card
                    key={index}
                    className="bg-card dark:bg-gray-800/95 border-border/50"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">
                        {highlight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

        <Separator className="my-12" />

        {/* Collaboration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-muted-foreground mb-6">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Button size="lg" asChild>
            <Link href="/#contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
