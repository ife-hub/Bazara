import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, MoreVertical, Calendar, Filter, Search, Plus, ChevronDown } from 'lucide-react';
import dashboardData from '@/app/data/dashboard';
import Headers from '@/components/Headers';
import '../styles/global.css';
import Image from 'next/image';

export default function IncidentTicketsTable() {

    const [searchTerm, setSearchTerm] = useState('');

  return (
        <div className='mb-6'>
            <div className="bg-white rounded-lg border border-gray-200 mb-6 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="font-semibold flex items-center gap-2">
              {/* <span className="text-blue-600">🎫</span> */}
                  <Image
                        src="/images/h.png"
                        alt="Icon"
                        width={15}
                        height={15}
                    />
              Incident Tickets Assigned to my Team
            </h3>
            <button><MoreVertical className="w-5 h-5 text-gray-400" /></button>
          </div>
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by user name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 text-sm border border-gray-200 rounded px-3 py-2">
                <Calendar className="w-4 h-4" />
                24/04/2025
              </button>
              <button className="flex items-center gap-2 text-sm border border-gray-200 rounded px-3 py-2">
                <Filter className="w-4 h-4" />
                More Filters
              </button>
              <button className="flex items-center gap-2 text-sm bg-blue-600 text-white rounded px-4 py-2">
                <Plus className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
          <table className="w-full">
            <thead className="bg-blue-600 text-white text-sm">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Title</th>
                <th className="px-4 py-3 text-left font-medium">ID</th>
                <th className="px-4 py-3 text-left font-medium">Category</th>
                <th className="px-4 py-3 text-left font-medium">Priority</th>
                <th className="px-4 py-3 text-left font-medium">Created By</th>
                <th className="px-4 py-3 text-left font-medium">Created On</th>
                <th className="px-4 py-3 text-left font-medium">Assigned To</th>
                <th className="px-4 py-3 text-left font-medium">Status</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {dashboardData.incidentTickets.map((ticket, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3">{ticket.title}</td>
                  <td className="px-4 py-3">{ticket.id}</td>
                  <td className="px-4 py-3">{ticket.category}</td>
                  <td className="px-4 py-3">{ticket.priority}</td>
                  <td className="px-4 py-3">{ticket.createdBy}</td>
                  <td className="px-4 py-3">{ticket.createdOn}</td>
                  <td className="px-4 py-3">{ticket.assignedTo}</td>
                  <td className="px-4 py-3">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button><MoreVertical className="w-4 h-4 text-gray-400" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-6"></div>
        </div>
  );
}