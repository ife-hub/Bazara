import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Clock, AlertCircle, Search, Bell, Grid3x3, User, Home, Pencil,
    ChevronDown, Link
 } from 'lucide-react';
 import Head from 'next/head';
 import Image from 'next/image';
import ProfilePopup from './ProfilePopUp';

export default function Headers() {
  return (
    <>
    {/* Header */}  
    <Head>
        <title>Dashboard | Bazara</title>
        <meta name="description" content="View your dashboard metrics and tickets." />
      </Head>
    <header className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Left section - Logo and Search */}
        <div className="flex items-center gap-6 flex-1">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image 
                src="/images/logo.png"
                alt="Logo"
                className="logo"
                width={25}
                height={12.5}
            />
            <span className="text-xl font-semibold text-gray-900">Bazara</span>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
            Home
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Workbench
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Tickets
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Service Catalogue
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Knowledge Management
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Admin Settings
          </a>
        </nav>

        {/* Right section - Icons */}
        <div className="flex items-center gap-4 ml-8">
          <button className="text-gray-600 hover:text-gray-900"
                  style={{ cursor: 'pointer'}}>
            <Bell className="w-5 h-5" />
          </button>
          <button className="text-blue-600 hover:text-blue-700"
                  style={{ cursor: 'pointer'}}>
            <Grid3x3 className="w-5 h-5" />
          </button>
          {/* <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700">
            <User className="w-5 h-5" />
          </button> */}
          <ProfilePopup />
        </div>
      </div>
    </header>
    <div className="w-full bg-blue-600 h-12 flex items-center px-2">
        <button
            data-testid="blue-bar-home-btn"
            className="bg-white rounded-lg w-12 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <Home className="w-5 h-5 text-gray-700" />
        </button>

    </div>
    <div className="w-full bg-white border-b border-gray-200 h-14 flex items-center justify-between px-4">
      {/* Left section - All dropdown and Link icon */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm font-medium">
          All
          <ChevronDown className="w-4 h-4" />
        </button>
        
        <button className="text-gray-400 hover:text-gray-600">
          {/* <Link className="w-5 h-5" /> */}
          <Pencil className="w-4 h-4"/>
        </button>
      </div>

      {/* Right section - Search bar */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search in service request"
            className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white w-80"
          />
        </div>
        
        <button className="text-gray-400 hover:text-gray-600 text-sm">
          ⌘
        </button>
        
        <button className="text-gray-400 hover:text-gray-600 text-sm">
          K
        </button>
      </div>
    </div>
    </>
  );
}