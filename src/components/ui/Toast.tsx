"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, Info, AlertCircle, X, Sparkles } from "lucide-react";

type ToastType = "success" | "info" | "error" | "protocol";

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    toast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const toast = useCallback((message: string, type: ToastType = "info") => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 4000);
    }, []);

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
                {toasts.map((t) => (
                    <div
                        key={t.id}
                        className={cn(
                            "pointer-events-auto flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl border bg-white/80 backdrop-blur-xl animate-in slide-in-from-right-10 duration-500",
                            t.type === "success" && "border-green-100 text-green-600",
                            t.type === "info" && "border-blue-100 text-blue-600",
                            t.type === "error" && "border-red-100 text-red-600",
                            t.type === "protocol" && "border-purple-200 text-purple-600"
                        )}
                    >
                        <div className="shrink-0">
                            {t.type === "success" && <CheckCircle2 size={20} />}
                            {t.type === "info" && <Info size={20} />}
                            {t.type === "error" && <AlertCircle size={20} />}
                            {t.type === "protocol" && <Sparkles size={20} fill="currentColor" />}
                        </div>
                        <p className="text-sm font-black tracking-tight uppercase">{t.message}</p>
                        <button
                            onClick={() => removeToast(t.id)}
                            className="ml-2 p-1 hover:bg-gray-100 rounded-lg transition-colors text-gray-400"
                        >
                            <X size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}
