
import React from 'react';
import { Bell, Moon, Search, Sun, User, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';
import { Card } from './ui/card';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-gradient-to-r from-ait-blue to-ait-teal text-white sticky top-0 z-30">
      <div className="container mx-auto">
        {/* Top navigation bar */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/20">
          <div className="flex items-center gap-2">
            <div className="font-heading font-bold text-2xl">
              AIT<span className="text-white">NEXUS</span>
            </div>
            <div className="text-sm font-medium bg-white/10 px-2 py-0.5 rounded">
              Information System
            </div>
          </div>

          <div className="flex items-center gap-2">            
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <HelpCircle className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            
            <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="border border-white/20 rounded-full overflow-hidden text-white hover:bg-white/10">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                <DropdownMenuItem>Help & Support</DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {/* Secondary navigation - Updated to use cards */}
        <div className="flex items-center justify-between px-4 py-2">
          <nav className="flex gap-2 py-1 overflow-x-auto">
            <Card className="bg-white/10 border-white/10 hover:bg-white/20 transition-colors duration-200">
              <a href="#" className="px-4 py-2 text-white font-medium text-sm block">Personal Info</a>
            </Card>
            <Card className="bg-white/10 border-white/10 hover:bg-white/20 transition-colors duration-200">
              <a href="#" className="px-4 py-2 text-white font-medium text-sm block">Federal</a>
            </Card>
            <Card className="bg-white/10 border-white/10 hover:bg-white/20 transition-colors duration-200">
              <a href="#" className="px-4 py-2 text-white font-medium text-sm block">Campus</a>
            </Card>
            <Card className="bg-white/10 border-white/10 hover:bg-white/20 transition-colors duration-200">
              <a href="#" className="px-4 py-2 text-white font-medium text-sm block">Deductions</a>
            </Card>
            <Card className="bg-white/10 border-white/10 hover:bg-white/20 transition-colors duration-200">
              <a href="#" className="px-4 py-2 text-white font-medium text-sm block">Courses</a>
            </Card>
            <Card className="bg-white/10 border-white/10 hover:bg-white/20 transition-colors duration-200">
              <a href="#" className="px-4 py-2 text-white font-medium text-sm block">Files</a>
            </Card>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <div className="relative w-48">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-4 w-4" />
              <Input 
                placeholder="Search..." 
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
