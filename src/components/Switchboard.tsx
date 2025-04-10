
import React from 'react';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  CreditCard,
  FileText,
  BarChart4,
  HelpCircle,
  Check,
  ArrowRightCircle
} from 'lucide-react';
import { Button } from './ui/button';

const Switchboard = () => {
  const handleModuleClick = (moduleName: string) => {
    console.log(`Navigating to ${moduleName} module`);
    // In a real app, you would use navigation here
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          {/* Left sidebar */}
          <div className="bg-gray-100 dark:bg-gray-700 p-4 md:p-6">
            <nav className="space-y-2">
              <div className="bg-ait-blue text-white rounded py-2 px-3 flex items-center">
                <Check size={16} className="mr-2" />
                <span className="text-sm font-medium">Getting Started</span>
              </div>
              <div className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded py-2 px-3 flex items-center">
                <ArrowRightCircle size={16} className="mr-2" />
                <span className="text-sm font-medium">Student Management</span>
              </div>
              <div className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded py-2 px-3 flex items-center">
                <ArrowRightCircle size={16} className="mr-2" />
                <span className="text-sm font-medium">Faculty Portal</span>
              </div>
              <div className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded py-2 px-3 flex items-center">
                <ArrowRightCircle size={16} className="mr-2" />
                <span className="text-sm font-medium">Course Management</span>
              </div>
              <div className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded py-2 px-3 flex items-center">
                <ArrowRightCircle size={16} className="mr-2" />
                <span className="text-sm font-medium">Billing & Payments</span>
              </div>
              <div className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded py-2 px-3 flex items-center">
                <ArrowRightCircle size={16} className="mr-2" />
                <span className="text-sm font-medium">Reports & Analytics</span>
              </div>
              <div className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded py-2 px-3 flex items-center">
                <ArrowRightCircle size={16} className="mr-2" />
                <span className="text-sm font-medium">Administration</span>
              </div>
            </nav>
          </div>
          
          {/* Main content area */}
          <div className="col-span-3 p-6">
            <div className="flex items-start">
              {/* Welcome text section */}
              <div className="flex-1 pr-6">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  Hi, Welcome to AIT Information System!
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We've designed AIT NEXUS to be simple to use. Select an option below to begin managing your academic records, courses, or administrative tasks.
                </p>
                
                <Button 
                  className="bg-ait-blue hover:bg-ait-blue/90 text-white"
                  onClick={() => handleModuleClick('Getting Started')}
                >
                  Begin
                </Button>
              </div>
              
              {/* Image section */}
              <div className="hidden md:block">
                <img 
                  src="/lovable-uploads/29ce6e36-79f6-46f6-9ee3-6d0329415d10.png" 
                  alt="AIT Students and Faculty" 
                  className="w-64 h-auto rounded"
                />
              </div>
            </div>
            
            {/* Quick access links */}
            <div className="mt-12">
              <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Manage Your Academic Records</h2>
              <ul className="space-y-2 mb-8">
                <li>
                  <a href="#" className="text-ait-blue hover:text-ait-teal flex items-center">
                    <Check size={18} className="mr-2 text-ait-teal" />
                    Track your academic progress and view your grades
                  </a>
                </li>
                <li>
                  <a href="#" className="text-ait-blue hover:text-ait-teal flex items-center">
                    <Check size={18} className="mr-2 text-ait-teal" />
                    Register for new courses and manage your schedule
                  </a>
                </li>
                <li>
                  <a href="#" className="text-ait-blue hover:text-ait-teal flex items-center">
                    <Check size={18} className="mr-2 text-ait-teal" />
                    Make payments and view your financial records
                  </a>
                </li>
              </ul>
              
              <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Manage and Grow Your Business</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-ait-blue hover:text-ait-teal flex items-center">
                    <Check size={18} className="mr-2 text-ait-teal" />
                    Faculty members: Manage your courses and submit grades
                  </a>
                </li>
                <li>
                  <a href="#" className="text-ait-blue hover:text-ait-teal flex items-center">
                    <Check size={18} className="mr-2 text-ait-teal" />
                    Administrative staff: Access administrative functions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-ait-blue hover:text-ait-teal flex items-center">
                    <Check size={18} className="mr-2 text-ait-teal" />
                    IT support: Get help with technical issues
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switchboard;
