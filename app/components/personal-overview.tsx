import type { LucideProps } from "lucide-react";
import React from "react";

type PersonalOverviewProps = {
    value: string | number; // progress (0–100)
    title: string;
    icon: React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    progress?: number;
};

const CircularProgress = ({
    value,
    size = 48,
    strokeWidth = 3,
}: {
    value: number;
    size?: number;
    strokeWidth?: number;
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className="relative flex justify-center items-center">
            <svg width={size} height={size} className="rotate-[-90deg]">
                {/* background lingkaran */}
                <circle
                    stroke="currentColor"
                    className="text-gray-300 dark:text-gray-700"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                {/* progress lingkaran */}
                <circle
                    stroke="currentColor"
                    className="text-primary"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
                />
            </svg>
        </div>
    );
};

export default function PersonalOverview({
    value,
    title,
    icon: Icon,
    progress = 0
}: PersonalOverviewProps) {
    return (
        <div className="flex items-center gap-2 dark:bg-input/30 p-2 border dark:border-input rounded-2xl w-[calc(50%-.5rem)]">
            {/* progress bulat + ikon */}
            <div className="relative flex justify-center items-center size-14 shrink-0">
                <CircularProgress value={progress} />
                <div className="absolute flex justify-center items-center bg-primary/10 rounded-full size-8">
                    <Icon size={16} className="text-primary" />
                </div>
            </div>

            {/* teks */}
            <div className="grid">
                <span className="font-semibold">{value}</span>
                <span className="text-muted dark:text-white text-xs">{title}</span>
            </div>
        </div>
    );
}
