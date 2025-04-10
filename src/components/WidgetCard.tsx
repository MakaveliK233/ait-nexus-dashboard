
import React from 'react';
import { cn } from '@/lib/utils';

type WidgetCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
  className?: string;
};

const WidgetCard = ({ title, value, icon, color, className }: WidgetCardProps) => {
  return (
    <div className={cn("bg-white dark:bg-gray-800 rounded-xl p-4 shadow", className)}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
          <p className="text-2xl font-semibold mt-1" style={{ color }}>
            {value}
          </p>
        </div>
        <div 
          className="rounded-full p-2 flex items-center justify-center"
          style={{ backgroundColor: `${color}15` }}
        >
          {React.cloneElement(icon as React.ReactElement, { 
            className: "h-5 w-5",
            style: { color }
          })}
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;
