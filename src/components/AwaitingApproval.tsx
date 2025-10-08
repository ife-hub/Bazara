import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, MoreVertical, Calendar, Filter, Search, Plus, ChevronDown } from 'lucide-react';
import dashboardData from '@/app/data/dashboard';
import Headers from '@/components/Headers';
import '../styles/global.css';
import Image from 'next/image';

export default function AwaitingApproval() {
  return (
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
                          Awaiting Approval
                        </h3>
                        <button><MoreVertical className="w-5 h-5 text-gray-400" /></button>
                      </div>
                      <table className="w-full">
                        <thead className="bg-blue-600 text-white text-sm">
                          <tr>
                            <th className="px-4 py-3 text-left font-medium">Title</th>
                            <th className="px-4 py-3 text-left font-medium">Module</th>
                            <th className="px-4 py-3 text-left font-medium">ID</th>
                            <th className="px-4 py-3 text-left font-medium">Created By</th>
                            <th className="px-4 py-3 text-left font-medium">Created On</th>
                            <th className="px-4 py-3 text-left font-medium">Due Date</th>
                            <th className="px-4 py-3 text-left font-medium">Status</th>
                            <th className="px-4 py-3"></th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          {dashboardData.awaitingApproval.map((item, idx) => (
                            <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                              <td className="px-4 py-3">{item.title}</td>
                              <td className="px-4 py-3">{item.module}</td>
                              <td className="px-4 py-3">{item.id}</td>
                              <td className="px-4 py-3">{item.createdBy}</td>
                              <td className="px-4 py-3">{item.createdOn}</td>
                              <td className="px-4 py-3">{item.dueDate}</td>
                              <td className="px-4 py-3">
                                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                                  {item.status}
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
  );
}