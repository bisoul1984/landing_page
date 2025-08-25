'use client';

import { motion } from 'framer-motion';
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin,
  Twitter,
  Award,
  Briefcase,
  Calendar,
  Code,
  Database,
  Cloud,
  Server
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const personalInfo = {
  name: 'Wondwossen Hailu',
  title: 'Full Stack Developer & AWS Solutions Architect',
  email: 'wondwossenhailu7@gmail.com',
  phone: '+251913266990',
  location: 'Addis Ababa, Ethiopia',
  website: 'https://wondwossen.dev',
  github: 'https://github.com/WondwossenH9',
  linkedin: 'https://www.linkedin.com/in/wondwossen-tekle',
  twitter: 'https://www.x.com/WondwossenHail8'
};

const experience = [
  {
    title: 'Full Stack Developer',
    company: 'Ethiocube Systems',
    location: 'Addis Ababa, Ethiopia',
    period: 'October 2023 - Present',
    description: 'Leading end-to-end development of web applications, implementing robust APIs, and collaborating with cross-functional teams to deliver scalable solutions.',
    achievements: [
      'Developed and maintained full-stack web applications using React, Node.js, and TypeScript',
      'Implemented RESTful APIs and microservices architecture for enterprise applications',
      'Collaborated with designers and product managers to deliver user-centric solutions',
      'Optimized application performance and database queries, improving load times by 40%',
      'Mentored junior developers and conducted code reviews to maintain code quality',
      'Integrated AWS services for cloud deployment and infrastructure management'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker', 'Git']
  },
  {
    title: 'Backend Developer',
    company: 'Ethiocube Systems',
    location: 'Addis Ababa, Ethiopia',
    period: 'May 2022 - September 2023',
    description: 'Built robust backend services and APIs, managed database integrations, and optimized server performance for enterprise applications.',
    achievements: [
      'Designed and implemented scalable backend architectures using Node.js and Express',
      'Developed RESTful APIs and GraphQL endpoints serving 10,000+ daily requests',
      'Managed database design, optimization, and migrations for PostgreSQL and MongoDB',
      'Implemented authentication and authorization systems using JWT and OAuth2',
      'Integrated third-party services and payment gateways (Stripe, PayPal)',
      'Reduced API response times by 60% through database optimization and caching'
    ],
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'REST APIs', 'JWT']
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Taamcab Technology Solutions',
    location: 'Addis Ababa, Ethiopia',
    period: 'March 2021 - April 2022',
    description: 'Developed responsive user interfaces, implemented new features, and contributed to front-end architecture and best practices.',
    achievements: [
      'Built responsive and accessible user interfaces using HTML, CSS, and JavaScript',
      'Implemented modern UI/UX designs and interactions with React framework',
      'Optimized frontend performance and loading times, improving user experience',
      'Collaborated with backend developers for seamless API integration',
      'Maintained and refactored existing codebase following best practices',
      'Participated in agile development processes and sprint planning'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Responsive Design']
  }
];

const skills = {
  'Frontend Development': ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'],
  'Backend Development': ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'JWT Authentication', 'OAuth2'],
  'Database & Storage': ['PostgreSQL', 'MongoDB', 'Redis', 'Database Design', 'Data Modeling', 'Migrations'],
  'Cloud & DevOps': ['AWS', 'Docker', 'CI/CD', 'Git', 'GitHub Actions', 'Cloud Architecture'],
  'Tools & Platforms': ['VS Code', 'Postman', 'DBeaver', 'Figma', 'Jira', 'Slack']
};

const certifications = [
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    year: '2023',
    credential: 'AWS-SAA-2023'
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2023',
    credential: 'AWS-CP-2023'
  },
  {
    name: 'Professional Foundations Certificate',
    issuer: 'Meta',
    year: '2023',
    credential: 'META-PF-2023'
  },
  {
    name: 'Specializations Certificate',
    issuer: 'Meta',
    year: '2023',
    credential: 'META-SP-2023'
  }
];

const education = {
  degree: 'Bachelor of Art in Management',
  institution: 'Haromaya University',
  year: '2010',
  location: 'Haromaya, Ethiopia'
};

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

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
              Resume
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Professional resume showcasing my experience, skills, and achievements 
              in software development and cloud architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handlePrint}
                size="lg" 
                className="bg-white text-primary-600 hover:bg-primary-50"
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </Button>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Resume Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg mb-8"
            >
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {personalInfo.name}
                </h1>
                <p className="text-xl text-primary-600 dark:text-primary-400 mb-4">
                  {personalInfo.title}
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-secondary-600 dark:text-secondary-400 text-sm">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    {personalInfo.email}
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {personalInfo.phone}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {personalInfo.location}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </Link>
                <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </Link>
                <Link href={personalInfo.twitter} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
                Professional Summary
              </h2>
              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                Experienced Full Stack Developer with 3.5+ years of expertise in building scalable web applications 
                and cloud-native solutions. Proficient in modern JavaScript frameworks, backend development, and 
                AWS cloud services. Demonstrated ability to lead development teams, optimize application performance, 
                and deliver high-quality software solutions. Passionate about continuous learning and staying current 
                with emerging technologies.
              </p>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
                Work Experience
              </h2>
              
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {job.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                          {job.company}
                        </p>
                        <div className="flex items-center space-x-4 text-secondary-600 dark:text-secondary-400 text-sm">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {job.period}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                      {job.description}
                    </p>
                    
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
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Server className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
                Technical Skills
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
                Certifications
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border border-secondary-200 dark:border-secondary-700 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                    <p className="text-primary-600 dark:text-primary-400 text-sm mb-1">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary-600 dark:text-secondary-400 text-sm">{cert.year}</span>
                      <span className="text-xs text-secondary-500 dark:text-secondary-500 font-mono">
                        {cert.credential}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Cloud className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
                Education
              </h2>
              
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {education.degree}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                  {education.institution}
                </p>
                <div className="flex items-center space-x-4 text-secondary-600 dark:text-secondary-400 text-sm">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {education.year}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {education.location}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
