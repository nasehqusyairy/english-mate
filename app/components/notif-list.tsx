import { Link } from "react-router"
import { toNotifDateTime } from "~/lib/datetime";

export type NotifItem = {
    date: Date;
    title: string;
    message: string;
    link: {
        href: string;
        label: string;
    };
}
type NotifListProps = {
    items: NotifItem[];
}

export default ({ items }: NotifListProps) => {
    return (
        <>
            {items.map((item, index) => (
                <div className="p-4 not-last:border-b" key={index}>
                    <span className="text-muted text-xs">{toNotifDateTime(item.date)}</span>
                    <h2 className="mb-2 font-bold">{item.title}</h2>
                    <p className="mb-4 text-muted text-sm">
                        {item.message}
                    </p>
                    <Link to={item.link.href} className="text-primary text-sm hover:underline">{item.link.label}</Link>
                </div>
            ))}
        </>

    )
}