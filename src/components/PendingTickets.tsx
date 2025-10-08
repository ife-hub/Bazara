import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, MoreVertical, Calendar, Filter, Search, Plus, ChevronDown } from 'lucide-react';
import dashboardData from '@/app/data/dashboard';
import Headers from '@/components/Headers';
import '../styles/global.css';
import Image from 'next/image';

export default function PendingTickets() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-semibold flex items-center gap-2">
                      {/* <span className="text-blue-600">🎫</span> */}
                      <Image
                            src="/images/h.png"
                            alt="Icon"
                            width={15}
                            height={15}
                        />
                      Pending Tickets - Team
                    </h3>
                    <button><MoreVertical className="w-5 h-5 text-gray-400" /></button>
                  </div>
                  <div className="text-3xl font-bold mb-1">{dashboardData.pendingTickets.team}</div>
                  <div className="text-xs text-gray-500">Pending Tickets</div>
                </div>
  );
}