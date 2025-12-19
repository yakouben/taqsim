"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Github, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 relative overflow-hidden selection:bg-purple-100 selection:text-purple-900">
            {/* Background Orbs */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -z-10" />

            {/* Main Container */}
            <div className="w-full max-w-[480px] bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-gray-100 p-10 lg:p-14 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-12">
                    <Link href="/">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-[1.5rem] flex items-center justify-center text-white shadow-2xl shadow-purple-500/20 mb-8 hover:scale-110 transition-transform cursor-pointer">
                            <Sparkles size={32} fill="currentColor" />
                        </div>
                    </Link>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-3">Welcome Back</h1>
                    <p className="text-base font-bold text-gray-400">Continue your journey to temporal peak.</p>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                    <button className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded-2xl border-2 border-transparent hover:border-gray-200 transition-all group">
                        <Github size={20} className="text-gray-900" />
                        <span className="text-xs font-black uppercase tracking-widest text-gray-600">Github</span>
                    </button>
                    <button className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded-2xl border-2 border-transparent hover:border-gray-200 transition-all group">
                        <div className="w-5 h-5 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest text-gray-600">Google</span>
                    </button>
                </div>

                <div className="relative mb-10">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                    <div className="relative flex justify-center"><span className="bg-white px-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">Or use email</span></div>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); router.push("/onboarding"); }}>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Identity</label>
                        <Input
                            placeholder="name@example.com"
                            type="email"
                            icon={<Mail size={20} className="text-gray-300" />}
                            className="bg-gray-50/50 border-none rounded-2xl py-4 focus:ring-4 focus:ring-purple-50 transition-all font-bold"
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Passcode</label>
                            <button type="button" className="text-[10px] font-black text-[#7C3AED] uppercase tracking-widest hover:underline">Forgot?</button>
                        </div>
                        <div className="relative">
                            <Input
                                placeholder="••••••••"
                                type={showPassword ? "text" : "password"}
                                icon={<Lock size={20} className="text-gray-300" />}
                                className="bg-gray-50/50 border-none rounded-2xl py-4 focus:ring-4 focus:ring-purple-50 transition-all font-bold"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white py-8 rounded-[1.5rem] text-xs font-black uppercase tracking-[0.3em] shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all group mt-4">
                        Unlock Workspace
                        <ArrowRight size={18} className="ml-3 group-hover:translate-x-1.5 transition-transform" />
                    </Button>
                </form>

                <p className="mt-12 text-center text-sm font-bold text-gray-400">
                    New to the lab?{" "}
                    <Link href="/onboarding" className="text-[#7C3AED] font-black hover:underline tracking-tight">Create an account</Link>
                </p>
            </div>

            {/* Footer Lab Info */}
            <div className="mt-12 flex items-center gap-8 lowercase text-[10px] font-black text-gray-300 tracking-[0.3em]">
                <span>Encryption Active</span>
                <div className="w-1 h-1 bg-gray-200 rounded-full" />
                <span>v1.2.0-beta</span>
                <div className="w-1 h-1 bg-gray-200 rounded-full" />
                <span>Secure Protocol</span>
            </div>
        </div>
    );
}
