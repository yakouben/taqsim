"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Settings, Shield, Bell, HelpCircle, LogOut, ArrowLeft, Sparkles, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { useToast } from "@/components/ui/Toast";
import { cn } from "@/lib/utils";

export default function ProfilePage() {
    const { toast } = useToast();
    const menuItems = [
        { icon: User, label: "Identity & Bio", color: "text-blue-500", desc: "Change your name and academic focus" },
        { icon: Settings, label: "Spatial Settings", color: "text-gray-500", desc: "Sidebar and layout customization" },
        { icon: Bell, label: "Notification Nodes", color: "text-purple-500", desc: "Manage focus alerts and system pings" },
        { icon: Shield, label: "Access & Security", color: "text-teal-500", desc: "Passwords, keys, and session management" },
        { icon: HelpCircle, label: "Protocol Support", color: "text-orange-500", desc: "Tutorials and system assistance" },
    ];

    return (
        <div className="min-h-screen pb-20 bg-[#F8FAFC]">
            {/* Professional Profile Header */}
            <header className="px-6 lg:px-10 py-12 lg:py-20 bg-white border-b border-gray-50 flex flex-col items-center gap-8 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-[-50%] right-[-10%] w-[400px] h-[400px] bg-purple-50 rounded-full blur-[100px] -z-10" />

                <Link href="/dashboard" className="absolute left-6 lg:left-10 top-10 p-3 text-gray-400 hover:text-[#7C3AED] hover:bg-gray-50 rounded-2xl transition-all">
                    <ArrowLeft size={24} />
                </Link>

                <div className="relative">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl ring-4 ring-purple-50 group hover:scale-105 transition-all duration-700 animate-in zoom-in duration-1000">
                        <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Alex" fill className="group-hover:rotate-6 transition-transform duration-700" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-purple-600 rounded-2xl flex items-center justify-center text-white border-4 border-white shadow-lg animate-bounce duration-1000">
                        <Sparkles size={16} fill="currentColor" />
                    </div>
                </div>

                <div className="text-center space-y-2">
                    <h2 className="text-4xl font-black text-gray-900 tracking-tight">Alex Smith</h2>
                    <div className="flex flex-wrap justify-center gap-2">
                        <span className="px-4 py-1.5 bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest rounded-full border border-gray-100">Economics Senior</span>
                        <span className="px-4 py-1.5 bg-purple-50 text-[10px] font-black text-purple-600 uppercase tracking-widest rounded-full border border-purple-100">Top 1% Efficiency</span>
                    </div>
                </div>
            </header>

            <main className="max-w-3xl mx-auto p-6 lg:p-10 space-y-6">
                <div className="grid grid-cols-1 gap-4">
                    {menuItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => toast(`${item.label} Protocol: Accessing secure settings node.`, "protocol")}
                            className="w-full bg-white px-8 py-6 rounded-[2rem] border border-gray-50 flex items-center justify-between hover:bg-gray-50 transition-all group shadow-sm hover:shadow-xl hover:shadow-purple-900/5 hover:-translate-y-0.5 active:scale-[0.99]"
                        >
                            <div className="flex items-center gap-6">
                                <div className={cn("p-4 rounded-2xl bg-gray-50 transition-colors group-hover:bg-white", item.color)}>
                                    <item.icon size={26} />
                                </div>
                                <div className="text-left">
                                    <span className="block font-black text-gray-900 text-lg leading-tight uppercase tracking-tight">{item.label}</span>
                                    <span className="block text-sm font-bold text-gray-400 mt-1">{item.desc}</span>
                                </div>
                            </div>
                            <ChevronRight size={20} className="text-gray-200 group-hover:text-[#7C3AED] transition-all group-hover:translate-x-1" />
                        </button>
                    ))}
                </div>

                <div className="pt-10">
                    <Link href="/">
                        <button className="w-full bg-white p-6 rounded-[2rem] border-2 border-red-50 flex items-center justify-center gap-4 hover:bg-red-50 transition-all text-red-500 group">
                            <LogOut size={24} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="font-black uppercase tracking-widest text-sm">Terminate Session (Sign Out)</span>
                        </button>
                    </Link>
                </div>

                <div className="text-center pt-8">
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em]">Protocol Version 2.4.0 • Secured by Taqsim Lab</p>
                </div>
            </main>
        </div>
    );
}
