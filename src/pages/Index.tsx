
import React from 'react';
import Header from '@/components/Header';
import Switchboard from '@/components/Switchboard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />
      <main className="flex-1 py-4">
        <Switchboard />
      </main>
      <footer className="border-t py-3 bg-white dark:bg-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Accra Institute of Technology. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
