"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Zap, Target, BookOpen, CheckCircle2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-purple-100 selection:text-purple-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-xl flex items-center justify-center text-white shadow-xl shadow-purple-200">
              <Sparkles size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-black text-gray-900 tracking-tight">Taqsim</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <Link href="#features" className="text-sm font-bold text-gray-500 hover:text-[#7C3AED] transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-sm font-bold text-gray-500 hover:text-[#7C3AED] transition-colors">How it Works</Link>
            <Link href="#pricing" className="text-sm font-bold text-gray-500 hover:text-[#7C3AED] transition-colors">Pricing</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-sm font-bold">Sign In</Button>
            </Link>
            <Link href="/onboarding">
              <Button className="bg-[#7C3AED] hover:bg-[#5B21B6] text-white px-8 rounded-xl shadow-lg shadow-purple-200 group">
                Get Started
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300">
            <Link href="#features" className="text-lg font-bold text-gray-900">Features</Link>
            <Link href="#how-it-works" className="text-lg font-bold text-gray-900">How it Works</Link>
            <Link href="#pricing" className="text-lg font-bold text-gray-900">Pricing</Link>
            <div className="pt-6 border-t border-gray-50 flex flex-col gap-4">
              <Link href="/login">
                <Button variant="ghost" className="w-full text-gray-500 font-bold">Sign In</Button>
              </Link>
              <Link href="/onboarding">
                <Button className="w-full bg-[#7C3AED] text-white py-4">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full border border-purple-100 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles size={16} className="text-[#7C3AED]" fill="currentColor" />
              <span className="text-xs font-black text-[#7C3AED] uppercase tracking-widest">AI-Powered Student Performance</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Master Your Time, <br />
              <span className="text-[#7C3AED]">Effortlessly.</span>
            </h1>

            <p className="text-xl lg:text-2xl font-bold text-gray-500 leading-relaxed mb-12 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Taqsim is the high-performance workspace designed for students who want to balance intense academics with healthy biophilia and flow.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
              <Link href="/onboarding" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-[#7C3AED] hover:bg-[#5B21B6] text-white text-lg px-12 py-8 rounded-2xl shadow-2xl shadow-purple-500/20 group">
                  Get Started Free
                  <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link href="#features" className="w-full sm:w-auto">
                <Button variant="ghost" className="w-full sm:w-auto text-lg px-12 py-8 rounded-2xl border-2 border-gray-100 font-black">
                  View Features
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Abstract Hero Visuals */}
        <div className="absolute top-[20%] right-[-5%] lg:right-[5%] w-[40%] aspect-square hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-[120px]" />
            <div className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-[4rem] shadow-2xl p-10 rotate-6 hover:rotate-0 transition-transform duration-1000">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#7C3AED] rounded-2xl shadow-lg" />
                  <div className="flex-1 h-3 bg-gray-100 rounded-full w-32" />
                </div>
                <div className="space-y-4">
                  <div className="h-24 w-full bg-purple-50/50 rounded-3xl" />
                  <div className="h-4 w-1/2 bg-gray-100 rounded-full" />
                </div>
              </div>
            </div>
            <div className="absolute top-20 -left-20 bg-white p-6 rounded-3xl shadow-2xl animate-bounce duration-1000">
              <Zap className="text-yellow-500" fill="currentColor" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter mb-4">Built for High Performance.</h2>
            <p className="text-xl font-bold text-gray-500">Everything you need to crush your goals and stay balanced.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard
              icon={<Zap size={32} className="text-yellow-500" fill="currentColor" />}
              title="Bio-Energy Tracking"
              description="Align your most difficult tasks with your peak cognitive hours based on your personal chronotype."
            />
            <FeatureCard
              icon={<Target size={32} className="text-[#7C3AED]" fill="currentColor" />}
              title="Prioritized Flow"
              description="Our AI engine ranks your tasks by urgency, impact, and required effort to eliminate decision fatigue."
            />
            <FeatureCard
              icon={<BookOpen size={32} className="text-blue-500" fill="currentColor" />}
              title="Academic Integration"
              description="Seamlessly sync your courses, assignments, and study sessions into a unified temporal horizon."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden group">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-10">
                Ready to achieve <br />
                <span className="text-purple-300 italic">Temporal Peak?</span>
              </h2>
              <Link href="/onboarding">
                <Button className="bg-white text-[#1E1B4B] text-xl px-12 py-8 rounded-2xl font-black hover:bg-purple-100 transition-all hover:scale-105 active:scale-95">
                  Get Started Today
                </Button>
              </Link>
            </div>

            {/* Background visual */}
            <div className="absolute top-[-20%] right-[-10%] opacity-10 blur-3xl w-96 h-96 bg-purple-500 rounded-full" />
            <Sparkles size={300} className="absolute bottom-[-100px] right-[-50px] opacity-[0.05] grayscale group-hover:scale-110 transition-transform duration-1000" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
              <Sparkles size={16} fill="currentColor" />
            </div>
            <span className="text-lg font-black text-gray-900">Taqsim</span>
          </div>

          <div className="flex items-center gap-10 text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
            <Link href="#" className="hover:text-gray-900 transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Privacy</Link>
          </div>

          <p className="text-xs font-bold text-gray-300">© 2025 Taqsim Performance Lab.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="p-10 bg-white border-2 border-transparent hover:border-purple-100 transition-all hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] group">
      <div className="mb-8 p-4 bg-gray-50 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-4">{title}</h3>
      <p className="font-bold text-gray-500 leading-relaxed">{description}</p>
    </Card>
  );
}
