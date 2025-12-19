"use client";

import React, { useState } from "react";
import { ArrowLeft, User, GraduationCap, School, Check, Sparkles, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Slider } from "@/components/ui/Slider";
import { ProgressSteps } from "@/components/ui/ProgressSteps";
import { cn } from "@/lib/utils";

export default function OnboardingPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [year, setYear] = useState("Freshman");
    const [chronotype, setChronotype] = useState("Night Owl");
    const [stress, setStress] = useState(70);
    const [focus, setFocus] = useState({
        academics: 84,
        work: 24,
        wellness: 24,
        social: 32,
    });

    const years = ["Freshman", "Sophomore", "Junior", "Senior"];

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-10">
            {/* Header */}
            <header className="flex items-center justify-between px-6 lg:px-10 py-8 max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-xl flex items-center justify-center text-white shadow-xl shadow-purple-200">
                        <Sparkles size={20} fill="currentColor" />
                    </div>
                    <span className="text-xl font-black text-gray-900 tracking-tight">Taqsim</span>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.push("/")}
                        className="text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        Exit Setup
                    </button>
                    <Link href="/profile">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-purple-50 hover:text-[#7C3AED] transition-all cursor-pointer">
                            <User size={20} />
                        </div>
                    </Link>
                </div>
            </header>

            <main className="px-6 max-w-2xl mx-auto">
                <ProgressSteps steps={4} currentStep={currentStep} />

                <section className="mt-8 space-y-2">
                    <h2 className="text-[2.5rem] leading-[1.1] font-bold text-gray-900 tracking-tight">
                        Let's get to know you.
                    </h2>
                    <p className="text-gray-500 text-lg">
                        We need a few details to tailor the AI to your academic life.
                    </p>
                </section>

                {/* Basic Info Form */}
                <section className="mt-10 space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-600 ml-1">Full Name</label>
                            <Input placeholder="e.g. Alex Smith" icon={<User size={20} />} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-600 ml-1">University</label>
                            <Input placeholder="Search your university..." icon={<School size={20} />} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-600 ml-1">Major</label>
                            <Input placeholder="e.g. Computer Science" />
                        </div>
                    </div>

                    {/* Year Selection */}
                    <div className="space-y-3">
                        <label className="text-sm font-bold text-gray-600 ml-1">Current Year</label>
                        <div className="grid grid-cols-2 gap-3">
                            {years.map((y) => (
                                <button
                                    key={y}
                                    onClick={() => setYear(y)}
                                    className={cn(
                                        "py-4 rounded-2xl text-base font-semibold border-2 transition-all",
                                        year === y
                                            ? "bg-[#F3E8FF] border-[#D8B4FE] text-[#7C3AED]"
                                            : "bg-white border-white text-gray-400"
                                    )}
                                >
                                    {y}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Chronotype Selection */}
                <section className="mt-16 space-y-6">
                    <div className="space-y-2">
                        <h3 className="text-3xl font-bold text-gray-900 tracking-tight">How do you operate?</h3>
                        <p className="text-gray-500 text-base leading-relaxed">
                            Help the AI schedule high-focus tasks during your peak energy hours.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {["Early Bird", "Night Owl"].map((type) => (
                            <button
                                key={type}
                                onClick={() => setChronotype(type)}
                                className={cn(
                                    "relative p-6 rounded-[2rem] flex flex-col items-center justify-center gap-4 transition-all border-2 h-44",
                                    chronotype === type
                                        ? "bg-[#F3E8FF] border-[#7C3AED] shadow-xl shadow-[#7C3AED]/10"
                                        : "bg-white border-white"
                                )}
                            >
                                {chronotype === type && (
                                    <div className="absolute top-4 right-4 bg-[#7C3AED] rounded-full p-1 text-white">
                                        <Check size={12} strokeWidth={4} />
                                    </div>
                                )}
                                <div className={cn(
                                    "w-14 h-14 rounded-full flex items-center justify-center",
                                    type === "Early Bird" ? "bg-orange-50 text-orange-400" : "bg-blue-50 text-indigo-400"
                                )}>
                                    {type === "Early Bird" ? "☀️" : "🌙"}
                                </div>
                                <div className="text-center">
                                    <span className="block font-bold text-lg text-gray-900">{type}</span>
                                    <span className="block text-xs text-gray-400 mt-1 uppercase font-bold tracking-tight">
                                        {type === "Early Bird" ? "Focus: 6AM - 2PM" : "Focus: 6PM - 2AM"}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Stress Tolerance */}
                <section className="mt-16 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-700">Stress Tolerance</h3>
                        <span className="bg-[#F3E8FF] text-[#7C3AED] px-3 py-1 rounded-lg text-xs font-bold uppercase">
                            High Intensity
                        </span>
                    </div>
                    <Slider
                        value={stress}
                        onChange={setStress}
                        labelLeft="Keep it chill"
                        labelRight="Push me hard"
                    />
                </section>

                {/* Define Focus Areas */}
                <section className="mt-16 space-y-8">
                    <div className="space-y-2">
                        <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Define your focus.</h3>
                        <p className="text-gray-500 text-base leading-relaxed">
                            Adjust the sliders to weight your priorities for this semester.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { id: 'academics', label: 'Academics', icon: '📖', color: 'text-blue-500' },
                            { id: 'work', label: 'Work', icon: '💼', color: 'text-purple-500' },
                            { id: 'wellness', label: 'Wellness', icon: '🧘', color: 'text-teal-500' },
                            { id: 'social', label: 'Social', icon: '👫', color: 'text-orange-500' },
                        ].map((area) => (
                            <div key={area.id} className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">{area.icon}</span>
                                        <span className="font-bold text-gray-800">{area.label}</span>
                                    </div>
                                    <span className={cn("text-sm font-bold", area.color)}>
                                        {focus[area.id as keyof typeof focus]}%
                                    </span>
                                </div>
                                <Slider
                                    value={focus[area.id as keyof typeof focus]}
                                    onChange={(v) => setFocus(prev => ({ ...prev, [area.id]: v }))}
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Fixed Availability Mockup */}
                <section className="mt-16">
                    <Card className="p-8">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-gray-800 text-lg">Fixed Availability</h3>
                            <button className="text-xs font-bold text-[#7C3AED] uppercase">Clear</button>
                        </div>
                        <p className="text-xs text-gray-400 mb-6 uppercase font-bold">Tap to block busy times</p>

                        {/* Calendar Mockup */}
                        <div className="grid grid-cols-7 gap-2">
                            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                                <div key={i} className="text-[10px] text-gray-400 text-center font-bold mb-1">{day}</div>
                            ))}
                            {Array.from({ length: 28 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "h-8 rounded-lg transition-all",
                                        [8, 11, 15, 18, 20].includes(i) ? "bg-[#7C3AED]" : "bg-gray-50"
                                    )}
                                />
                            ))}
                        </div>
                        <div className="flex gap-4 mt-6 justify-center">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                                <span className="text-[10px] font-bold text-gray-400 uppercase">Class/Work</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-gray-100" />
                                <span className="text-[10px] font-bold text-gray-400 uppercase">Free</span>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Goals & GPA */}
                <section className="mt-16 space-y-8">
                    <h3 className="text-3xl font-bold text-gray-900 tracking-tight">What are we aiming for?</h3>

                    <div className="grid grid-cols-2 gap-4 items-center">
                        <div className="space-y-4">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Target GPA</label>
                            <Card padding="none" className="h-16 flex items-center justify-center">
                                <span className="text-2xl font-black text-[#7C3AED]">3.8</span>
                            </Card>
                        </div>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                            Aiming for Dean's List?<br />Let's get it.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Productivity Goals</label>
                        <div className="flex flex-wrap gap-2">
                            {['Better Grades', 'Less Stress', 'More Sleep', 'Social Balance'].map((goal, i) => (
                                <button
                                    key={goal}
                                    className={cn(
                                        "px-4 py-2 rounded-xl text-sm font-bold transition-all border-2",
                                        i < 2
                                            ? "bg-[#7C3AED] border-[#7C3AED] text-white"
                                            : "bg-white border-gray-100 text-gray-500"
                                    )}
                                >
                                    {i < 2 && <Check size={12} strokeWidth={4} className="inline mr-2 -mt-1" />}
                                    {goal}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer Button */}
                <section className="mt-20">
                    <Button size="full" onClick={() => router.push("/dashboard")}>
                        Initialize AI Plan ✨
                    </Button>
                </section>
            </main>
        </div>
    );
}
