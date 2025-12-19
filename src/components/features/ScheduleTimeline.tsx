"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { MapPin, Clock, Zap, PlayCircle, CheckCircle2 } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import Image from "next/image";

interface ScheduleEventProps {
    time: string;
    type: "ACADEMICS" | "WELLNESS" | "WORK" | "SOCIAL" | "BREAK";
    title: string;
    location?: string;
    duration?: string;
    status?: "current" | "upcoming" | "past";
    energy?: "High Energy" | "Auto-blocked" | "Fixed Schedule";
    isBreak?: boolean;
}

export function ScheduleEvent({
    time,
    type,
    title,
    location,
    duration,
    status = "upcoming",
    energy,
    isBreak
}: ScheduleEventProps) {
    const { toast } = useToast();
    const colors = {
        ACADEMICS: "text-blue-500",
        WELLNESS: "text-teal-500",
        WORK: "text-purple-500",
        SOCIAL: "text-orange-400",
        BREAK: "text-gray-400"
    };

    const borders = {
        ACADEMICS: "border-l-blue-500",
        WELLNESS: "border-l-teal-500",
        WORK: "border-l-purple-500",
        SOCIAL: "border-l-orange-400",
        BREAK: "border-l-gray-200"
    };

    return (
        <div className="flex gap-6 relative">
            {/* Time Column */}
            <div className="w-20 pt-1 shrink-0">
                <span className="text-sm font-black text-gray-900 block">{time}</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {status === "current" ? "STARTING" : "PM"}
                </span>
            </div>

            {/* Vertical Line & Dot */}
            <div className="relative flex flex-col items-center">
                <div className={cn(
                    "w-4 h-4 rounded-full border-2 z-10 transition-all",
                    status === "current" ? "bg-white border-[#7C3AED] ring-4 ring-purple-100" : "bg-white border-gray-200"
                )} />
                <div className="absolute top-4 bottom-[-1.5rem] w-[1.5px] bg-gray-100" />
            </div>

            {/* Content Card */}
            <div className="flex-1 pb-8">
                {isBreak ? (
                    <div className="border border-dashed border-gray-200 rounded-[2rem] p-4 flex items-center justify-between opacity-60">
                        <div className="flex items-center gap-3">
                            <span className="text-lg">☕</span>
                            <div className="uppercase text-[10px] font-black tracking-widest text-gray-400">
                                Decompress • 30m
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={cn(
                        "rounded-[2rem] p-6 transition-all border flex items-center gap-6",
                        status === "current" ? "bg-white border-[#7C3AED] shadow-2xl shadow-purple-100/50" : "bg-white border-gray-100 hover:border-gray-200"
                    )}>
                        <div className={cn("w-1.5 h-16 rounded-full shrink-0", borders[type] || "bg-gray-100")} />

                        <div className="flex-1 space-y-3">
                            <div className="flex items-center gap-3">
                                <span className={cn("text-[10px] font-black tracking-widest uppercase", colors[type])}>
                                    {type}
                                </span>
                                {energy && (
                                    <div className="flex items-center gap-1 px-2 py-0.5 bg-gray-50 rounded-lg">
                                        {energy === "High Energy" ? <Zap size={10} className="text-yellow-500" /> : <Clock size={10} className="text-gray-400" />}
                                        <span className="text-[10px] font-bold text-gray-400">{energy}</span>
                                    </div>
                                )}
                            </div>

                            <h4 className="text-lg font-bold text-gray-900 leading-tight">{title}</h4>

                            <div className="flex items-center gap-4 text-xs text-gray-400 font-bold">
                                {location && <div className="flex items-center gap-1.5"><MapPin size={14} /> {location}</div>}
                                {duration && <div>• {duration}</div>}
                            </div>

                            {status === "current" && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); toast("Session initiated. Syncing biometrics...", "protocol"); }}
                                    className="flex items-center gap-2 px-6 py-2 bg-blue-50 text-blue-600 rounded-xl font-black text-xs transition-all hover:bg-blue-100 active:scale-95 mt-2"
                                >
                                    <PlayCircle size={14} fill="currentColor" className="text-white" />
                                    START
                                </button>
                            )}
                            {status === "past" && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); toast("Achievement logged to performance index.", "success"); }}
                                    className="flex items-center gap-2 px-6 py-2 bg-teal-50 text-teal-600 rounded-xl font-black text-xs transition-all hover:bg-teal-100 active:scale-95 mt-2"
                                >
                                    <CheckCircle2 size={14} fill="currentColor" className="text-white" />
                                    LOG
                                </button>
                            )}
                        </div>

                        <div
                            onClick={() => toast(`Temporal Interaction: Accessing ${title} context.`, "info")}
                            className="relative w-24 h-20 rounded-2xl overflow-hidden hidden md:block shrink-0 bg-gray-100 cursor-pointer hover:scale-105 active:scale-95 transition-all"
                        >
                            <Image
                                src={`https://api.dicebear.com/7.x/identicon/svg?seed=${title}&backgroundColor=f8fafc`}
                                alt="Event cover"
                                fill
                                className="object-cover opacity-80"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
