import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, MoreVertical, Calendar, Filter, Search, Plus, ChevronDown } from 'lucide-react';
import dashboardData from '@/app/data/dashboard';
import Headers from '@/components/Headers';
import '../styles/global.css';
import Image from 'next/image';

export default function ChangeRequestByStatus() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm">Change Request By Status</h3>
            <button><MoreVertical className="w-5 h-5 text-gray-400" /></button>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={dashboardData.changeByStatusSummary} layout="vertical">
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="status" hide />
              <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                {dashboardData.changeByStatusSummary.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2 text-xs">
            {dashboardData.changeByStatusSummary.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
                  <span>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
  );
}