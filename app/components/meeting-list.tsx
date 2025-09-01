import type { Meeting } from "~/models/meeting"
import PlaceholderImage from "~/assets/tools-3d.png";
import TagContainer from "./tag-container";
import { Calendar, Check, Clock, Ticket } from "lucide-react";
import { Badge } from "./ui/badge";

export default ({ meetings }: { meetings: Meeting[] }) => {
    return (
        <div>
            {meetings.map((meeting, index) => (
                <div className="flex justify-between items-center p-4 not-last:border-b" key={index}>
                    <div className="relative w-4/12">
                        <div className="top-0 left-0 absolute p-2">
                            {meeting.tickets === 0 && (
                                <Badge className="bg-black/75 text-white">
                                    Sold Out
                                </Badge>
                            )}
                        </div>
                        <img src={PlaceholderImage} alt="meeting" className="rounded-2xl w-full" />
                    </div>
                    <div className="w-[calc(calc(100%*calc(8/12))-1rem)] text-muted dark:text-foreground text-xs">
                        <TagContainer tags={meeting.tags} />
                        <div className="my-2">
                            <h1 className="font-bold text-foreground text-sm truncate">
                                <a href="#" className="hover:underline">{meeting.title}</a>
                            </h1>
                            <p className="truncate">
                                by <a href="#" className="text-primary hover:underline">{meeting.presenter}</a>
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <p className="flex items-center gap-1">
                                <Calendar size={10} />
                                {meeting.date}</p>
                            <p className="flex items-center gap-1">
                                <Clock size={10} />
                                {meeting.time}</p>
                            <p className="flex items-center gap-1">
                                <Ticket size={10} />
                                {meeting.tickets}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}