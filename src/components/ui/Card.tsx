import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "white" | "soft-purple" | "ghost";
    padding?: "none" | "sm" | "md" | "lg";
}

export function Card({
    className,
    variant = "white",
    padding = "md",
    children,
    ...props
}: CardProps) {
    const variants = {
        white: "bg-white shadow-sm border border-gray-100",
        "soft-purple": "bg-[#F3E8FF] border border-[#E9D5FF]",
        ghost: "bg-transparent border border-dashed border-gray-200",
    };

    const paddings = {
        none: "p-0",
        sm: "p-3",
        md: "p-6",
        lg: "p-8",
    };

    return (
        <div
            className={cn(
                "rounded-[2rem] transition-all",
                variants[variant],
                paddings[padding],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
