"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SliderProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    className?: string;
    labelLeft?: string;
    labelRight?: string;
}

export function Slider({
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    className,
    labelLeft,
    labelRight,
}: SliderProps) {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className={cn("w-full space-y-3", className)}>
            <div className="relative h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                    className="absolute top-0 left-0 h-full bg-[#7C3AED] rounded-full transition-all duration-150"
                    style={{ width: `${percentage}%` }}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer appearance-none"
                />
            </div>
            {(labelLeft || labelRight) && (
                <div className="flex justify-between text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                    <span>{labelLeft}</span>
                    <span>{labelRight}</span>
                </div>
            )}
        </div>
    );
}
