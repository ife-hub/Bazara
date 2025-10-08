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

export default function AverageIncidentResponseTime({ data }: SparklineChartProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold">Average Incident Response Time - Me</h3>
              <button><MoreVertical className="w-5 h-5 text-gray-400" /></button>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl font-bold mb-1">{dashboardData.avgIncidentResponse.hours} <span className="text-base text-gray-500">Hours</span></div>
                <div className="text-xs text-green-500 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +{dashboardData.avgIncidentResponse.changePercent}% Improving from this week
                </div>
              </div>
              <div className="w-32 h-16">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
  );
}