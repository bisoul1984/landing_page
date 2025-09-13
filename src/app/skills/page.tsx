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
  Cpu,
  Git,
  Docker,
  React,
  Node,
  Python,
  Javascript
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const skillCategories = [
  {
    title: 'Programming Languages',
    description: 'Core languages I use for development',
    icon: Code,
    color: 'from-blue-500 to-blue-600',
    skills: [
      { name: 'Python', level: 95, description: 'Backend development, data processing, automation' },
      { name: 'JavaScript', level: 90, description: 'Frontend and backend development, full-stack solutions' },
      { name: 'TypeScript', level: 85, description: 'Type-safe JavaScript development' },
      { name: 'C#', level: 80, description: '.NET applications and enterprise solutions' },
      { name: 'SQL', level: 88, description: 'Database design, optimization, and complex queries' }
    ]
  },
  {
    title: 'Frontend Technologies',
    description: 'Modern frontend frameworks and tools',
    icon: Globe,
    color: 'from-green-500 to-green-600',
    skills: [
      { name: 'React', level: 92, description: 'Component-based UI development' },
      { name: 'Next.js', level: 88, description: 'Full-stack React applications' },
      { name: 'HTML5', level: 95, description: 'Semantic markup and accessibility' },
      { name: 'CSS3', level: 90, description: 'Styling, animations, and responsive design' },
      { name: 'Tailwind CSS', level: 85, description: 'Utility-first CSS framework' }
    ]
  },
  {
    title: 'Backend Technologies',
    description: 'Server-side development and APIs',
    icon: Server,
    color: 'from-purple-500 to-purple-600',
    skills: [
      { name: 'Node.js', level: 90, description: 'JavaScript runtime for backend development' },
      { name: 'Django', level: 85, description: 'Python web framework' },
      { name: '.NET', level: 80, description: 'Microsoft development platform' },
      { name: 'Express.js', level: 88, description: 'Node.js web framework' },
      { name: 'FastAPI', level: 82, description: 'Modern Python API framework' }
    ]
  },
  {
    title: 'Database Technologies',
    description: 'Data storage and management solutions',
    icon: Database,
    color: 'from-orange-500 to-orange-600',
    skills: [
      { name: 'PostgreSQL', level: 90, description: 'Relational database management' },
      { name: 'MongoDB', level: 85, description: 'NoSQL document database' },
      { name: 'SQL Server', level: 80, description: 'Microsoft database platform' },
      { name: 'Redis', level: 75, description: 'In-memory data structure store' },
      { name: 'MySQL', level: 82, description: 'Open-source relational database' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    description: 'Cloud platforms and deployment tools',
    icon: Cloud,
    color: 'from-cyan-500 to-cyan-600',
    skills: [
      { name: 'AWS', level: 85, description: 'Amazon Web Services cloud platform' },
      { name: 'Docker', level: 80, description: 'Containerization platform' },
      { name: 'Git', level: 92, description: 'Version control and collaboration' },
      { name: 'CI/CD', level: 75, description: 'Continuous integration and deployment' },
      { name: 'Linux', level: 78, description: 'Unix-like operating system' }
    ]
  },
  {
    title: 'Tools & Frameworks',
    description: 'Development tools and frameworks',
    icon: Zap,
    color: 'from-pink-500 to-pink-600',
    skills: [
      { name: 'GraphQL', level: 80, description: 'Query language for APIs' },
      { name: 'REST APIs', level: 90, description: 'Representational state transfer' },
      { name: 'Microservices', level: 85, description: 'Distributed system architecture' },
      { name: 'JWT', level: 88, description: 'JSON Web Token authentication' },
      { name: 'OAuth2', level: 82, description: 'Authorization framework' }
    ]
  }
];

const additionalSkills = [
  { name: 'Financial Systems', icon: Shield },
  { name: 'Performance Optimization', icon: Zap },
  { name: 'System Architecture', icon: Cpu },
  { name: 'API Design', icon: Globe },
  { name: 'Database Optimization', icon: Database },
  { name: 'Security Implementation', icon: Shield },
  { name: 'Code Review', icon: Code },
  { name: 'Technical Documentation', icon: Globe },
  { name: 'Agile Development', icon: Zap },
  { name: 'Team Leadership', icon: Server },
  { name: 'Problem Solving', icon: Cpu },
  { name: 'Continuous Learning', icon: Code }
];

export default function SkillsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [additionalSkillsRef, additionalSkillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-800 to-gray-600 dark:from-black dark:to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Technical Skills
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive expertise across the full technology stack, from frontend development 
              to backend systems, cloud infrastructure, and modern development practices.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Core Competencies
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              My skills span across multiple domains, enabling me to deliver 
              end-to-end solutions for complex technical challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-secondary-600 dark:text-secondary-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary-200 dark:bg-secondary-600 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: inView ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                      <p className="text-xs text-secondary-600 dark:text-secondary-400">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Skills & Tools */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={additionalSkillsRef} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Additional Skills & Tools
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Specialized skills and tools that enhance my development capabilities 
              and enable me to deliver high-quality solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <skill.icon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <span className="text-sm font-medium text-foreground">
                  {skill.name}
                </span>
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
              Ready to Leverage These Skills?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how my technical expertise can help solve your 
              development challenges and bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Start a Project
                </Button>
              </Link>
              <Link href="/experience">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Experience
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}