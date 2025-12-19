"use client";

import React from "react";
import { Sparkles, MapPin, PlayCircle, Plus, Search, Bell, Check, Clock, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { NewTaskModal } from "@/components/features/NewTaskModal";
import { Card } from "@/components/ui/Card";
import { useToast } from "@/components/ui/Toast";
import Image from "next/image";
import Link from "next/link";

export default function CalendarPage() {
    const { toast } = useToast();
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const days = [
        { day: "MON", date: "24", icon: "☀️" },
        { day: "Tue", date: "25", icon: "🌤️" },
        { day: "Wed", date: "26", icon: "☁️" },
        { day: "Thu", date: "27", icon: "🌧️" },
        { day: "Fri", date: "28", icon: "☀️" },
    ];

    const [selectedDate, setSelectedDate] = React.useState("24");

    return (
        <div className="min-h-screen pb-12 bg-[#F8FAFC]">
            {/* Pro Website Top Bar */}
            <header className="flex items-center justify-between px-6 lg:px-10 py-5 bg-white/70 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
                <div className="flex items-center gap-4 lg:gap-6 flex-1">
                    {/* Space for hamburger on mobile */}
                    <div className="w-12 lg:hidden" />

                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 lg:w-10 lg:h-10 bg-purple-50 text-[#7C3AED] rounded-xl flex items-center justify-center">
                            <CalendarIcon size={18} className="lg:size-5" strokeWidth={3} />
                        </div>
                        <h2 className="text-xs lg:text-sm font-black text-gray-900 uppercase tracking-widest">Temporal Flow</h2>
                    </div>
                </div>
                <div className="flex items-center gap-4 lg:gap-6">
                    <button
                        onClick={() => toast("Synchronizing temporal nodes with AI flow state...", "protocol")}
                        className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#F3E8FF] text-[#7C3AED] rounded-xl font-black text-[10px] uppercase tracking-[0.2em] border border-purple-100 shadow-sm hover:scale-105 active:scale-95 transition-all"
                    >
                        <Sparkles size={14} fill="currentColor" />
                        AI Smart Sync
                    </button>
                    <div className="hidden sm:block w-[1px] h-6 bg-gray-100 mx-2" />
                    <Link href="/profile">
                        <div className="w-10 h-10 rounded-[1.2rem] overflow-hidden shadow-md relative ring-2 ring-white ring-offset-2 ring-offset-purple-50 hover:scale-105 transition-all cursor-pointer">
                            <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" fill />
                        </div>
                    </Link>
                </div>
            </header>

            <main className="px-6 lg:px-10 py-6 max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

                    {/* Left: Interactive Date Navigator */}
                    <div className="lg:col-span-4 space-y-8">
                        <section className="bg-white p-8 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border-2 border-purple-50/30 relative overflow-hidden group">
                            <div className="flex items-center justify-between mb-10 relative z-10">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-[#7C3AED] uppercase tracking-[0.3em]">Horizon</p>
                                    <h2 className="text-2xl font-black text-gray-900 tracking-tighter">Week 4: Midterms</h2>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => toast("Horizon Search: Accessing temporal archive...", "info")}
                                        className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#7C3AED] hover:bg-purple-50 transition-all border border-transparent hover:border-purple-100 active:scale-90"
                                    >
                                        <Search size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-5 lg:grid-cols-1 gap-4 relative z-10">
                                {days.map((d) => (
                                    <div
                                        key={d.date}
                                        onClick={() => setSelectedDate(d.date)}
                                        className={cn(
                                            "flex flex-col lg:flex-row items-center justify-between px-6 py-5 rounded-[2rem] transition-all duration-500 cursor-pointer border-2 group/item",
                                            selectedDate === d.date
                                                ? "bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] border-[#7C3AED] text-white shadow-2xl shadow-purple-500/20"
                                                : "bg-gray-50/50 border-transparent text-gray-400 hover:border-purple-100 hover:bg-white active:scale-[0.98]"
                                        )}
                                    >
                                        <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-6">
                                            <span className={cn("text-2xl font-black tracking-tighter", selectedDate === d.date ? "text-white" : "text-gray-900")}>{d.date}</span>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{d.day}</span>
                                        </div>
                                        <span className="text-xl lg:text-2xl transition-transform group-hover/item:scale-125">{d.icon}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Background Glow */}
                            <div className="absolute top-[-20%] right-[-20%] w-60 h-60 bg-purple-50 opacity-0 group-hover:opacity-100 rounded-full blur-[80px] transition-opacity duration-1000" />
                        </section>

                        {/* Smart Insight Pro Card */}
                        <Card className="p-8 bg-white border-2 border-[#7C3AED]/5 shadow-[0_15px_40px_rgba(124,58,237,0.04)] rounded-[3rem] group">
                            <div className="flex items-start gap-5">
                                <div className="p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-[1.2rem] shadow-inner mt-0.5 group-hover:rotate-12 transition-transform">
                                    <Sparkles size={22} className="text-[#7C3AED]" fill="currentColor" />
                                </div>
                                <div className="space-y-3">
                                    <span className="text-[10px] font-black text-[#7C3AED] uppercase tracking-[0.25em]">Cognitive Sync</span>
                                    <p className="text-sm font-bold text-gray-600 leading-relaxed italic">
                                        "Optimization applied: Physics Lab shifted to peak morning focus window to align with your personal chronotype data."
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Right: Detailed Horizon Timeline */}
                    <div className="lg:col-span-8 space-y-8 lg:space-y-12">
                        <div className="flex items-center justify-between mb-4 px-2">
                            <div className="space-y-1">
                                <h3 className="text-3xl font-black text-gray-900 tracking-tighter">Temporal View</h3>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Live Horizon Tracking</span>
                                </div>
                            </div>
                            <div className="flex bg-gray-100/50 p-1.5 rounded-[1.5rem] border border-gray-100">
                                <button className="px-6 py-3 bg-white shadow-sm rounded-[1.2rem] text-[10px] font-black uppercase tracking-widest text-[#7C3AED] transition-all">Day</button>
                                <button className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-gray-600 transition-all">Week</button>
                            </div>
                        </div>

                        <div className="space-y-6 lg:space-y-10 relative">
                            {/* Professional Connection Line */}
                            <div className="absolute left-[24px] lg:left-[32px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-purple-200 via-gray-100 to-transparent" />

                            <ProTimelineItem
                                time="09:00"
                                period="AM"
                                type="ACADEMICS"
                                title="Advanced Calculus Review"
                                location="Mathematical Institute"
                                duration="2.5 hrs"
                                energy="Peak Focus"
                                status="current"
                                color="bg-blue-600"
                            />

                            {/* Vibrant Separator */}
                            <div className="flex items-center gap-10 py-6">
                                <div className="w-16 lg:w-20" />
                                <div className="flex-1 flex items-center gap-6">
                                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-200" />
                                    <div className="px-6 py-2 bg-purple-50/50 border border-purple-100 rounded-full text-[9px] font-black text-[#7C3AED] uppercase tracking-[0.3em] backdrop-blur-sm">
                                        Interval • 30m Buffer
                                    </div>
                                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-200" />
                                </div>
                            </div>

                            <ProTimelineItem
                                time="12:00"
                                period="PM"
                                type="WELLNESS"
                                title="Biophilia Restorative Walk"
                                location="Centennial Park"
                                duration="1 hr"
                                energy="Low Stakes"
                                status="past"
                                color="bg-teal-500"
                            />

                            <ProTimelineItem
                                time="02:00"
                                period="PM"
                                type="WORK"
                                title="Strategic Design Session"
                                location="Creative Lounge"
                                duration="4 hrs"
                                energy="Fixed Schedule"
                                color="bg-orange-500"
                            />
                        </div>
                    </div>
                </div>
            </main>

            {/* Modern High-End FAB */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-28 left-1/2 -translate-x-1/2 lg:bottom-12 lg:right-12 lg:left-auto lg:translate-x-0 w-20 h-20 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] text-white rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(124,58,237,0.5)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 border-4 border-white/20 hover:rotate-90 group"
            >
                <Plus size={44} strokeWidth={4} className="group-hover:scale-110 transition-transform" />
            </button>

            <NewTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

function ProTimelineItem({ time, period, type, title, location, duration, energy, status, color }: any) {
    return (
        <div className="flex gap-10 lg:gap-14 relative group">
            {/* Time Anchor */}
            <div className="w-16 lg:w-20 pt-3 text-right shrink-0">
                <div className="space-y-0.5">
                    <span className="text-xl font-black text-gray-900 block leading-none">{time}</span>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">{period}</span>
                </div>
                {status === "current" && (
                    <div className="mt-4 flex items-center justify-end gap-1.5 animate-pulse">
                        <span className="text-[8px] font-black text-[#7C3AED] uppercase tracking-widest text-right leading-tight">Engaged</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                    </div>
                )}
            </div>

            {/* Visual Connection */}
            <div className="relative flex flex-col items-center">
                <div className={cn(
                    "w-6 h-6 rounded-full border-[4px] z-10 transition-all duration-500",
                    status === "current"
                        ? "bg-white border-[#7C3AED] ring-[12px] ring-purple-100/50 scale-125 shadow-xl shadow-purple-500/20"
                        : "bg-white border-gray-100 hover:border-purple-200"
                )} />
                {status === "current" && (
                    <div className="absolute top-2 w-2 h-2 rounded-full bg-[#7C3AED] z-20 animate-ping" />
                )}
            </div>

            {/* Content Horizon */}
            <div className="flex-1 pb-4">
                <div className={cn(
                    "bg-white rounded-[3rem] p-8 lg:p-10 transition-all duration-700 border-2 flex flex-col md:flex-row md:items-center gap-8 lg:gap-12 relative overflow-hidden group/card",
                    status === "current"
                        ? "border-purple-100 shadow-[0_30px_70px_-20px_rgba(124,58,237,0.12)] bg-gradient-to-br from-white to-purple-50/10"
                        : "border-gray-50 shadow-[0_15px_45px_rgba(0,0,0,0.02)] hover:border-purple-100 hover:shadow-[0_20px_55px_rgba(124,58,237,0.06)]"
                )}>
                    {/* Accent Line */}
                    <div className={cn("w-2 h-24 rounded-full shrink-0 shadow-lg", color)} />

                    <div className="flex-1 space-y-6">
                        <div className="flex flex-wrap items-center gap-4">
                            <span className={cn(
                                "text-[9px] font-black tracking-[0.2em] uppercase px-4 py-1.5 rounded-xl border-2 transition-colors",
                                status === "current" ? "bg-purple-50 border-purple-100 text-[#7C3AED]" : "bg-gray-50 border-transparent text-gray-400"
                            )}>
                                {type}
                            </span>
                            {energy && (
                                <div className="flex items-center gap-2 px-4 py-1.5 bg-gray-50/50 rounded-xl border border-gray-100">
                                    <Sparkles size={12} className="text-yellow-500" fill="currentColor" />
                                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">{energy}</span>
                                </div>
                            )}
                        </div>

                        <h4 className="text-2xl lg:text-3xl font-black text-gray-900 leading-tight group-hover/card:text-[#7C3AED] transition-colors">{title}</h4>

                        <div className="flex flex-wrap items-center gap-8 text-xs font-black text-gray-400 uppercase tracking-widest">
                            {location && <div className="flex items-center gap-2.5"><MapPin size={18} className="text-gray-300" /> {location}</div>}
                            {duration && <div className="flex items-center gap-2.5"><Clock size={18} className="text-gray-300" /> {duration}</div>}
                        </div>

                        {status === "current" && (
                            <button className="flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.25em] transition-all hover:shadow-[0_15px_35px_-12px_rgba(124,58,237,0.5)] hover:-translate-y-1 mt-4">
                                <PlayCircle size={20} fill="white" className="text-transparent" />
                                Initiate Focus
                            </button>
                        )}
                        {status === "past" && (
                            <div className="flex items-center gap-3 px-8 py-3.5 bg-green-50/50 text-green-600 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] mt-4 border border-green-100 w-fit">
                                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white">
                                    <Check size={14} strokeWidth={4} />
                                </div>
                                Achieved
                            </div>
                        )}
                    </div>

                    <div className="hidden xl:block w-64 h-40 rounded-[2.5rem] bg-gray-50/50 relative overflow-hidden shrink-0 shadow-inner group-hover/card:scale-105 transition-all duration-1000 border-2 border-white/50">
                        <Image
                            src={`https://api.dicebear.com/7.x/identicon/svg?seed=${title}&backgroundColor=f8fafc`}
                            alt="cover"
                            fill
                            className="object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                    </div>
                </div>
            </div>
        </div>
    );
}
