"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Target,
    Briefcase,
    FileText,
    Users,
    Settings,
    LogOut,
    Shield
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Opportunities', href: '/opportunities', icon: Target },
    { name: 'Capture Workspace', href: '/capture', icon: Briefcase },
    { name: 'Proposals', href: '/proposals', icon: FileText },
    { name: 'Teaming Partners', href: '/partners', icon: Users },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col w-64 h-screen bg-slate-900 text-slate-300 border-r border-slate-800">
            <div className="flex items-center gap-2 px-6 h-20 border-b border-slate-800">
                <Shield className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold text-white tracking-tight">
                    GovTech<span className="text-blue-400 font-medium">Portal</span>
                </span>
            </div>

            <nav className="flex-1 px-4 py-8 space-y-2">
                {navigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-sm font-medium",
                                isActive
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/40"
                                    : "hover:bg-slate-800 hover:text-white"
                            )}
                        >
                            <Icon className={cn("w-5 h-5", isActive ? "text-white" : "group-hover:text-blue-400")} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <div className="px-4 py-3 bg-slate-800/50 rounded-2xl mb-4">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">User Role</p>
                    <p className="text-sm font-semibold text-white">Capture Director</p>
                </div>
                <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-colors">
                    <LogOut className="w-5 h-5" />
                    Sign Out
                </button>
            </div>
        </div>
    );
}
