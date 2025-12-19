"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BarChart, PieChart, TrendingUp, Bell, ArrowLeft, User, Sparkles, Zap } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { useToast } from "@/components/ui/Toast";

export default function AnalyticsPage() {
    const { toast } = useToast();
    return (
        <div className="min-h-screen pb-12 bg-[#F8FAFC]">
            <header className="px-6 lg:px-10 py-8 bg-white border-b border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/dashboard" className="p-2 -ml-2 text-gray-400 hover:text-[#7C3AED] transition-all">
                        <ArrowLeft size={24} />
                    </Link>
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">Insights</h2>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/profile#notifications">
                        <button className="relative p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all">
                            <Bell size={22} />
                            <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
                        </button>
                    </Link>
                    <Link href="/profile">
                        <div className="w-10 h-10 rounded-[1.2rem] overflow-hidden shadow-md ring-2 ring-white ring-offset-2 ring-offset-purple-50 hover:scale-105 transition-all">
                            <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" width={40} height={40} />
                        </div>
                    </Link>
                </div>
            </header>

            <main className="p-6 lg:p-10 space-y-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card
                        onClick={() => toast("Efficiency Insight: Academic productivity increased by 15.2% during morning hours.", "protocol")}
                        className="p-8 cursor-pointer hover:border-green-100 transition-all active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-green-50 rounded-2xl text-green-500">
                                <TrendingUp size={24} />
                            </div>
                            <span className="text-sm font-black text-gray-400 uppercase tracking-widest">Efficiency</span>
                        </div>
                        <div className="text-5xl font-black text-gray-900 mb-2">94%</div>
                        <p className="text-xs font-bold text-green-500">+12% vs last semester</p>
                    </Card>

                    <Card
                        onClick={() => toast("Flow State Insight: You've mastered 4 'Deep Work' sessions this week. Keep the momentum.", "protocol")}
                        className="p-8 cursor-pointer hover:border-purple-100 transition-all active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-purple-50 rounded-2xl text-purple-500">
                                <Sparkles size={24} />
                            </div>
                            <span className="text-sm font-black text-gray-400 uppercase tracking-widest">Flow State</span>
                        </div>
                        <div className="text-5xl font-black text-gray-900 mb-2">18h</div>
                        <p className="text-xs font-bold text-gray-400 tracking-tight">Total deep focus this week</p>
                    </Card>

                    <Card
                        onClick={() => toast("Projection: Based on current deliverables, your year-end GPA is trending towards 3.97.", "info")}
                        className="p-8 cursor-pointer hover:border-blue-100 transition-all active:scale-[0.98]"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-blue-50 rounded-2xl text-blue-500">
                                <BarChart size={24} />
                            </div>
                            <span className="text-sm font-black text-gray-400 uppercase tracking-widest">GPA Projection</span>
                        </div>
                        <div className="text-5xl font-black text-gray-900 mb-2">3.95</div>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-[98%]" />
                            </div>
                        </div>
                    </Card>
                </div>

                <Card className="p-10">
                    <h3 className="text-xl font-black text-gray-900 tracking-tight mb-8">Energy Chronotype Distribution</h3>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F1F5F9" strokeWidth="12" />
                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#7C3AED" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="60" />
                                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3B82F6" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="180" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <Zap className="text-yellow-500 mb-2" fill="currentColor" size={32} />
                                <span className="text-4xl font-black text-gray-900 leading-none">High</span>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Energy Peak</span>
                            </div>
                        </div>
                        <div className="flex-1 space-y-6 w-full">
                            <div
                                onClick={() => toast("Morning Deep Work: Optimal focus window detected between 8:00 AM and 11:30 AM.", "protocol")}
                                className="flex items-center justify-between p-6 bg-gray-50 rounded-[1.5rem] border border-gray-100 hover:border-purple-100 transition-all group cursor-pointer active:scale-[0.99]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-4 h-4 rounded-full bg-purple-600" />
                                    <span className="font-bold text-gray-900">Deep Work (AM)</span>
                                </div>
                                <span className="text-sm font-black text-purple-600">76% Effort</span>
                            </div>
                            <div
                                onClick={() => toast("PM Collaborative State: Energy dip detected. Suggesting social or collaborative blocks.", "info")}
                                className="flex items-center justify-between p-6 bg-gray-50 rounded-[1.5rem] border border-gray-100 hover:border-blue-100 transition-all group cursor-pointer active:scale-[0.99]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-4 h-4 rounded-full bg-blue-500" />
                                    <span className="font-bold text-gray-900">Collaborative (PM)</span>
                                </div>
                                <span className="text-sm font-black text-blue-600">24% Effort</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </main>
        </div>
    );
}
