import { cn } from "@/lib/utils";

interface ProgressStepsProps {
    steps: number;
    currentStep: number;
}

export function ProgressSteps({ steps, currentStep }: ProgressStepsProps) {
    return (
        <div className="flex gap-2 w-full max-w-sm mx-auto mb-8">
            {Array.from({ length: steps }).map((_, i) => (
                <div
                    key={i}
                    className={cn(
                        "h-1.5 flex-1 rounded-full transition-all duration-300",
                        i <= currentStep ? "bg-[#7C3AED]" : "bg-[#E5E7EB]"
                    )}
                />
            ))}
        </div>
    );
}
