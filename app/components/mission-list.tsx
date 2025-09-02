import { Link } from "react-router"
import { Progress } from "./ui/progress";

export type MissionItem = {
    title: string;
    message: string;
    href: string;
    xp: number;
    target: number;
    current: number;
}
type NotifListProps = {
    items: MissionItem[];
}

export default ({ items }: NotifListProps) => {
    return (
        <>
            {items.map((item, index) => (
                <Link to={item.href} className="block p-4 not-last:border-b" key={index}>
                    <div className="flex justify-between items-center gap-4">
                        <div>
                            <h2 className="font-bold">{item.title}</h2>
                            <p className="mb-2 text-muted text-sm">
                                {item.message}
                            </p>
                        </div>
                        <div className="shrink-0">
                            <span className="text-primary">+{item.xp}</span>
                            <span> xp</span>
                        </div>
                    </div>
                    <p className="mb-2 text-muted text-xs">
                        {item.current}/{item.target}
                    </p>
                    <Progress className="mb-2" value={(item.current / item.target) * 100}></Progress>
                </Link>
            ))}
        </>

    )
}