import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, MoreVertical, Calendar, Filter, Search, Plus, ChevronDown } from 'lucide-react';
import dashboardData from '@/app/data/dashboard';
import Headers from '@/components/Headers';
import '../styles/global.css';
import Image from 'next/image';

export default function ChangeRequestByStatusChart() {
  return (
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center gap-2">
              {/* <span className="text-blue-600">🎫</span> */}
                  <Image
                        src="/images/h.png"
                        alt="Icon"
                        width={15}
                        height={15}
                    />
              Change Request by Status
            </h3>
            <button className="flex items-center gap-2 text-sm border border-gray-200 rounded px-3 py-1.5">
              <Calendar className="w-4 h-4" />
              24/04/2025
            </button>
          </div>
          <div className="flex gap-4 mb-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span>Emergency</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span>Normal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span>Standard</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dashboardData.changeByStatus}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Emergency" stroke="#ef4444" strokeWidth={2} />
              <Line type="monotone" dataKey="Normal" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="Elevated" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
  );
}