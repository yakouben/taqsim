"use client";

import { Sidebar } from "./Sidebar";
import { usePathname } from "next/navigation";

export function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isOnboarding = pathname === "/onboarding";
    const isLandingPage = pathname === "/";

    if (isOnboarding || isLandingPage) return <>{children}</>;

    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 relative">
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
}
