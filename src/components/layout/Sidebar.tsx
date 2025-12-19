"use client";

import React, { useState, useEffect } from "react";
import { Home, Calendar, CheckSquare, BarChart2, User, Sparkles, Settings, LogOut, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useToast } from "@/components/ui/Toast";

export function Sidebar() {
    const pathname = usePathname();
    const { toast } = useToast();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Close mobile sidebar on route change
    useEffect(() => {
        setIsMobileOpen(false);
    }, [pathname]);

    const navItems = [
        { icon: Home, label: "Home", href: "/dashboard" },
        { icon: Sparkles, label: "AI Trainer", href: "/agent" },
        { icon: Calendar, label: "Plan", href: "/calendar" },
        { icon: CheckSquare, label: "Tasks", href: "/tasks" },
        { icon: BarChart2, label: "Insights", href: "/analytics" },
        { icon: User, label: "Profile", href: "/profile" },
    ];

    return (
        <>
            {/* Mobile Hamburger Trigger */}
            <button
                onClick={() => setIsMobileOpen(true)}
                className="lg:hidden fixed top-6 left-6 z-[60] p-3 bg-white border border-gray-100 rounded-2xl shadow-xl text-gray-900 transition-all hover:scale-105 active:scale-95"
            >
                <Menu size={24} strokeWidth={2.5} />
            </button>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[70] lg:hidden animate-in fade-in duration-300"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar Container */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-[80] lg:sticky lg:top-0 bg-white border-r border-gray-100 h-screen transition-all duration-500 ease-in-out flex flex-col",
                isCollapsed ? "lg:w-24" : "lg:w-72",
                isMobileOpen ? "w-[280px] translate-x-0 shadow-2xl" : "w-[280px] lg:translate-x-0 -translate-x-full"
            )}>
                {/* Upper Section */}
                <div className="flex-1 flex flex-col">
                    {/* Logo Area */}
                    <div className={cn(
                        "p-8 flex items-center justify-between transition-all duration-500",
                        isCollapsed ? "lg:justify-center" : "gap-3"
                    )}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-xl flex items-center justify-center text-white shadow-xl shadow-purple-200 shrink-0">
                                <Sparkles size={20} fill="currentColor" />
                            </div>
                            {(!isCollapsed || isMobileOpen) && (
                                <span className="text-xl font-black text-gray-900 tracking-tight">Taqsim</span>
                            )}
                        </div>

                        {/* Mobile Close Button */}
                        <button
                            onClick={() => setIsMobileOpen(false)}
                            className="lg:hidden p-2 text-gray-400 hover:text-gray-900 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Main Nav */}
                    <nav className="px-4 space-y-2 mt-4 overflow-y-auto no-scrollbar">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center rounded-2xl transition-all duration-300 group relative",
                                        isCollapsed && !isMobileOpen ? "justify-center p-4" : "gap-4 px-6 py-4",
                                        isActive
                                            ? "bg-purple-50 text-[#7C3AED]"
                                            : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                                    )}
                                >
                                    <item.icon
                                        size={22}
                                        strokeWidth={isActive ? 3 : 2}
                                        className={cn("shrink-0 transition-transform group-hover:scale-110", isActive && "text-[#7C3AED]")}
                                    />
                                    {(!isCollapsed || isMobileOpen) && (
                                        <span className="text-xs font-black uppercase tracking-widest">
                                            {item.label}
                                        </span>
                                    )}

                                    {/* Active Indicator Bar */}
                                    {isActive && (
                                        <div className="absolute left-0 w-1 h-6 bg-[#7C3AED] rounded-r-full" />
                                    )}

                                    {/* Tooltip for collapsed state (Desktop only) */}
                                    {isCollapsed && !isMobileOpen && (
                                        <div className="hidden lg:block absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                                            {item.label}
                                        </div>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Collapse Toggle (Desktop only) */}
                {!isMobileOpen && (
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="hidden lg:flex absolute -right-3 top-20 w-6 h-6 bg-white border border-gray-100 rounded-full items-center justify-center text-gray-400 hover:text-[#7C3AED] shadow-sm z-50 transition-all hover:scale-110"
                    >
                        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                    </button>
                )}

                {/* Footer Area */}
                <div className={cn(
                    "p-6 border-t border-gray-50 space-y-2 transition-all duration-500",
                    isCollapsed && !isMobileOpen ? "flex flex-col items-center" : ""
                )}>
                    <button
                        onClick={() => toast("Settings Protocol: Local & Cloud environment synchronized.", "protocol")}
                        className={cn(
                            "flex items-center rounded-xl text-gray-400 font-bold text-sm hover:text-gray-600 hover:bg-gray-50 transition-all group relative border-none bg-transparent cursor-pointer active:scale-95",
                            isCollapsed && !isMobileOpen ? "justify-center p-3" : "gap-3 px-6 py-3 w-full"
                        )}
                    >
                        <Settings size={20} className="group-hover:rotate-45 transition-transform duration-500" />
                        {(!isCollapsed || isMobileOpen) && <span>Settings</span>}
                        {isCollapsed && !isMobileOpen && (
                            <div className="hidden lg:block absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                                Settings
                            </div>
                        )}
                    </button>

                    <Link href="/" className="w-full">
                        <button
                            onClick={() => toast("Session Terminated. Returning to secure portal...", "info")}
                            className={cn(
                                "flex items-center rounded-xl text-red-400 font-bold text-sm hover:text-red-500 hover:bg-red-50 transition-all group relative border-none bg-transparent cursor-pointer active:scale-95",
                                isCollapsed && !isMobileOpen ? "justify-center p-3" : "gap-3 px-6 py-3 w-full"
                            )}
                        >
                            <LogOut size={20} />
                            {(!isCollapsed || isMobileOpen) && <span>Sign Out</span>}
                            {isCollapsed && !isMobileOpen && (
                                <div className="hidden lg:block absolute left-full ml-4 px-3 py-2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                                    Sign Out
                                </div>
                            )}
                        </button>
                    </Link>
                </div>
            </aside>
        </>
    );
}
