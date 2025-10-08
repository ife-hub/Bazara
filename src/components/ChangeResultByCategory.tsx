import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, MoreVertical, Calendar, Filter, Search, Plus, ChevronDown } from 'lucide-react';
import dashboardData from '@/app/data/dashboard';
import Headers from '@/components/Headers';
import '../styles/global.css';
import Image from 'next/image';

export default function ChangeResultsByCategory() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold flex items-center gap-2">
                  {/* <span className="text-blue-600">🎫</span> */}
                  <Image
                        src="/images/h.png"
                        alt="Icon"
                        width={15}
                        height={15}
                    />
                  Change Result by Category
                </h3>
                <button><MoreVertical className="w-5 h-5 text-gray-400" /></button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#eab308" strokeWidth="20" strokeDasharray="113 283" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="20" strokeDasharray="85 283" strokeDashoffset="-113" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#ec4899" strokeWidth="20" strokeDasharray="42 283" strokeDashoffset="-198" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="20" strokeDasharray="43 283" strokeDashoffset="-240" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-xl font-bold">${dashboardData.changeByCategory.total.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Total Raised</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 justify-center text-xs">
                {dashboardData.changeByCategory.categories.map((cat, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                    <span>{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>
  );
}