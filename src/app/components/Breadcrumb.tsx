'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  link: string;
  text: string;
}

interface BreadcrumbProps {
  BC1?: BreadcrumbItem;
  BC2?: BreadcrumbItem;
  BC3?: BreadcrumbItem;
}

export default function Breadcrumb({ BC1, BC2, BC3 }: BreadcrumbProps) {
  const breadcrumbs = [BC1, BC2, BC3].filter(Boolean) as BreadcrumbItem[];

  return (
    <motion.nav 
      className="flex items-center space-x-2 text-sm text-gray-600 mb-6"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Home icon */}
      <Link 
        href="/" 
        className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        <span className="text-gray-900">Home</span>
      </Link>

      {/* Breadcrumb items */}
      {breadcrumbs.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          {index === breadcrumbs.length - 1 ? (
            // Last item (current page) - no link
            <span className="text-gray-900 font-medium">{item.text}</span>
          ) : (
            // Link items
            <Link 
              href={item.link}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {item.text}
            </Link>
          )}
        </div>
      ))}
    </motion.nav>
  );
} 