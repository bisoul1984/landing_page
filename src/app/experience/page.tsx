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
    title: 'Senior Software Developer',
    company: 'EthioCube Systems',
    location: 'Addis Ababa, Ethiopia',
    period: 'January 2021 - Current',
    duration: '3+ years',
    description: 'Leading development of finance modules and enterprise applications, optimizing system performance, and delivering scalable solutions for financial operations.',
    achievements: [
      'Built and optimized finance modules in CubeHCM and CubeORM, reducing system response time by 30% and enhancing financial data processing efficiency',
      'Developed and maintained high-performance server-side applications using Python and .NET, improving transaction stability and backend reliability by 40%',
      'Designed and deployed intuitive, finance-focused interfaces in JavaScript, increasing user adoption and engagement by 25% for reporting and dashboards',
      'Integrated multiple financial front-end and back-end systems, boosting API response time by 50% and ensuring seamless data flow across accounting and HR platforms',
      'Collaborated with finance and operations teams to deliver scalable, enterprise-grade applications, accelerating development cycles by 20%',
      'Led troubleshooting and system optimization efforts, reducing downtime in critical financial operations by 35%',
      'Introduced and deployed new financial features, improving software adoption, compliance tracking, and user retention by 15%'
    ],
    technologies: ['Python', '.NET', 'JavaScript', 'React', 'PostgreSQL', 'SQL Server', 'REST APIs', 'Microservices', 'Docker', 'Git']
  },
  {
    id: 2,
    title: 'Back End Developer',
    company: 'Ethiopian Agricultural Transformation Agency',
    location: 'Addis Ababa, Ethiopia',
    period: 'August 2018 - December 2020',
    duration: '2+ years',
    description: 'Developed scalable backend systems and APIs for agricultural data management, focusing on performance optimization and data integrity.',
    achievements: [
      'Designed and developed scalable RESTful and GraphQL APIs using Node.js and Django, improving data retrieval speed by 45%',
      'Optimized database queries and schema design in SQL and MongoDB, reducing query execution time by 35% and enhancing overall system performance',
      'Implemented secure authentication and authorization systems (JWT, OAuth2), strengthening data protection and compliance',
      'Built and maintained microservices architectures, increasing application modularity and reducing deployment risks by 30%',
      'Collaborated with frontend developers and product teams to deliver robust backend solutions, accelerating feature delivery by 20%',
      'Integrated third-party APIs and cloud services, enabling seamless functionality and expanding product capabilities'
    ],
    technologies: ['Node.js', 'Django', 'Python', 'MongoDB', 'PostgreSQL', 'GraphQL', 'JWT', 'OAuth2', 'AWS', 'Docker', 'Redis']
  },
  {
    id: 3,
    title: 'Front End Developer',
    company: 'Libanos Furniture PLC',
    location: 'Addis Ababa, Ethiopia',
    period: 'August 2017 - February 2018',
    duration: '6 months',
    description: 'Developed responsive user interfaces and improved user experience for furniture e-commerce platform.',
    achievements: [
      'Developed responsive, mobile-first user interfaces with React.js, improving cross-device compatibility and boosting user engagement by 30%',
      'Implemented reusable UI components with React and modern CSS frameworks, accelerating development speed by 25%',
      'Collaborated with designers and backend developers to ensure seamless integration of APIs, improving data accuracy and user experience',
      'Led cross-browser testing and debugging efforts, ensuring consistent performance across Chrome, Firefox, Safari, and Edge',
      'Enhanced accessibility and usability following WCAG standards, expanding reach to a broader user base',
      'Implemented secure client-side features, including form validation and safe API consumption, strengthening application reliability'
    ],
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'REST APIs', 'Git', 'Responsive Design', 'WCAG', 'Cross-browser Testing']
  }
];

const skills = [
  { category: 'Programming Languages', items: ['Python', 'JavaScript', 'TypeScript', 'C#', 'SQL'] },
  { category: 'Frontend Technologies', items: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { category: 'Backend Technologies', items: ['Node.js', 'Django', '.NET', 'Express.js', 'FastAPI'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'SQL Server', 'Redis', 'MySQL'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Git', 'CI/CD', 'Linux'] },
  { category: 'Tools & Frameworks', items: ['GraphQL', 'REST APIs', 'Microservices', 'JWT', 'OAuth2'] }
];

export default function ExperiencePage() {
  const [ref, inView] = useInView({
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
              Professional Experience
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              My professional journey in software development, from frontend developer to senior software developer, 
              specializing in finance modules, enterprise applications, and scalable backend systems across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={job.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Job Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Briefcase className="w-6 h-6 text-primary-500 mr-3" />
                      <h2 className="text-2xl font-bold text-foreground">
                        {job.title}
                      </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-primary-500 font-semibold mb-2">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.company}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {job.period}
                      </span>
                      <span className="text-secondary-600 dark:text-secondary-400">
                        {job.duration}
                      </span>
                    </div>
                    <p className="text-secondary-600 dark:text-secondary-400 text-lg">
                      {job.description}
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Zap className="w-5 h-5 text-accent-500 mr-2" />
                    Key Achievements
                  </h3>
                  <ul className="space-y-3">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-secondary-600 dark:text-secondary-400">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Code className="w-5 h-5 text-primary-500 mr-2" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Technical Skills
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Comprehensive expertise across the full technology stack, 
              from frontend development to backend systems and cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  {skillGroup.category === 'Programming Languages' && <Code className="w-5 h-5 text-primary-500 mr-2" />}
                  {skillGroup.category === 'Frontend Technologies' && <Globe className="w-5 h-5 text-primary-500 mr-2" />}
                  {skillGroup.category === 'Backend Technologies' && <Server className="w-5 h-5 text-primary-500 mr-2" />}
                  {skillGroup.category === 'Databases' && <Database className="w-5 h-5 text-primary-500 mr-2" />}
                  {skillGroup.category === 'Cloud & DevOps' && <Cloud className="w-5 h-5 text-primary-500 mr-2" />}
                  {skillGroup.category === 'Tools & Frameworks' && <Zap className="w-5 h-5 text-primary-500 mr-2" />}
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <span className="text-secondary-600 dark:text-secondary-400 font-medium">
                        {skill}
                      </span>
                    </div>
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
              Let's discuss how my experience can help bring your projects to life 
              with scalable, high-performance solutions.
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