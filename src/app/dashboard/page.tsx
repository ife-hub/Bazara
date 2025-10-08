"use client";

import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, MoreVertical, Calendar, Filter, Search, Plus, ChevronDown } from 'lucide-react';
import dashboardData from '../data/dashboard';
import Headers from '@/components/Headers';
import '../../styles/global.css';
import Image from 'next/image';
import TicketsResolved from '@/components/TicketsResolved';
import PendingTickets from '@/components/PendingTickets';
import PendingApprovals from '@/components/PendingApprovals';
import ChangeResultsByCategory from '@/components/ChangeResultByCategory';
import AverageIncidentResponseTime from '@/components/AverageIncidentResponseTime';
import AverageChangeResponseTime from '@/components/AverageChangeResponseTime';
import ChangeRequestByStatusChart from '@/components/ChangeRequestByStatusChart';
import AwaitingApproval from '@/components/AwaitingApproval';
import IncidentTicketsTable from '@/components/IncidentTicketsTable';
import TicketResolutionChart from '@/components/TicketResolutionChart';
import RequestTickets from '@/components/RequestTickets';

// Mock Data
interface MetricCardProps {
  title: string;
  value: number;
  change: number;
  sparklineData?: SparkLine[];  // optional, if you have a trend indicator
}

interface SparkLine {
  value: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, sparklineData }) => (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
    <div className="text-xs text-gray-500 mb-1">{title}</div>
    <div className="flex items-end justify-between">
      <div>
        <div className="text-2xl font-semibold">{value.toLocaleString()}</div>
        <div className={`text-xs flex items-center gap-1 ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {Math.abs(change)}% this week
        </div>
      </div>
      <div className="w-20 h-12">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sparklineData}>
            <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
  );

export default function Dashboard() {
  const [view, setView] = useState('dashboard');

  const [searchTerm, setSearchTerm] = useState('');
  
  const sparklineData = [
    { value: 20 }, { value: 40 }, { value: 30 }, { value: 50 }, { value: 45 }, { value: 60 }, { value: 55 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Headers />
      <div className='bodyDiv'>
      <div className="w-full bg-white px-6 py-4 flex items-center justify-between">
        {/* Left section - Title */}
        <h1 className="text-xl font-semibold text-gray-900">Home</h1>

        {/* Right section - Dashboard View selector */}
        <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Dashboard View:</span>
            <button className="flex items-center gap-2 text-sm text-gray-700 border border-gray-300 rounded px-3 py-1.5 hover:bg-gray-50">
            Overall Dashboard View
            <ChevronDown className="w-4 h-4" />
            </button>
        </div>
        </div>
        
      <div className="p-6">
        {/* Metrics Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <MetricCard 
            title="Total Number of Users Tickets" 
            value={dashboardData.metrics.totalUsers.value} 
            change={dashboardData.metrics.totalUsers.change}
            sparklineData={sparklineData}
          />
          <MetricCard 
            title="Total Open Tickets" 
            value={dashboardData.metrics.totalOpenTickets.value} 
            change={dashboardData.metrics.totalOpenTickets.change}
            sparklineData={sparklineData}
          />
          <MetricCard 
            title="Total Closed Tickets" 
            value={dashboardData.metrics.totalClosedTickets.value} 
            change={dashboardData.metrics.totalClosedTickets.change}
            sparklineData={sparklineData}
          />
          <MetricCard 
            title="Total Due Tickets" 
            value={dashboardData.metrics.totalDueTickets.value} 
            change={dashboardData.metrics.totalDueTickets.change}
            sparklineData={sparklineData}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Tickets Resolved by Agent */}
            <TicketsResolved />

          {/* Right Column Cards */}
          <div className="space-y-6">
            {/* Pending Tickets */}
            <PendingTickets />

            {/* Pending Approvals */}
            <PendingApprovals />

            {/* Change Result by Category */}
            <ChangeResultsByCategory />
        </div>
        </div>

        {/* Response Time Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <AverageIncidentResponseTime data={sparklineData}/>
          <AverageChangeResponseTime data={sparklineData}/> 
        </div>

        {/* Change Request by Status Chart */}
        <ChangeRequestByStatusChart />

        {/* Awaiting Approval Table */}
        <AwaitingApproval />

        {/* Incident Tickets Table */}
        <IncidentTicketsTable />
        
  {/* Ticket Resolution Chart - Full Width */}
  <TicketResolutionChart />

  {/* Two Divs Side by Side */}
  <div className="grid grid-cols-2 gap-6">
    {/* Change Request by Status */}
    <ChangeRequestByStatusChart />

    {/* Request Tickets */}
    <RequestTickets />
  </div>
</div>

      </div>
      </div>
  );
}