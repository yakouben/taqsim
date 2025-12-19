"use client";

import React, { useState } from "react";
import { Plus, Search, Filter, BookOpen, Briefcase, Heart, Sparkles, CheckCircle2, ListFilter, LayoutGrid } from "lucide-react";
import { TaskItem } from "@/components/features/TaskItem";
import { NewTaskModal } from "@/components/features/NewTaskModal";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { useToast } from "@/components/ui/Toast";
import Link from "next/link";
import Image from "next/image";

export default function TasksPage() {
    const { toast } = useToast();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("All");

    const tabs = ["All", "Academics", "Work", "Wellness"];

    return (
        <div className="min-h-screen pb-12 bg-[#F8FAFC]">
            {/* Pro Website Top Bar */}
            <header className="flex items-center justify-between px-6 lg:px-10 py-5 bg-white/70 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
                <div className="flex items-center gap-4 lg:gap-6 flex-1 max-w-2xl">
                    {/* Space for hamburger on mobile */}
                    <div className="w-12 lg:hidden" />

                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 lg:w-10 lg:h-10 bg-purple-50 text-[#7C3AED] rounded-xl flex items-center justify-center">
                            <CheckCircle2 size={18} className="lg:size-5" strokeWidth={3} />
                        </div>
                        <h2 className="hidden sm:block text-xs lg:text-sm font-black text-gray-900 uppercase tracking-widest whitespace-nowrap">Task Matrix</h2>
                    </div>

                    <div className="relative flex-1 group sm:ml-4">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#7C3AED] transition-all" size={18} />
                        <input type="text" placeholder="Global search for tasks..." className="w-full bg-gray-50/50 border-2 border-transparent focus:border-purple-100 rounded-2xl py-2.5 pl-12 pr-4 text-sm font-bold placeholder:text-gray-300 focus:bg-white focus:ring-4 focus:ring-purple-50/50 transition-all duration-300" />
                    </div>
                </div>
                <div className="flex items-center gap-3 lg:gap-4 ml-4">
                    <div className="hidden md:flex bg-gray-100/50 p-1.5 rounded-xl border border-gray-100">
                        <button className="p-2 bg-white shadow-sm rounded-lg text-[#7C3AED]"><ListFilter size={18} strokeWidth={3} /></button>
                        <button className="p-2 text-gray-400 hover:text-gray-600"><LayoutGrid size={18} strokeWidth={3} /></button>
                    </div>
                    <Link href="/profile">
                        <div className="w-10 h-10 rounded-[1.2rem] overflow-hidden shadow-md relative ring-2 ring-white ring-offset-2 ring-offset-purple-50 hover:scale-105 transition-all cursor-pointer">
                            <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" fill />
                        </div>
                    </Link>
                </div>
            </header>

            <main className="p-6 lg:p-10 max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
                {/* Professional Categories Toggle */}
                <div className="flex gap-4 mb-12 overflow-x-auto no-scrollbar pb-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-10 py-4 rounded-[1.5rem] text-[10px] font-black transition-all uppercase tracking-[0.2em] border-2",
                                activeTab === tab
                                    ? "bg-[#7C3AED] border-[#7C3AED] text-white shadow-[0_15px_35px_-10px_rgba(124,58,237,0.4)]"
                                    : "bg-white border-gray-50 text-gray-400 hover:border-purple-100 hover:text-gray-600"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    {/* Active Flow Column */}
                    <section className="lg:col-span-12 space-y-10">
                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)] animate-pulse" />
                                <h3 className="text-lg font-black text-gray-900 uppercase tracking-[0.3em] leading-none">Live Backlog</h3>
                            </div>
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">4 Active Items</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <TaskCard title="Chemistry Laboratory Synthesis" category="ACADEMICS" due="3:00 PM Today" priority="High" />
                            <TaskCard title="Bi-Weekly Grocery Manifest" category="WELLNESS" due="5:00 PM Today" priority="Medium" />
                            <TaskCard title="Product Strategy Pitch Deck" category="WORK" due="Tomorrow Morning" priority="Critical" />
                            <TaskCard title="Bio-Ethics Research Thesis" category="ACADEMICS" due="Friday EOD" priority="Low" />
                        </div>
                    </section>

                    {/* AI Prioritization Hub */}
                    <section className="lg:col-span-12">
                        <Card className="bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] rounded-[3rem] p-12 text-white shadow-[0_30px_70px_-20px_rgba(79,70,229,0.3)] relative overflow-hidden group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 relative z-10">
                                <div className="space-y-6 max-w-2xl">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                                            <Sparkles size={24} className="text-purple-200" fill="currentColor" />
                                        </div>
                                        <h3 className="text-sm font-black uppercase tracking-[0.3em]">Neural Recommendation</h3>
                                    </div>
                                    <p className="text-2xl font-bold leading-relaxed opacity-90">
                                        "Your cognitive load is optimal. I've flagged the <span className="text-purple-200 underline decoration-purple-300 decoration-4 underline-offset-8">Product Strategy Pitch Deck</span> for immediate focus during your next 90-minute slot."
                                    </p>
                                </div>
                                <button
                                    onClick={() => toast("Syncing AI deep-focus recommendations with your calendar flow...", "protocol")}
                                    className="px-12 py-5 bg-white text-[#4F46E5] rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl hover:bg-purple-50 transition-all hover:scale-105 hover:-rotate-1 active:scale-95 shrink-0"
                                >
                                    Sync to Schedule
                                </button>
                            </div>
                            {/* Decorative neural patterns */}
                            <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
                            <div className="absolute bottom-[-50px] right-[-50px] w-96 h-96 bg-purple-400/10 rounded-full blur-[100px]" />
                        </Card>
                    </section>

                    {/* Performance Archive */}
                    <section className="lg:col-span-12 space-y-10 pb-10">
                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
                                    <CheckCircle2 size={18} strokeWidth={3} />
                                </div>
                                <h3 className="text-lg font-black text-gray-500 uppercase tracking-[0.3em] leading-none">Archived Success</h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 opacity-60 hover:opacity-100 transition-opacity duration-700">
                            <TaskCard title="Macroeconomics Chapter 4 Analysis" category="ACADEMICS" due="Done" priority="High" completed />
                            <TaskCard title="Morning Deep Breath Protocol" category="WELLNESS" due="Done" priority="Low" completed />
                        </div>
                    </section>
                </div>
            </main>

            {/* Extreme Premium FAB */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-28 left-1/2 -translate-x-1/2 lg:bottom-12 lg:right-12 lg:left-auto lg:translate-x-0 w-20 h-20 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] text-white rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(124,58,237,0.5)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 border-4 border-white/20 group hover:rotate-90"
            >
                <Plus size={44} strokeWidth={4} className="transition-transform group-hover:scale-110" />
            </button>

            <NewTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

function TaskCard({ title, category, due, priority, completed }: any) {
    const { toast } = useToast();
    return (
        <Card
            onClick={() => toast(`Opening ${completed ? "archived success" : "active pursuit"}: ${title}`, "info")}
            className={cn(
                "p-8 transition-all duration-500 border-2 group cursor-pointer relative overflow-hidden active:scale-[0.98]",
                completed
                    ? "bg-gray-50/50 border-transparent hover:bg-white hover:border-gray-100"
                    : "bg-white border-gray-50 hover:border-purple-100 hover:shadow-[0_20px_50px_rgba(124,58,237,0.06)] hover:-translate-y-1"
            )}
        >
            <div className="flex items-start justify-between gap-6 relative z-10">
                <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                        <span className={cn(
                            "text-[8px] font-black tracking-[0.2em] uppercase px-3 py-1 rounded-lg border shadow-sm",
                            category === "ACADEMICS" ? "bg-blue-50 border-blue-100 text-blue-600" :
                                category === "WELLNESS" ? "bg-teal-50 border-teal-100 text-teal-600" :
                                    "bg-orange-50 border-orange-100 text-orange-600"
                        )}>
                            {category}
                        </span>
                        <span className={cn(
                            "text-[8px] font-black tracking-widest uppercase text-gray-300",
                            priority === "Critical" && "text-red-400"
                        )}>
                            {priority} Priority
                        </span>
                    </div>

                    <h4 className={cn(
                        "text-xl font-black text-gray-900 leading-tight group-hover:text-[#7C3AED] transition-colors",
                        completed && "text-gray-400 line-through"
                    )}>
                        {title}
                    </h4>

                    <div className="flex items-center gap-2">
                        <div className={cn("w-2 h-2 rounded-full", completed ? "bg-gray-200" : "bg-purple-200")} />
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{due}</span>
                    </div>
                </div>

                <div
                    onClick={(e) => { e.stopPropagation(); toast(`${title} marked as ${completed ? "incomplete" : "complete"}. Updating matrix...`, "success"); }}
                    className={cn(
                        "w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all shrink-0 active:scale-90",
                        completed
                            ? "bg-[#7C3AED] border-[#7C3AED] text-white shadow-lg shadow-purple-200"
                            : "bg-white border-gray-100 group-hover:border-[#7C3AED] group-hover:bg-purple-50 group-hover:text-[#7C3AED]"
                    )}
                >
                    {completed && <CheckCircle2 size={24} strokeWidth={3} />}
                </div>
            </div>

            {/* Background decorative accent */}
            {!completed && (
                <div className="absolute bottom-[-20%] right-[-10%] w-32 h-32 bg-purple-50 opacity-0 group-hover:opacity-100 rounded-full blur-[50px] transition-opacity duration-700" />
            )}
        </Card>
    );
}
