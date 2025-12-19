"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, Send, Brain, Zap, Shield, TrendingUp, Calendar, User, ArrowRight, MessageSquare, Bot } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/Toast";
import Image from "next/image";

type Message = {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
};

export default function AgentPage() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "assistant",
            content: "Welcome back, Alex. I've analyzed your schedule for next week. You have three exams coming up. How are you feeling about your energy levels?",
            timestamp: new Date(),
        }
    ]);
    const [input, setInput] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [dailyPlan, setDailyPlan] = useState<null | {
        university: string[];
        personal: string[];
        rest: string[];
    }>(null);
    const [balanceStatus, setBalanceStatus] = useState<"Balanced" | "Overloaded" | "Light">("Balanced");
    const [isTyping, setIsTyping] = useState(false);
    const { toast } = useToast();

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Mock AI Response
        setTimeout(() => {
            const assistantMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: getMockAIResponse(input),
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, assistantMsg]);
            setIsTyping(false);
            toast("New context received by AI Trainer", "protocol");
        }, 1500);
    };

    const getMockAIResponse = (text: string) => {
        const lower = text.toLowerCase();
        if (lower.includes("exam") || lower.includes("test")) {
            return "Exam periods are high-load. I've prioritized your 'Economics Paper' and suggested a 30-minute meditation session at 4 PM to keep your focus sharp.";
        }
        if (lower.includes("tired") || lower.includes("exhausted")) {
            setBalanceStatus("Overloaded");
            return "I've detected energy depletion. I'm lightening your workload for tomorrow and moving your gym session to a low-energy slot.";
        }
        return "Noted. I'll monitor your progress and nudge you if I see your flow state dipping. Ready to generate your optimized daily plan?";
    };

    const generatePlan = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setDailyPlan({
                university: ["Economics Final Review (2h)", "Psychology Lab Stats"],
                personal: ["Grocery run", "Call parents"],
                rest: ["20m Power Nap", "Light reading"]
            });
            setIsGenerating(false);
            setBalanceStatus("Balanced");
            toast("Optimized Daily Strategy Generated", "success");
        }, 1500);
    };

    return (
        <div className="min-h-screen pb-12 bg-[#F8FAFC]">
            <header className="px-6 lg:px-10 py-8 bg-white border-b border-gray-50 flex items-center justify-between sticky top-0 z-40">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <Brain size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-gray-900 tracking-tight">AI Trainer</h2>
                        <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest">Life Manager Protocol active</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className={cn(
                        "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2",
                        balanceStatus === "Balanced" ? "bg-green-50 text-green-600 border-green-100" :
                            balanceStatus === "Overloaded" ? "bg-red-50 text-red-600 border-red-100" :
                                "bg-blue-50 text-blue-600 border-blue-100"
                    )}>
                        {balanceStatus}
                    </div>
                </div>
            </header>

            <main className="p-6 lg:p-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* AI Chat Interface */}
                    <div className="lg:col-span-8 flex flex-col h-[70vh]">
                        <Card className="flex-1 flex flex-col overflow-hidden bg-white/50 backdrop-blur-sm border-gray-100 shadow-xl rounded-[2.5rem]">
                            <div
                                ref={scrollRef}
                                className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar"
                            >
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={cn(
                                            "flex gap-4 max-w-[85%] animate-in fade-in slide-in-from-bottom-2 duration-300",
                                            msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                                        )}
                                    >
                                        <div className={cn(
                                            "w-10 h-10 rounded-2xl flex items-center justify-center shrink-0",
                                            msg.role === "assistant" ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-gray-600"
                                        )}>
                                            {msg.role === "assistant" ? <Bot size={20} /> : <User size={20} />}
                                        </div>
                                        <div className={cn(
                                            "p-5 rounded-[2rem]",
                                            msg.role === "assistant" ? "bg-white border border-gray-100 shadow-sm rounded-tl-none" : "bg-purple-600 text-white rounded-tr-none shadow-lg shadow-purple-500/20"
                                        )}>
                                            <p className="text-sm font-bold leading-relaxed">{msg.content}</p>
                                        </div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex gap-4 max-w-[85%] animate-in fade-in slide-in-from-bottom-2 duration-300">
                                        <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-purple-100 text-purple-600">
                                            <Bot size={20} />
                                        </div>
                                        <div className="p-5 rounded-[2rem] bg-white border border-gray-100 shadow-sm rounded-tl-none flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <form
                                onSubmit={handleSendMessage}
                                className="p-6 bg-white border-t border-gray-50 flex gap-4"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type a message to your trainer..."
                                    className="flex-1 bg-gray-50/50 border-2 border-transparent focus:border-purple-100 rounded-2xl px-6 py-4 text-sm font-bold placeholder:text-gray-300 focus:bg-white focus:ring-4 focus:ring-purple-50 transition-all outline-none"
                                />
                                <button className="w-14 h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-purple-500/20">
                                    <Send size={24} />
                                </button>
                            </form>
                        </Card>
                    </div>

                    {/* AI Manager Dashboard */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Plan Generator */}
                        <Card className="p-8 bg-white border-gray-100 shadow-xl rounded-[2.5rem] relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
                                    <Sparkles size={18} className="text-purple-600" fill="currentColor" />
                                    Daily Strategy
                                </h3>

                                {dailyPlan ? (
                                    <div className="space-y-6 animate-in fade-in duration-500">
                                        {[
                                            { label: "University", items: dailyPlan.university, color: "text-blue-500" },
                                            { label: "Personal", items: dailyPlan.personal, color: "text-teal-500" },
                                            { label: "Rest", items: dailyPlan.rest, color: "text-orange-500" }
                                        ].map(section => (
                                            <div key={section.label}>
                                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">{section.label}</p>
                                                <ul className="space-y-2">
                                                    {section.items.map((item, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-700">
                                                            <ArrowRight size={14} className={section.color} />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                        <button
                                            onClick={generatePlan}
                                            className="w-full py-4 mt-4 bg-gray-50 text-gray-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-100 transition-all"
                                        >
                                            Regenerate Session
                                        </button>
                                    </div>
                                ) : (
                                    <div className="text-center py-10 space-y-6">
                                        <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto">
                                            <Calendar className="text-purple-300" size={32} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-400">Your path is not yet mapped.</p>
                                            <p className="text-xs font-bold text-gray-300 mt-1">Let the AI optimize your flow.</p>
                                        </div>
                                        <button
                                            onClick={generatePlan}
                                            disabled={isGenerating}
                                            className="w-full py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-purple-500/20 hover:-translate-y-1 active:translate-y-0 transition-all disabled:opacity-50"
                                        >
                                            {isGenerating ? "Synthesizing Flow..." : "Generate Plan"}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </Card>

                        {/* Weekly Overview Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <Card className="p-6 bg-white border-gray-100 shadow-md rounded-[2rem]">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Focus</p>
                                <div className="text-3xl font-black text-gray-900">92%</div>
                                <div className="mt-2 h-1.5 w-full bg-gray-50 rounded-full">
                                    <div className="h-full bg-purple-600 w-[92%] rounded-full" />
                                </div>
                            </Card>
                            <Card className="p-6 bg-white border-gray-100 shadow-md rounded-[2rem]">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Stress</p>
                                <div className="text-3xl font-black text-gray-900">Low</div>
                                <div className="mt-2 h-1.5 w-full bg-gray-50 rounded-full">
                                    <div className="h-full bg-green-500 w-[20%] rounded-full" />
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
