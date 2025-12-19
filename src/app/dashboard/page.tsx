"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Settings, Sparkles, Search, Bell, TrendingUp, Zap, Shield, CheckCircle2 } from "lucide-react";
import { TaskItem } from "@/components/features/TaskItem";
import { ScheduleEvent } from "@/components/features/ScheduleTimeline";
import { Card } from "@/components/ui/Card";
import { NewTaskModal } from "@/components/features/NewTaskModal";
import { useToast } from "@/components/ui/Toast";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
    const { toast } = useToast();
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <div className="min-h-screen pb-12 bg-[#F8FAFC]">
            {/* Responsive Top Bar - Professional Website Style */}
            <header className="flex items-center justify-between px-6 lg:px-10 py-5 bg-white/70 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
                <div className="flex items-center gap-4 lg:gap-6 flex-1 max-w-2xl">
                    {/* Space for hamburger on mobile */}
                    <div className="w-12 lg:hidden" />

                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 lg:w-10 lg:h-10 bg-purple-50 text-[#7C3AED] rounded-xl flex items-center justify-center">
                            <Zap size={18} className="lg:size-5" strokeWidth={3} />
                        </div>
                        <h2 className="text-xs lg:text-sm font-black text-gray-900 uppercase tracking-widest">Taqsim Matrix</h2>
                    </div>

                    <div className="relative flex-1 group hidden sm:block max-w-md ml-4">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#7C3AED] transition-all" size={18} />
                        <input type="text" placeholder="Omni-search for anything..." className="w-full bg-gray-50/50 border-2 border-transparent focus:border-purple-100 rounded-2xl py-2.5 pl-12 pr-4 text-sm font-bold placeholder:text-gray-300 focus:bg-white focus:ring-4 focus:ring-purple-50/50 transition-all duration-300" />
                    </div>
                </div>

                <div className="flex items-center gap-4 lg:gap-8">
                    <Link href="/agent">
                        <button className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white rounded-xl font-black text-xs uppercase tracking-[0.15em] shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all">
                            <Sparkles size={16} fill="currentColor" />
                            AI Optimizer
                        </button>
                    </Link>

                    <div className="flex items-center gap-2 lg:gap-4">
                        <Link href="/profile#notifications">
                            <button className="relative p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all">
                                <Bell size={22} />
                                <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white ring-2 ring-red-100" />
                            </button>
                        </Link>

                        <div className="hidden sm:block w-[1px] h-8 bg-gray-100 mx-1 lg:mx-2" />

                        <Link href="/profile">
                            <div className="flex items-center gap-3 pl-2 group cursor-pointer text-left">
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm font-black text-gray-900 leading-none group-hover:text-[#7C3AED] transition-colors">Alex Smith</p>
                                    <p className="text-[10px] font-black text-gray-400 mt-1 uppercase tracking-widest">Premium Member</p>
                                </div>
                                <div className="relative w-10 h-10 lg:w-11 lg:h-11 rounded-[1.2rem] overflow-hidden shadow-md ring-2 ring-white ring-offset-2 ring-offset-purple-50 group-hover:scale-105 transition-all duration-500">
                                    <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" fill />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="px-6 lg:px-10 mt-4 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Main Content Column */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* High Fidelity Hero Section */}
                        <section>
                            <Card className="p-10 relative overflow-hidden bg-white border-2 border-purple-50/50 shadow-[0_20px_50px_rgba(124,58,237,0.06)] rounded-[3rem]">
                                <div className="flex items-center justify-between mb-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-purple-200">
                                            <TrendingUp size={22} strokeWidth={3} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-gray-900 tracking-tight">Focus Peak</h3>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">AI Prioritized Priorities</p>
                                        </div>
                                    </div>
                                    <span
                                        onClick={() => toast("AI analyzed: 3 critical dependencies found. Strategic focus recommended.", "protocol")}
                                        className="text-[10px] font-black text-[#7C3AED] uppercase bg-[#F3E8FF] px-6 py-2.5 rounded-2xl tracking-[0.2em] border border-purple-100 cursor-help hover:bg-[#E9D5FF] transition-all"
                                    >
                                        Smart Priority
                                    </span>
                                </div>

                                <div className="space-y-5 relative z-10">
                                    <TaskItem title="Finalize Economics Paper" due="Due 11:00 AM" category="ACADEMICS" />
                                    <TaskItem title="Team Sync @ Library" due="2:00 PM - 3:00 PM" category="WORK" />
                                    <TaskItem title="Mindfulness Session" due="Wellness Goal" category="WELLNESS" />
                                </div>

                                {/* Abstract Design Elements */}
                                <div className="absolute top-[-50px] right-[-50px] w-80 h-80 bg-purple-50/40 rounded-full blur-[100px] -z-0" />
                                <div className="absolute bottom-[-20px] left-[-20px] w-40 h-40 bg-blue-50/30 rounded-full blur-[60px] -z-0" />
                            </Card>
                        </section>

                        {/* Expansive Schedule Section */}
                        <section className="space-y-8">
                            <div className="flex items-center justify-between px-2">
                                <div>
                                    <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-none mb-2">Daily Flow</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Syncing with calendar...</span>
                                    </div>
                                </div>
                                <Link href="/calendar">
                                    <button className="group flex items-center gap-2 text-sm font-black text-[#7C3AED] tracking-widest uppercase py-2 transition-all">
                                        Full Schedule
                                        <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-[#7C3AED] group-hover:text-white transition-all">
                                            <Plus size={16} />
                                        </div>
                                    </button>
                                </Link>
                            </div>

                            <div className="space-y-0 relative pl-4 lg:pl-6">
                                {/* Vertical Progress Line */}
                                <div className="absolute left-[23px] lg:left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-purple-100 via-gray-100 to-transparent" />

                                <ScheduleEvent time="09:00 AM" type="ACADEMICS" title="Psychology 101" location="Lecture Hall A" status="past" duration="1.5h" />
                                <ScheduleEvent time="11:30 AM" type="SOCIAL" title="Coffee with Dev Team" location="Tech Hub" status="upcoming" duration="45m" />
                                <ScheduleEvent time="01:30 PM" type="ACADEMICS" title="Physics Lab" location="Science Block" status="upcoming" energy="High Energy" duration="3h" />
                            </div>
                        </section>
                    </div>

                    {/* Right Sidebar: Deep Insights & Quick Stats */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            <Card
                                onClick={() => toast("Bio-Energy Insight: Your vitality is up 12% following morning meditation.", "protocol")}
                                className="p-10 relative overflow-hidden bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(124,58,237,0.08)] transition-all group cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block">Bio-Energy</span>
                                        <h4 className="text-lg font-black text-gray-900">Current Vitality</h4>
                                    </div>
                                    <div className="p-3 bg-yellow-50 rounded-[1.2rem] text-yellow-500 group-hover:scale-110 transition-transform">
                                        <Zap size={24} fill="currentColor" />
                                    </div>
                                </div>
                                <div className="flex items-end gap-3">
                                    <h2 className="text-6xl font-black text-gray-900 tracking-tighter">85<span className="text-3xl text-gray-300">%</span></h2>
                                    <div className="mb-2 flex items-center gap-1 px-3 py-1.5 bg-green-50 rounded-xl">
                                        <TrendingUp size={12} className="text-green-500" strokeWidth={3} />
                                        <span className="text-[10px] font-black text-green-600 uppercase">+5%</span>
                                    </div>
                                </div>
                                <div className="mt-8 h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 w-[85%] rounded-full shadow-[0_0_12px_rgba(250,204,21,0.4)]" />
                                </div>
                                <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-yellow-50/40 rounded-full blur-[80px] group-hover:bg-yellow-100/40 transition-colors" />
                            </Card>

                            <Link href="/tasks" className="block">
                                <Card
                                    onClick={() => toast("Mental Load: 12 active threads. Auto-blocking 2pm-4pm for deep focus.", "protocol")}
                                    className="p-10 relative overflow-hidden bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(124,58,237,0.08)] transition-all group h-full cursor-pointer"
                                >
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block">Mental Load</span>
                                            <h4 className="text-lg font-black text-gray-900">Burnout Guard</h4>
                                        </div>
                                        <div className="p-3 bg-indigo-50 rounded-[1.2rem] text-[#7C3AED] group-hover:scale-110 transition-transform">
                                            <Shield size={24} fill="currentColor" />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-6xl font-black text-gray-900 tracking-tighter">Low</h2>
                                        <p className="text-[10px] font-black text-gray-400 mt-4 uppercase tracking-[0.2em]">Resilience Optimized</p>
                                    </div>
                                    <div className="absolute bottom-[-10%] right-[-10%] opacity-[0.03] grayscale transition-all group-hover:scale-110 group-hover:rotate-12 group-hover:opacity-[0.06]">
                                        <Sparkles size={160} fill="currentColor" />
                                    </div>
                                </Card>
                            </Link>

                            <Link href="/analytics" className="block">
                                <Card className="p-10 bg-gradient-to-br from-[#1E1B4B] to-[#312E81] text-white shadow-2xl shadow-indigo-900/30 rounded-[3rem] relative overflow-hidden group h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                                            <Sparkles size={20} className="text-purple-300" fill="currentColor" />
                                        </div>
                                        <h4 className="text-xs font-black uppercase tracking-[0.25em]">Cognitive Insight</h4>
                                    </div>
                                    <p className="text-lg font-bold leading-relaxed opacity-90 mb-8">
                                        Your focus patterns suggest a <span className="text-purple-300">mid-day peak</span>. Open your high-load tasks then for maximum efficiency.
                                    </p>
                                    <button className="w-full py-5 bg-white text-[#1E1B4B] rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all hover:bg-purple-100 overflow-hidden relative">
                                        <span className="relative z-10">Expand Cognition</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </button>
                                    <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-purple-500/20 rounded-full blur-[60px]" />
                                </Card>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* Primary Action FAB - More Professional Floating Style */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-28 left-1/2 -translate-x-1/2 lg:bottom-12 lg:right-12 lg:left-auto lg:translate-x-0 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] text-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(124,58,237,0.5)] flex items-center justify-center hover:scale-110 hover:-rotate-12 active:scale-95 transition-all z-50 border-4 border-white/20 backdrop-blur-sm"
            >
                <Plus size={44} strokeWidth={3} />
            </button>

            <NewTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
