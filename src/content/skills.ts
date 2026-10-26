import type { Skill } from '@/types';

export const skills: Skill[] = [
  // Data Analysis
  { id: '1', name: 'Redshift', category: 'data', icon: 'database', proficiency: 95 },
  { id: '2', name: 'HIVE', category: 'data', icon: 'database', proficiency: 90 },
  { id: '3', name: 'PostgreSQL', category: 'data', icon: 'database', proficiency: 90 },
  { id: '4', name: 'Excel', category: 'data', icon: 'table', proficiency: 95 },
  { id: '5', name: 'Data Extraction', category: 'data', icon: 'download', proficiency: 90 },
  { id: '6', name: 'Data Cleaning', category: 'data', icon: 'filter', proficiency: 90 },
  { id: '7', name: 'Data Transformation', category: 'data', icon: 'git-branch', proficiency: 90 },
  { id: '8', name: 'Data Aggregation', category: 'data', icon: 'bar-chart', proficiency: 90 },

  // US Healthcare Domain
  { id: '9', name: 'ICD-10', category: 'healthcare', icon: 'file-text', proficiency: 95 },
  { id: '10', name: 'CPT-4', category: 'healthcare', icon: 'file-text', proficiency: 90 },
  { id: '11', name: 'HCPCS', category: 'healthcare', icon: 'file-text', proficiency: 90 },
  { id: '12', name: 'NDC', category: 'healthcare', icon: 'pill', proficiency: 85 },
  { id: '13', name: 'NPI', category: 'healthcare', icon: 'id-card', proficiency: 85 },
  { id: '14', name: 'HIPAA Compliance', category: 'healthcare', icon: 'shield', proficiency: 90 },
  { id: '15', name: 'Claims Data Pipelines', category: 'healthcare', icon: 'git-merge', proficiency: 90 },
  { id: '16', name: 'Clinical Data Pipelines', category: 'healthcare', icon: 'heart-pulse', proficiency: 85 },

  // Cloud & Big Data
  { id: '17', name: 'AWS S3', category: 'cloud', icon: 'cloud', proficiency: 95 },
  { id: '18', name: 'AWS Redshift', category: 'cloud', icon: 'database', proficiency: 90 },
  { id: '19', name: 'Hadoop', category: 'cloud', icon: 'server', proficiency: 80 },
  { id: '20', name: 'Large Healthcare Datasets', category: 'cloud', icon: 'database', proficiency: 90 },

  // Programming & Automation
  { id: '21', name: 'Python', category: 'programming', icon: 'python', proficiency: 95 },
  { id: '22', name: 'SQL', category: 'programming', icon: 'database', proficiency: 95 },
  { id: '23', name: 'Pandas', category: 'programming', icon: 'table', proficiency: 90 },
  { id: '24', name: 'Scripting', category: 'programming', icon: 'terminal', proficiency: 90 },
  { id: '25', name: 'Validation Automation', category: 'programming', icon: 'check-circle', proficiency: 90 },
  { id: '26', name: 'File Processing', category: 'programming', icon: 'file-cog', proficiency: 85 },
  { id: '27', name: 'Reporting', category: 'programming', icon: 'clipboard-list', proficiency: 85 },
  { id: '39', name: 'Vibe Coding', category: 'programming', icon: 'code', proficiency: 85 },

  // QA & ETL Testing
  { id: '28', name: 'ETL Test Design', category: 'qa', icon: 'clipboard-check', proficiency: 95 },
  { id: '29', name: 'Zephyr', category: 'qa', icon: 'test-tube', proficiency: 90 },
  { id: '30', name: 'Root Cause Analysis', category: 'qa', icon: 'search', proficiency: 90 },
  { id: '31', name: 'Data Validation', category: 'qa', icon: 'check-circle', proficiency: 95 },
  { id: '32', name: 'Source-to-Target Verification', category: 'qa', icon: 'git-compare', proficiency: 95 },
  { id: '33', name: 'Test Scenarios', category: 'qa', icon: 'list-todo', proficiency: 90 },

  // Collaboration
  { id: '34', name: 'Agile/Scrum', category: 'collaboration', icon: 'users', proficiency: 90 },
  { id: '35', name: 'Cross-functional Teams', category: 'collaboration', icon: 'users', proficiency: 90 },
  { id: '36', name: 'Mentoring', category: 'collaboration', icon: 'user-plus', proficiency: 85 },
  { id: '37', name: 'Requirements Analysis', category: 'collaboration', icon: 'file-text', proficiency: 85 },
];

export const skillCategories = [
  { id: 'data', label: 'Data Analysis', icon: 'database' },
  { id: 'healthcare', label: 'US Healthcare Domain', icon: 'heart-pulse' },
  { id: 'cloud', label: 'Cloud & Big Data', icon: 'cloud' },
  { id: 'programming', label: 'Programming & Automation', icon: 'code' },
  { id: 'qa', label: 'QA & ETL Testing', icon: 'clipboard-check' },
  { id: 'collaboration', label: 'Collaboration', icon: 'users' },
] as const;