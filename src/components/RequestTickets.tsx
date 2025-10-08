import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, MoreVertical, Calendar, Filter, Search, Plus, ChevronDown } from 'lucide-react';
import dashboardData from '@/app/data/dashboard';
import Headers from '@/components/Headers';
import '../styles/global.css';
import Image from 'next/image';

export default function RequestTickets() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="font-semibold flex items-center gap-2 mb-10">
        {/* <span className="text-blue-600">🎫</span> */}
                  <Image
                        src="/images/h.png"
                        alt="Icon"
                        width={15}
                        height={15}
                    />
        Request Tickets
      </h3>
      <div className="bg-blue-600 text-white px-4 py-2 mb-4 -mx-6 -mt-6 flex items-center justify-between"
        style={{margin: '1em', borderTopLeftRadius: '0.5em', borderTopRightRadius: '0.5em'}}>
        <span className="text-sm font-medium">Form Title</span>
        <span className="text-sm font-medium">Data Created</span>
        <span className="text-sm font-medium">Owner</span>
        <span className="text-sm font-medium">Status</span>
      </div>
      <div className="flex flex-col items-center justify-center py-8 text-gray-400">
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
          <div className="w-8 h-8 border-4 border-gray-300 rounded" />
        </div>
        <div className="text-sm font-medium">No Item found</div>
        <div className="text-xs">No item found in this Request Form...</div>
      </div>
    </div>
  );
}