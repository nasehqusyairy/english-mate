import { Calendar, Clock, Ticket } from "lucide-react"
import TagContainer from "./tag-container"
import PlaceholderImage from "~/assets/tools-3d.png"
import type { Meeting } from "~/models/meeting"

type MeetingItemProps = {
    meeting: Meeting
}

export default ({ meeting }: MeetingItemProps) => {
    return (
        <div className="dark:bg-input/30 p-4 border dark:border-input rounded-2xl w-8/12 shrink-0">
            <div className="relative mb-4">
                <div className="top-0 left-0 absolute p-2">
                    <TagContainer tags={meeting.tags} />
                </div>
                <img
                    src={meeting.image || PlaceholderImage}
                    alt="meeting"
                    className="rounded-2xl w-full"
                />
            </div>

            <div className="text-muted">
                <div className="mb-4">
                    <h1 className="mb-2 font-bold text-foreground hover:underline truncate">
                        <a href="#">{meeting.title}</a>
                    </h1>
                    <p className="text-sm truncate">
                        by <a href="#" className="text-primary hover:underline">{meeting.presenter}</a>
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
                    <p className="flex items-center gap-1">
                        <Ticket size={10} />
                        {meeting.tickets}
                    </p>
                </div>
            </div>
        </div>
    )
}
