import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, MoreVertical, Calendar, Filter, Search, Plus, ChevronDown } from 'lucide-react';
import dashboardData from '@/app/data/dashboard';
import Headers from '@/components/Headers';
import '../styles/global.css';
import Image from 'next/image';

export default function TicketResolutionChart() {
  return (
    <div className="bg-white mb-6 p-6 rounded-lg border border-gray-200 w-full">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold flex items-center gap-2">
        {/* <span className="text-blue-600">🎫</span> */}
                  <Image
                        src="/images/h.png"
                        alt="Icon"
                        width={15}
                        height={15}
                    />
        Ticket Resolution
      </h3>
      <button><MoreVertical className="w-5 h-5 text-gray-400" /></button>
    </div>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={dashboardData.ticketResolution}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="closed" fill="#3b82f6" name="Number of Closed Tickets" />
        <Bar dataKey="open" fill="#06b6d4" name="Number of Open Tickets" />
      </BarChart>
    </ResponsiveContainer>
  </div>
  );
}