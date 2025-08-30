import { Book } from "lucide-react";
import type { ElementType, ReactNode } from "react";

type PersonalOverviewProps = {
    value: string | number;
    title: string;
    icon: (props: { size?: number; className?: string }) => ReactNode;
}

export default ({ value, title, icon: Icon }: PersonalOverviewProps) => {
    return (
        <div className="flex items-center gap-4 dark:bg-input/30 p-2 border dark:border-input rounded-2xl w-[calc(50%-.5rem)]">
            <div className="flex justify-center items-center bg-primary/10 rounded-full size-12 shrink-0">
                <Icon size={16} className="text-primary" />
            </div>
            <div className="grid">
                <span>{value}</span>
                <span className="text-muted dark:text-white text-xs">{title}</span>
            </div>
        </div>
    );
};
