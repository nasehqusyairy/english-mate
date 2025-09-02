import { Link, useLocation } from "react-router";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";

export type TabItem = {
    value: string;
    label: string;
    href: string;
}

type TabNavProps = {
    items: TabItem[];
    defaultValue: string;
    children: React.ReactNode;
    className?: string;
}

export default ({ items, defaultValue, children, className }: TabNavProps) => {
    return (
        <Tabs className="gap-0" defaultValue={useLocation().pathname.split("/")[2] || defaultValue}>
            <div className={className}>
                <TabsList className="w-full">
                    {items.map(item => (
                        <TabsTrigger asChild key={item.value} value={item.value}>
                            <Link to={item.href}>{item.label}</Link>
                        </TabsTrigger>
                    ))}
                </TabsList>
            </div>
            {children}
        </Tabs>
    )
}