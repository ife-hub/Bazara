import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, MoreVertical, Calendar, Filter, Search, Plus, ChevronDown } from 'lucide-react';
import dashboardData from '@/app/data/dashboard';
import Headers from '@/components/Headers';
import '../styles/global.css';
import Image from 'next/image';

export default function TicketsResolved() {
  return (
    <div className="col-span-2 bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                {/* <span className="text-blue-600">✕</span> */}
                <Image
                    src="/images/x.png"
                    alt="Icon"
                    width={15}
                    height={15}
                />
                Tickets Resolved by Agent - Team
              </h3>
              <button><MoreVertical className="w-5 h-5 text-gray-400" /></button>
            </div>
            <div className="tickRes space-y-3">
              {dashboardData.ticketsByAgent.map((agent, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 w-16">{agent.agent}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
                    <div 
                      className="h-full rounded-full" 
                      style={{ 
                        width: `${(agent.count / 500) * 100}%`,
                        height: 20,
                        backgroundColor: agent.color 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
  );
}