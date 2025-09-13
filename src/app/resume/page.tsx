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
  name: 'Bisrate Tadesse',
  title: 'Full Stack Developer & Software Engineer',
  email: 'bekutadesse@gmail.com',
  phone: '(+251) 952455990',
  location: 'Addis Ababa, Ethiopia',
  website: 'https://bisratetadesse.dev',
  github: 'https://github.com/bisratetadesse',
  linkedin: 'https://www.linkedin.com/in/bisrate-tadesse',
  twitter: 'https://www.x.com/bisratetadesse'
};

const experience = [
  {
    title: 'Senior Software Developer',
    company: 'EthioCube Systems',
    location: 'Addis Ababa, Ethiopia',
    period: 'January 2021 - Current',
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
    technologies: ['Python', '.NET', 'JavaScript', 'CubeHCM', 'CubeORM', 'Financial Systems', 'API Integration']
  },
  {
    title: 'Back End Developer',
    company: 'Ethiopian Agricultural Transformation Agency',
    location: 'Addis Ababa, Ethiopia',
    period: 'August 2018 - December 2020',
    description: 'Designed and developed scalable backend systems, optimized database performance, and implemented secure authentication systems for agricultural transformation applications.',
    achievements: [
      'Designed and developed scalable RESTful and GraphQL APIs using Node.js and Django, improving data retrieval speed by 45%',
      'Optimized database queries and schema design in SQL and MongoDB, reducing query execution time by 35% and enhancing overall system performance',
      'Implemented secure authentication and authorization systems (JWT, OAuth2), strengthening data protection and compliance',
      'Built and maintained microservices architectures, increasing application modularity and reducing deployment risks by 30%',
      'Collaborated with frontend developers and product teams to deliver robust backend solutions, accelerating feature delivery by 20%',
      'Integrated third-party APIs and cloud services (AWS), enabling seamless functionality and expanding product capabilities'
    ],
    technologies: ['Node.js', 'Django', 'RESTful APIs', 'GraphQL', 'SQL', 'MongoDB', 'JWT', 'OAuth2', 'AWS', 'Microservices']
  },
  {
    title: 'Front End Developer',
    company: 'Libanos Furniture PLC',
    location: 'Addis Ababa, Ethiopia',
    period: 'August 2017 - February 2018',
    description: 'Developed responsive, mobile-first user interfaces and implemented modern frontend technologies to enhance user experience and accessibility.',
    achievements: [
      'Developed responsive, mobile-first user interfaces with React.js, improving cross-device compatibility and boosting user engagement by 30%',
      'Implemented reusable UI components with React and modern CSS frameworks, accelerating development speed by 25%',
      'Collaborated with designers and backend developers to ensure seamless integration of APIs, improving data accuracy and user experience',
      'Led cross-browser testing and debugging efforts, ensuring consistent performance across Chrome, Firefox, Safari, and Edge',
      'Enhanced accessibility and usability following WCAG standards, expanding reach to a broader user base',
      'Implemented secure client-side features, including form validation and safe API consumption, strengthening application reliability'
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3', 'Responsive Design', 'WCAG', 'Cross-browser Testing', 'API Integration']
  }
];

const skills = {
  'Frontend Development': ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'WCAG', 'Cross-browser Testing'],
  'Backend Development': ['Python', '.NET', 'Node.js', 'Django', 'RESTful APIs', 'GraphQL', 'JWT', 'OAuth2'],
  'Database & Storage': ['SQL', 'MongoDB', 'Database Design', 'Query Optimization', 'Data Modeling'],
  'Financial Systems': ['CubeHCM', 'CubeORM', 'Financial Modules', 'API Integration', 'System Optimization'],
  'Cloud & DevOps': ['AWS', 'Microservices', 'CI/CD', 'Git', 'System Architecture', 'Performance Optimization'],
  'Tools & Platforms': ['VS Code', 'Postman', 'GitHub', 'Jira', 'Slack', 'Cross-browser Testing Tools']
};


const education = [
  {
    degree: 'MBA, Project Management',
    institution: 'Sikkim Manipal University',
    period: 'October 2018 - July 2020',
    location: 'India',
    website: 'https://smu.edu.in/'
  },
  {
    degree: 'Computer Science',
    institution: 'HiLCoE School of Computer Science and Technology',
    period: 'September 2014 - July 2017',
    location: 'Ethiopia'
  }
];

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-800 to-gray-600 dark:from-black dark:to-gray-800 text-white">
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
              className="bg-gray-900 rounded-2xl p-8 shadow-lg mb-8"
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
              className="bg-gray-900 rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
                Professional Summary
              </h2>
              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                Experienced Software Developer with 7+ years of expertise in building scalable enterprise applications, 
                finance modules, and modern software solutions. Specialized in Python, .NET, JavaScript, and financial 
                systems development. Demonstrated ability to optimize system performance, reduce response times by up to 50%, 
                and deliver high-quality software solutions across multiple industries including finance, agriculture, and furniture. 
                Passionate about continuous learning and staying current with emerging technologies.
              </p>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg mb-8"
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
              className="bg-gray-900 rounded-2xl p-8 shadow-lg mb-8"
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
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-6">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center space-x-4 text-secondary-600 dark:text-secondary-400 text-sm">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </span>
                      {edu.website && (
                        <span className="flex items-center">
                          <Globe className="w-4 h-4 mr-1" />
                          <a 
                            href={edu.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 hover:underline"
                          >
                            Website
                          </a>
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
