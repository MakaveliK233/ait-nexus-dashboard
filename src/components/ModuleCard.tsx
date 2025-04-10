
import React from 'react';
import { LucideIcon } from 'lucide-react';

type ModuleCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  accentColor: string;
  onClick?: () => void;
};

const ModuleCard = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  accentColor,
  onClick 
}: ModuleCardProps) => {
  return (
    <div 
      className="ait-module-card h-full cursor-pointer"
      onClick={onClick}
      style={{ borderColor: accentColor }}
    >
      <div className="flex flex-col h-full">
        <div 
          className="ait-module-icon self-start"
          style={{ backgroundColor: color }}
        >
          <Icon className="h-7 w-7" />
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
          {description}
        </p>
        
        <div 
          className="self-end mt-4 text-sm font-medium flex items-center"
          style={{ color }}
        >
          Access Module
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: accentColor }}></div>
    </div>
  );
};

export default ModuleCard;
