import { Calendar, Clock, Ticket } from "lucide-react"
import TagContainer from "./tag-container"
import PlaceholderImage from "~/assets/tools-3d.png"
import type { Meeting } from "~/models/meeting"
import { Link } from "react-router"

type MeetingItemProps = {
    meeting: Meeting
}

export default ({ meeting }: MeetingItemProps) => {
    return (
        <div className="dark:bg-input/30 p-4 border dark:border-input rounded-2xl w-8/12 shrink-0">
            <div className="mb-4">
                <img
                    src={meeting.image || PlaceholderImage}
                    alt="meeting"
                    className="rounded-2xl w-full"
                />
            </div>

            <div className="text-muted">
                <div className="mb-4">
                    <div className="mb-2">
                        <TagContainer tags={meeting.tags} />
                    </div>
                    <h1 className="mb-2 font-bold text-foreground hover:underline truncate">
                        <Link to={'/meetings/preview'}>{meeting.title}</Link>
                    </h1>
                    <p className="text-sm truncate">
                        by <Link to={'/view-profile'} className="text-primary hover:underline">{meeting.presenter}</Link>
                    </p>
                </div>

                <hr className="mb-4" />

                <div className="flex justify-between text-sm">
                    <p className="flex items-center gap-1">
                        <Calendar size={10} />
                        {meeting.date}
                    </p>
                    <p className="flex items-center gap-1">
                        <Clock size={10} />
                        {meeting.time}
                    </p>
                </div>
            </div>
        </div>
    )
}
