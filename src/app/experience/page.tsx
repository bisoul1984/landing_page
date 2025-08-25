'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink,
  Code,
  Database,
  Cloud,
  Server,
  Globe,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const experience = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Ethiocube Systems',
    location: 'Addis Ababa, Ethiopia',
    period: 'October 2023 - Present',
    duration: '1+ years',
    description: 'Leading end-to-end development of web applications, implementing robust APIs, and collaborating with cross-functional teams to deliver scalable solutions.',
    achievements: [
      'Developed and maintained full-stack web applications using modern technologies',
      'Implemented RESTful APIs and microservices architecture',
      'Collaborated with designers and product managers to deliver user-centric solutions',
      'Optimized application performance and database queries',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker', 'Git'],
    category: 'Full-Stack',
    icon: Code,
    featured: true
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Ethiocube Systems',
    location: 'Addis Ababa, Ethiopia',
    period: 'May 2022 - September 2023',
    duration: '1.5 years',
    description: 'Built robust backend services and APIs, managed database integrations, and optimized server performance for enterprise applications.',
    achievements: [
      'Designed and implemented scalable backend architectures',
      'Developed RESTful APIs and GraphQL endpoints',
      'Managed database design, optimization, and migrations',
      'Implemented authentication and authorization systems',
      'Integrated third-party services and payment gateways'
    ],
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'REST APIs', 'JWT'],
    category: 'Backend',
    icon: Server,
    featured: true
  },
  {
    id: 3,
    title: 'Junior Frontend Developer',
    company: 'Taamcab Technology Solutions',
    location: 'Addis Ababa, Ethiopia',
    period: 'March 2021 - April 2022',
    duration: '1.2 years',
    description: 'Developed responsive user interfaces, implemented new features, and contributed to front-end architecture and best practices.',
    achievements: [
      'Built responsive and accessible user interfaces',
      'Implemented modern UI/UX designs and interactions',
      'Optimized frontend performance and loading times',
      'Collaborated with backend developers for API integration',
      'Maintained and refactored existing codebase'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Responsive Design'],
    category: 'Frontend',
    icon: Globe,
    featured: false
  }
];

const skills = [
  { name: 'Frontend Development', level: 90, icon: Globe },
  { name: 'Backend Development', level: 85, icon: Server },
  { name: 'Cloud Architecture', level: 80, icon: Cloud },
  { name: 'Database Design', level: 85, icon: Database },
  { name: 'DevOps & CI/CD', level: 75, icon: Zap },
];

export default function ExperiencePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-secondary-50 dark:bg-secondary-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Work Experience
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              My professional journey in software development, from junior frontend developer 
              to full-stack engineer, specializing in modern web technologies and cloud solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Professional Journey
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Over 3.5 years of experience building scalable applications and delivering 
              innovative solutions across different technology stacks.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative ${
                  job.featured 
                    ? 'bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg border-l-4 border-primary-500' 
                    : 'bg-secondary-50 dark:bg-secondary-700 rounded-xl p-6'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        job.featured 
                          ? 'bg-primary-100 dark:bg-primary-900' 
                          : 'bg-secondary-200 dark:bg-secondary-600'
                      }`}>
                        <job.icon className={`w-6 h-6 ${
                          job.featured 
                            ? 'text-primary-600 dark:text-primary-400' 
                            : 'text-secondary-600 dark:text-secondary-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-semibold mb-1 ${
                          job.featured ? 'text-foreground' : 'text-foreground'
                        }`}>
                          {job.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-secondary-600 dark:text-secondary-400 text-sm mb-2">
                          <span className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {job.company}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-secondary-600 dark:text-secondary-400 text-sm">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {job.period}
                          </span>
                          <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                            {job.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                      {job.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-secondary-600 dark:text-secondary-400 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            job.featured
                              ? 'bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300'
                              : 'bg-white dark:bg-secondary-600 text-secondary-700 dark:text-secondary-300'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white dark:bg-secondary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Technical Expertise
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Core competencies developed through hands-on experience and continuous learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary-50 dark:bg-secondary-700 rounded-xl p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary-200 dark:bg-secondary-600 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-secondary-600 dark:text-secondary-400 text-sm mt-2">
                  {skill.level}% proficiency
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how my experience and skills can contribute to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
                  Get In Touch
                </Button>
              </Link>
              <Link href="/resume">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                  View Resume
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 