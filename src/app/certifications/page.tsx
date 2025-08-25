'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Download, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';


const certifications = [
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    year: '2023',
    image: '/image/AWS Certified Solutions Architect - Associate certificate.pdf',
    viewUrl: '/api/pdf/AWS%20Certified%20Solutions%20Architect%20-%20Associate%20certificate.pdf',
    description: 'Validates expertise in designing distributed systems on AWS',
    credential: 'AWS-SAA-2023',
    type: 'pdf'
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2023',
    image: '/image/AWS Certified Cloud Practitioner certificate.pdf',
    viewUrl: '/api/pdf/AWS%20Certified%20Cloud%20Practitioner%20certificate.pdf',
    description: 'Foundation level certification for AWS cloud concepts',
    credential: 'AWS-CP-2023',
    type: 'pdf'
  },
  {
    name: 'Professional Foundations Certificate',
    issuer: 'Meta',
    year: '2023',
    image: '/image/professional-foundations-certificate-wondwosen-hailu.png',
    description: 'Professional development and career readiness certification',
    credential: 'META-PF-2023',
    type: 'image'
  },
  {
    name: 'Specializations Certificate',
    issuer: 'Meta',
    year: '2023',
    image: '/image/specializations-certificate-wondwossen-tekle (1).png',
    description: 'Specialized skills in software development and programming',
    credential: 'META-SP-2023',
    type: 'image'
  }
];

export default function CertificationsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  // Function to get the filename from the image path and encode it properly
  const getEncodedDownloadUrl = (imagePath: string) => {
    const filename = imagePath.split('/').pop();
    if (!filename) return imagePath;
    
    // Encode the filename properly for URL
    const encodedFilename = encodeURIComponent(filename);
    return `/image/${encodedFilename}`;
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
              Certifications & Credentials
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Professional certifications that validate my expertise in cloud technologies, 
              software development, and AWS architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
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
              Professional Certifications
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              These certifications demonstrate my commitment to continuous learning and 
              expertise in modern software development and cloud technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>

                {/* Certificate Display */}
                <div className="relative mb-6 rounded-lg overflow-hidden bg-secondary-100 dark:bg-secondary-700">
                  <div className="aspect-[4/3] relative">
                    {cert.type === 'image' ? (
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Award className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                          </div>
                          <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-2">
                            AWS Certificate
                          </p>
                                                     <div className="space-y-2">
                             <button
                               onClick={() => setSelectedPdf(cert.viewUrl || cert.image)}
                               className="inline-flex items-center px-3 py-1 bg-primary-600 text-white rounded-md text-sm hover:bg-primary-700 transition-colors"
                             >
                               <ExternalLink className="w-3 h-3 mr-1" />
                               View PDF
                             </button>
                           </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">
                    <p>Issued: {cert.year}</p>
                    <p className="font-mono text-xs mt-1">{cert.credential}</p>
                  </div>
                  <div className="flex space-x-2">
                                         {cert.type === 'pdf' ? (
                       <button
                         onClick={() => setSelectedPdf(cert.viewUrl || cert.image)}
                         className="p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                         title="View PDF"
                       >
                         <ExternalLink className="w-4 h-4" />
                       </button>
                     ) : (
                      <a
                        href={getEncodedDownloadUrl(cert.image)}
                        download
                        className="p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        title="Download Certificate"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-white dark:bg-secondary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Continuous Learning
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto mb-8">
              I believe in staying current with the latest technologies and best practices. 
              These certifications represent my commitment to professional development and 
              expertise in modern software development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">AWS Expertise</h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  Certified in AWS cloud architecture and development
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Professional Development</h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  Meta certifications in software development and career readiness
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Ongoing Learning</h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  Continuously pursuing new certifications and skills
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PDF Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-secondary-800 rounded-lg w-full max-w-6xl h-[90vh] relative">
            <div className="flex items-center justify-between p-4 border-b border-secondary-200 dark:border-secondary-700">
              <h3 className="text-lg font-semibold text-foreground">Certificate Viewer</h3>
              <button
                onClick={() => setSelectedPdf(null)}
                className="p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="h-full p-4">
              <iframe
                src={selectedPdf}
                className="w-full h-full border-0 rounded"
                title="Certificate PDF"
                style={{ minHeight: 'calc(90vh - 120px)' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
