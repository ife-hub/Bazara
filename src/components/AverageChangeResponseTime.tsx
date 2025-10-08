import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, MoreVertical, Calendar, Filter, Search, Plus, ChevronDown } from 'lucide-react';
import dashboardData from '@/app/data/dashboard';
import Headers from '@/components/Headers';
import '../styles/global.css';
import Image from 'next/image';

interface SparklineChartProps {
  data: { value: number }[];
}

export default function AverageChangeResponseTime({ data }: SparklineChartProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold">Average Change Response Time - Me</h3>
                  <button><MoreVertical className="w-5 h-5 text-gray-400" /></button>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-bold mb-1">{dashboardData.avgChangeResponse.minutes} <span className="text-base text-gray-500">Minutes</span></div>
                    <div className="text-xs text-red-500 flex items-center gap-1">
                      <TrendingDown className="w-3 h-3" />
                      +{Math.abs(dashboardData.avgChangeResponse.changePercent)}% Improving from this week
                    </div>
                  </div>
                  <div className="w-32 h-16">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data}>
                        <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
  );
}