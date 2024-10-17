"use client"

import { useState } from 'react';
import Sidebar from './Sidebar';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex-grow flex">
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-30 bg-background`}>
        <Sidebar />
      </div>
      <div className="flex-grow">
        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 left-4 md:hidden z-40"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="h-4 w-4" />
        </Button>
        {children}
      </div>
    </div>
  );
}