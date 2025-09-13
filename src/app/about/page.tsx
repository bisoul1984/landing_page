'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Cloud, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  Server, 
  Cpu
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { icon: Code, name: 'Full-Stack Development', level: 95 },
    { icon: Cloud, name: 'Cloud Solutions', level: 90 },
    { icon: Database, name: 'Database Design', level: 88 },
    { icon: Shield, name: 'Security & Compliance', level: 85 },
    { icon: Zap, name: 'Performance Optimization', level: 92 },
    { icon: Globe, name: 'API Development', level: 90 },
    { icon: Server, name: 'DevOps & Deployment', level: 87 },
    { icon: Cpu, name: 'System Architecture', level: 89 },
  ];

  const experience = [
    {
      title: 'Senior Software Developer',
      company: 'EthioCube Systems',
      period: '2021 - Current',
      description: 'Leading development of enterprise applications and finance modules.',
      technologies: ['Python', '.NET', 'JavaScript', 'React', 'PostgreSQL']
    },
    {
      title: 'Back End Developer',
      company: 'Ethiopian Agricultural Transformation Agency',
      period: '2018 - 2020',
      description: 'Built scalable backend systems and APIs for agricultural data management.',
      technologies: ['Node.js', 'Django', 'MongoDB', 'AWS', 'GraphQL']
    },
    {
      title: 'Front End Developer',
      company: 'Libanos Furniture PLC',
      period: '2017 - 2018',
      description: 'Developed responsive user interfaces and improved user experience.',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap']
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-800 to-gray-600 dark:from-black dark:to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About Me
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Passionate software engineer and full-stack developer with a focus on 
              building scalable, modern applications that drive business value.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                My Journey in Software Development
              </h2>
              <div className="space-y-4 text-secondary-600 dark:text-secondary-400">
                <p>
                  With over 7 years of experience in software development, I've had the privilege 
                  of working across various industries and technologies. My journey began with 
                  frontend development, where I learned the importance of user experience and 
                  responsive design.
                </p>
                <p>
                  As I progressed in my career, I expanded into backend development, learning 
                  about scalable architectures, database design, and API development. This 
                  full-stack experience has given me a comprehensive understanding of how 
                  modern web applications work from end to end.
                </p>
                <p>
                  Today, I specialize in building enterprise-grade applications, with particular 
                  expertise in finance modules, microservices architecture, and cloud solutions. 
                  I'm passionate about writing clean, maintainable code and following best 
                  practices in software development.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  What I Do Best
                </h3>
                <ul className="space-y-3 text-secondary-600 dark:text-secondary-400">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Full-stack web application development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Enterprise software architecture
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    API design and development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Database optimization and design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Performance optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Technical Expertise
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              My skills span across the entire development stack, 
              from frontend development to cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-8 h-8 text-primary-500 mr-3" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-secondary-200 dark:bg-secondary-600 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: inView ? `${skill.level}%` : '0%' }}
                  />
                </div>
                <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-2">
                  {skill.level}% proficiency
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Professional Experience
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              A timeline of my career progression and key achievements.
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={job.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {job.title}
                    </h3>
                    <p className="text-primary-500 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <span className="text-secondary-600 dark:text-secondary-400 text-sm mt-2 md:mt-0">
                    {job.period}
                  </span>
                </div>
                <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with 
              cutting-edge technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Get In Touch
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View My Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}