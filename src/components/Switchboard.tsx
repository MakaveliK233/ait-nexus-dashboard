
import React from 'react';
import ModuleCard from './ModuleCard';
import WidgetCard from './WidgetCard';
import { 
  Users, 
  GraduationCap, 
  CalendarRange, 
  FileText, 
  Building2, 
  CreditCard,
  BookOpen,
  BarChart4,
  Settings,
  HeartPulse,
  UserCog,
  BellRing
} from 'lucide-react';

const Switchboard = () => {
  const handleModuleClick = (moduleName: string) => {
    console.log(`Navigating to ${moduleName} module`);
    // In a real app, you would use navigation here
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AIT Information System</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Welcome to the Accra Institute of Technology Information System. Select a module to begin.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <WidgetCard
          title="Total Students"
          value="5,842"
          icon={<Users />}
          color="#0056A6"
        />
        <WidgetCard
          title="Academic Staff"
          value="348"
          icon={<GraduationCap />}
          color="#00A8A8"
        />
        <WidgetCard
          title="Active Courses"
          value="126"
          icon={<BookOpen />}
          color="#F26C24"
        />
        <WidgetCard
          title="Payment Success Rate"
          value="94%"
          icon={<CreditCard />}
          color="#5cb85c"
        />
      </div>

      {/* Main Modules */}
      <h2 className="text-xl font-semibold mb-4">System Modules</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <ModuleCard
          title="Student Management"
          description="Register, manage, and track student information, academic records, and enrollment status."
          icon={Users}
          color="#0056A6"
          accentColor="#0056A6"
          onClick={() => handleModuleClick('Student Management')}
        />
        
        <ModuleCard
          title="Course Management"
          description="Create, update, and manage course information, schedules, and academic requirements."
          icon={BookOpen}
          color="#00A8A8"
          accentColor="#00A8A8"
          onClick={() => handleModuleClick('Course Management')}
        />
        
        <ModuleCard
          title="Faculty Portal"
          description="Manage faculty information, course assignments, student grading, and academic reports."
          icon={GraduationCap}
          color="#6f42c1"
          accentColor="#6f42c1"
          onClick={() => handleModuleClick('Faculty Portal')}
        />
        
        <ModuleCard
          title="Billing & Payments"
          description="Process student payments, generate invoices, and track financial records."
          icon={CreditCard}
          color="#F26C24"
          accentColor="#F26C24"
          onClick={() => handleModuleClick('Billing & Payments')}
        />
        
        <ModuleCard
          title="Academic Calendar"
          description="Manage and view academic schedules, events, and important dates across the institution."
          icon={CalendarRange}
          color="#5cb85c"
          accentColor="#5cb85c"
          onClick={() => handleModuleClick('Academic Calendar')}
        />
        
        <ModuleCard
          title="Reports & Analytics"
          description="Generate comprehensive reports and analytics for academic performance and administrative review."
          icon={BarChart4}
          color="#FFB81C"
          accentColor="#FFB81C"
          onClick={() => handleModuleClick('Reports & Analytics')}
        />
      </div>

      {/* Additional Modules */}
      <h2 className="text-xl font-semibold mb-4">Administrative Modules</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ModuleCard
          title="Administration"
          description="Access administrative functions and system management tools."
          icon={Building2}
          color="#d9534f"
          accentColor="#d9534f"
          onClick={() => handleModuleClick('Administration')}
        />
        
        <ModuleCard
          title="Document Management"
          description="Store, retrieve, and manage institutional documents and files."
          icon={FileText}
          color="#0056A6"
          accentColor="#0056A6"
          onClick={() => handleModuleClick('Document Management')}
        />
        
        <ModuleCard
          title="System Settings"
          description="Configure system parameters, user permissions, and application settings."
          icon={Settings}
          color="#6c757d"
          accentColor="#6c757d"
          onClick={() => handleModuleClick('System Settings')}
        />
        
        <ModuleCard
          title="Student Affairs"
          description="Manage student welfare, counseling, and after-care services."
          icon={HeartPulse}
          color="#00A8A8"
          accentColor="#00A8A8"
          onClick={() => handleModuleClick('Student Affairs')}
        />
      </div>
    </div>
  );
};

export default Switchboard;
