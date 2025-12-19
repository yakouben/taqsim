"use client";

import React, { useState } from "react";
import { X, Sparkles, ChevronDown, Flag, Clock, Calendar, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

interface NewTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function NewTaskModal({ isOpen, onClose }: NewTaskModalProps) {
    const { toast } = useToast();
    const [taskName, setTaskName] = useState("");
    const [category, setCategory] = useState("Academics");
    const [effort, setEffort] = useState(2);
    const [priority, setPriority] = useState("Medium");
    const [isCreating, setIsCreating] = useState(false);

    const handleCreate = () => {
        if (!taskName) {
            toast("Protocol Violation: Objective must be defined.", "error");
            return;
        }
        setIsCreating(true);
        setTimeout(() => {
            toast(`Objective Locked In: ${taskName}`, "success");
            setTaskName("");
            setIsCreating(false);
            onClose();
        }, 800);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Dialog */}
            <div className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl shadow-purple-900/20 overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-8 duration-500">
                {/* Header */}
                <div className="px-10 pt-10 pb-6 flex items-center justify-between border-b border-gray-50 bg-gradient-to-br from-white to-purple-50/10">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-[#7C3AED]">
                            <Sparkles size={24} fill="currentColor" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-gray-900 tracking-tight">Initiate Focus</h2>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-0.5">AI Enhanced Planning</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-10 space-y-10">
                    {/* Smart Input */}
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-[#7C3AED] uppercase tracking-[0.2em] ml-2">Objective</label>
                        <div className="relative group">
                            <form onSubmit={(e) => { e.preventDefault(); handleCreate(); }}>
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder="What are we mastering today?"
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-purple-100 rounded-[1.5rem] py-6 px-8 text-xl font-bold text-gray-800 placeholder:text-gray-300 focus:bg-white focus:ring-8 focus:ring-purple-50 transition-all duration-300 outline-none"
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                />
                            </form>
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest hidden sm:block">Smart Input Active</span>
                                <div className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Category Selection */}
                        <div className="space-y-4">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2 font-black">Strategic Domain</label>
                            <div className="flex flex-wrap gap-2">
                                {["Academics", "Work", "Wellness", "Social"].map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setCategory(cat)}
                                        className={cn(
                                            "px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border-2",
                                            category === cat
                                                ? "bg-purple-100 border-[#7C3AED] text-[#7C3AED]"
                                                : "bg-gray-50 border-transparent text-gray-400 hover:border-purple-100 hover:text-gray-600"
                                        )}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Priority & Effort */}
                        <div className="flex gap-6">
                            <div className="flex-1 space-y-4">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2 font-black">Impact</label>
                                <button
                                    onClick={() => setPriority(priority === "High" ? "Medium" : "High")}
                                    className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-purple-100 transition-all group active:scale-95"
                                >
                                    <div className="flex items-center gap-3">
                                        <Flag size={18} className={priority === "High" ? "text-red-600" : "text-red-400"} />
                                        <span className="text-sm font-black text-gray-700">{priority}</span>
                                    </div>
                                    <ChevronDown size={14} className="text-gray-300 group-hover:text-purple-400 transition-colors" />
                                </button>
                            </div>
                            <div className="flex-1 space-y-4">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2 font-black">Energy</label>
                                <button
                                    onClick={() => setEffort(effort === 5 ? 1 : effort + 1)}
                                    className="w-full flex items-center justify-between px-6 py-4 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-purple-100 transition-all group active:scale-95"
                                >
                                    <div className="flex items-center gap-3">
                                        <Zap size={18} className="text-yellow-500" />
                                        <span className="text-sm font-black text-gray-700">Level {effort}</span>
                                    </div>
                                    <ChevronDown size={14} className="text-gray-300 group-hover:text-purple-400 transition-colors" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-50">
                        <div
                            onClick={() => toast("Temporal Optimizer: Opening calendar grid.", "info")}
                            className="flex items-center gap-2 px-6 py-3 bg-gray-50/50 rounded-xl border border-gray-100 text-[10px] font-black text-gray-400 uppercase tracking-widest cursor-pointer hover:bg-white hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all"
                        >
                            <Calendar size={14} />
                            Assign Deadline
                        </div>
                        <div
                            onClick={() => toast("Capacity Analyzer: Suggested duration 45m based on cognitive load.", "protocol")}
                            className="flex items-center gap-2 px-6 py-3 bg-gray-50/50 rounded-xl border border-gray-100 text-[10px] font-black text-gray-400 uppercase tracking-widest cursor-pointer hover:bg-white hover:border-[#7C3AED] hover:text-[#7C3AED] transition-all"
                        >
                            <Clock size={14} />
                            Set Duration
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-10 bg-gray-50/50 border-t border-gray-50 flex items-center justify-between gap-6">
                    <button
                        onClick={() => { toast("Draft Archived: Progress stored in local cache.", "info"); onClose(); }}
                        className="px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        Archive Draft
                    </button>
                    <Button
                        onClick={handleCreate}
                        disabled={isCreating}
                        className="flex-1 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white py-8 rounded-[1.5rem] text-xs font-black uppercase tracking-[0.3em] shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all relative overflow-hidden group disabled:opacity-50"
                    >
                        <span className="relative z-10">{isCreating ? "Initializing..." : "Lock in Objective"}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
