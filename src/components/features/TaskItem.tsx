"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/Toast";

interface TaskItemProps {
    title: string;
    category: string;
    due: string;
    completed?: boolean;
}

export function TaskItem({ title, category, due, completed: initialCompleted }: TaskItemProps) {
    const { toast } = useToast();
    const [isCompleted, setIsCompleted] = React.useState(initialCompleted);

    const toggleComplete = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsCompleted(!isCompleted);
    };

    return (
        <div
            onClick={() => toast(`Opening details for: ${title}`, "info")}
            className="group p-4 bg-gray-50/50 rounded-[1.5rem] flex items-center gap-4 transition-all hover:bg-white hover:shadow-lg hover:shadow-purple-100/50 border border-transparent hover:border-purple-50 cursor-pointer active:scale-[0.98]"
        >
            <div
                onClick={toggleComplete}
                className={cn(
                    "w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all cursor-pointer",
                    isCompleted
                        ? "bg-[#7C3AED] border-[#7C3AED]"
                        : "bg-white border-gray-200 group-hover:border-purple-300"
                )}
            >
                {isCompleted && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </div>

            <div className="flex-1">
                <h4 className={cn("font-bold text-gray-900 leading-tight transition-all", isCompleted && "text-gray-400 line-through opacity-50")}>
                    {title}
                </h4>
                <div className="flex items-center gap-2 mt-0.5">
                    <span className={cn(
                        "text-[10px] font-bold",
                        category === "WELLNESS" ? "text-teal-500" : "text-red-400"
                    )}>
                        {due}
                    </span>
                    {category === "WELLNESS" && (
                        <span className="text-[10px] font-bold text-blue-400">• Wellness Goal</span>
                    )}
                </div>
            </div>
        </div>
    );
}
