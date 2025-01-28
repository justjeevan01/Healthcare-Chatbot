import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, LogIn, Menu } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Bot className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">HealthCare AI</span>
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <Link to="/chat/medibot">
              <Button variant="ghost">MediBot</Button>
            </Link>
            <Link to="/chat/dietbot">
              <Button variant="ghost">DietBot</Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="flex items-center">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>

          <div className="flex items-center sm:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;