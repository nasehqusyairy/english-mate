import { Calendar, Clock, Users } from "lucide-react"
import TagContainer from "./tag-container"
import PlaceholderImage from "~/assets/tools-3d.png"
import type { Confluence } from "~/models/confluence"

type ConfluenceItemProps = {
    confluence: Confluence
}

export default ({ confluence }: ConfluenceItemProps) => {
    return (
        <div className="dark:bg-input/30 p-4 border dark:border-input rounded-2xl w-8/12 shrink-0">
            <div className="relative mb-4">
                <div className="top-0 left-0 absolute p-2">
                    <TagContainer tags={confluence.tags} />
                </div>
                <img
                    src={confluence.image || PlaceholderImage}
                    alt="confluence"
                    className="rounded-2xl w-full"
                />
            </div>

            <div className="text-muted">
                <div className="mb-4">
                    <h1 className="mb-2 font-bold text-foreground hover:underline truncate">
                        <a href="#">{confluence.title}</a>
                    </h1>
                    <p className="text-sm">{confluence.presenter}</p>
                </div>

                <hr className="mb-4" />

                <div className="flex justify-between text-sm">
                    <p className="flex items-center gap-1">
                        <Calendar size={10} />
                        {confluence.date}
                    </p>
                    <p className="flex items-center gap-1">
                        <Clock size={10} />
                        {confluence.time}
                    </p>
                    <p className="flex items-center gap-1">
                        <Users size={10} />
                        {confluence.audience}
                    </p>
                </div>
            </div>
        </div>
    )
}
