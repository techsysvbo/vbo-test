"use client";

import Sidebar from '@/components/layout/Sidebar';
import { TrendingUp, Target, Award, AlertCircle } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-slate-950">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Capture Dashboard</h1>
            <p className="text-slate-400">Track your pipeline health and win-rate metrics in real-time.</p>
          </div>

          {/* KPI Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <KPICard
              title="Active Opportunities"
              value="24"
              change="+12%"
              trend="up"
              icon={<Target className="w-6 h-6" />}
            />
            <KPICard
              title="Pipeline Value"
              value="$18.4M"
              change="+8%"
              trend="up"
              icon={<TrendingUp className="w-6 h-6" />}
            />
            <KPICard
              title="Win Rate (6mo)"
              value="42%"
              change="+5%"
              trend="up"
              icon={<Award className="w-6 h-6" />}
            />
            <KPICard
              title="Compliance Risk"
              value="Low"
              change="2 items"
              trend="neutral"
              icon={<AlertCircle className="w-6 h-6" />}
            />
          </div>

          {/* Recent Opportunities */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4">Recent Opportunities</h2>
            <div className="space-y-3">
              <OpportunityRow
                title="DoD Cloud Modernization - Phase 2"
                agency="Department of Defense"
                value="$4.2M"
                deadline="Feb 15, 2026"
                status="Capture"
              />
              <OpportunityRow
                title="VA Electronic Health Records Integration"
                agency="Veterans Affairs"
                value="$2.8M"
                deadline="Mar 1, 2026"
                status="Qualify"
              />
              <OpportunityRow
                title="DHS Zero Trust Architecture Implementation"
                agency="Homeland Security"
                value="$6.1M"
                deadline="Feb 28, 2026"
                status="Proposal"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function KPICard({ title, value, change, trend, icon }: any) {
  const trendColor = trend === 'up' ? 'text-green-400' : trend === 'down' ? 'text-red-400' : 'text-slate-400';

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-blue-500/50 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
          {icon}
        </div>
        <span className={`text-sm font-semibold ${trendColor}`}>{change}</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
      <p className="text-sm text-slate-400">{title}</p>
    </div>
  );
}

function OpportunityRow({ title, agency, value, deadline, status }: any) {
  const statusColors: any = {
    'Capture': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Qualify': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    'Proposal': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  };

  return (
    <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-all">
      <div className="flex-1">
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <p className="text-sm text-slate-400">{agency}</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-right">
          <p className="font-bold text-white">{value}</p>
          <p className="text-xs text-slate-400">Due: {deadline}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[status]}`}>
          {status}
        </span>
      </div>
    </div>
  );
}
