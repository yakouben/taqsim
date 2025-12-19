"use client";

import { cn } from "@/lib/utils";

interface RadialChartProps {
    value: number;
    label: string;
    icon?: React.ReactNode;
    color: string;
    trend?: "up" | "down";
}

export function RadialChart({ value, label, icon, color, trend }: RadialChartProps) {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-28 h-28 flex items-center justify-center">
                {/* SVG Circle */}
                <svg className="w-full h-full -rotate-90">
                    <circle
                        cx="56"
                        cy="56"
                        r={radius}
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-gray-50"
                    />
                    <circle
                        cx="56"
                        cy="56"
                        r={radius}
                        fill="transparent"
                        stroke={color}
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                    />
                </svg>

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-1">
                    <div className={cn("mb-1", `text-[${color}]`)} style={{ color }}>
                        {icon}
                    </div>
                </div>
            </div>

            <div className="mt-2 text-center">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">{label}</span>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                    <span className="text-xl font-black text-gray-900">{value}%</span>
                    {trend && (
                        <span className={cn(
                            "text-[10px] font-bold",
                            trend === "up" ? "text-purple-500" : "text-blue-500"
                        )}>
                            {trend === "up" ? "▲" : "▼"}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
