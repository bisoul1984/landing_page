'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Community Finance App',
    description: 'Innovative microfinance platform designed to empower communities through accessible financial services, loan management, and financial inclusion solutions.',
    image: '/images/projects/community-finance.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'Tailwind CSS'],
    category: 'Full-Stack',
    status: 'Live',
    liveUrl: 'https://bisrat-microloan.netlify.app/',
    githubUrl: '#',
    date: '2024',
    features: [
      'Loan application and management system',
      'Community-based financial services',
      'Real-time transaction tracking',
      'Mobile-responsive design',
      'Secure payment processing'
    ]
  },
  {
    id: 2,
    title: 'AI Powered Career Mentor App',
    description: 'Intelligent career guidance platform leveraging artificial intelligence to provide personalized career advice, skill recommendations, and professional development pathways.',
    image: '/images/projects/ai-career-mentor.jpg',
    technologies: ['Next.js', 'Python', 'OpenAI API', 'MongoDB', 'TypeScript'],
    category: 'AI/ML',
    status: 'Live',
    liveUrl: 'https://ai-powered-career-mentor-assistant-4kdjifuzx.vercel.app/',
    githubUrl: '#',
    date: '2024',
    features: [
      'AI-powered career recommendations',
      'Skill gap analysis',
      'Personalized learning paths',
      'Industry insights and trends',
      'Interactive career planning tools'
    ]
  },
  {
    id: 3,
    title: 'Neighborhood Safety Alert App',
    description: 'Community-driven safety platform enabling real-time neighborhood alerts, incident reporting, and emergency notifications to enhance local security and community awareness.',
    image: '/images/projects/safety-alert.jpg',
    technologies: ['React', 'Firebase', 'Google Maps API', 'PWA', 'JavaScript'],
    category: 'Mobile',
    status: 'Live',
    liveUrl: 'https://neighborhood-safety-alert-system-c8.vercel.app/',
    githubUrl: '#',
    date: '2024',
    features: [
      'Real-time incident reporting',
      'Community alert system',
      'Location-based notifications',
      'Emergency contact integration',
      'Safety tips and resources'
    ]
  }
];

const categories = ['All', 'Full-Stack', 'AI/ML', 'Frontend', 'Backend', 'DevOps', 'Mobile'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-800 to-gray-600 dark:from-black dark:to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              My Projects
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              A showcase of my recent work, featuring full-stack applications, 
              AI-powered solutions, and community-focused platforms that demonstrate 
              my technical expertise and problem-solving abilities.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-secondary-600 dark:text-secondary-400 hover:bg-primary-100 dark:hover:bg-primary-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Tag className="w-8 h-8" />
                      </div>
                      <p className="text-sm opacity-80">{project.category}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <span className="flex items-center text-sm text-secondary-600 dark:text-secondary-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </span>
                  </div>

                  <p className="text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                    <ul className="text-xs text-secondary-600 dark:text-secondary-400 space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1 h-1 bg-primary-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                    {project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-secondary-300 dark:border-secondary-600 text-secondary-700 dark:text-secondary-300 rounded-lg text-sm font-medium hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors duration-200 flex items-center justify-center"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-secondary-600 dark:text-secondary-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create innovative solutions. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Start a Project
                </Button>
              </Link>
              <Link href="/skills">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View My Skills
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}