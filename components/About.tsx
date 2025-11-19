"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  I'm a motivated software engineering student passionate about
                  building web applications and creating solutions that connect
                  people. Currently pursuing a Bachelor of Engineering (Honours)
                  in Software Engineering at Monash University while working as
                  a Web Developer at Jabsz Studios.
                </p>
                <p>
                  I specialize in full-stack development using modern
                  technologies like NestJS, TypeScript, and React. My experience
                  spans from backend API development to frontend interfaces,
                  with a strong focus on clean code, user experience, and
                  collaborative development.
                </p>
                <p>
                  I believe in continuous learning, writing clean code, and
                  building applications that solve real problems. I'm always
                  eager to take on challenging projects and leverage
                  cutting-edge technologies to deliver innovative solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold text-gradient mb-4">
                      1+
                    </div>
                    <div className="text-xl text-gray-600 dark:text-gray-300">
                      Years of Learning
                    </div>
                    <div className="mt-8 space-y-2 text-left">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-primary-500" />
                        <span className="text-gray-600 dark:text-gray-300">
                          Full Stack Development
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-primary-500" />
                        <span className="text-gray-600 dark:text-gray-300">
                          Backend & API Development
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-primary-500" />
                        <span className="text-gray-600 dark:text-gray-300">
                          Mobile & Web Applications
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
