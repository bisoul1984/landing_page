import React from 'react';
import Link from 'next/link';

export default function MigrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20">
        <h1 className="text-4xl font-bold text-white mb-6">Cloud Migration Services</h1>
        <p className="text-lg text-gray-300 mb-6">
          As an AWS Solutions Architect and experienced Software Engineer, I help organizations seamlessly migrate their applications, data, and infrastructure to the cloud. My approach ensures minimal downtime, data integrity, and a smooth transition tailored to your business needs.
        </p>
        <h2 className="text-2xl font-semibold text-white mb-4">Migration Services Offered</h2>
        <ul className="list-disc list-inside text-gray-200 mb-6 space-y-2">
          <li>Cloud readiness assessment and planning</li>
          <li>Application and database migration to AWS</li>
          <li>Legacy system modernization</li>
          <li>Hybrid and multi-cloud migration strategies</li>
          <li>Data migration and synchronization</li>
          <li>Downtime minimization and risk mitigation</li>
          <li>Post-migration optimization and support</li>
          <li>Security and compliance during migration</li>
        </ul>
        <div className="mt-8">
          <Link href="/contact">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300">
              Contact Me for Migration Consulting
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 