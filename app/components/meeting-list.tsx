import type { Meeting } from "~/models/meeting"
import PlaceholderImage from "~/assets/tools-3d.png";
import TagContainer from "./tag-container";
import { Calendar, Check, Clock, Ticket, Users } from "lucide-react";
import { Badge } from "./ui/badge";
import { Link } from "react-router";

export default ({ meetings }: { meetings: Meeting[] }) => {
    return (
        <div>
            {meetings.map((meeting, index) => (
                <div className="flex justify-between items-center p-4 not-last:border-b" key={index}>
                    <div className="relative w-4/12">
                        <div className="top-0 left-0 absolute p-2">
                            <Badge className="bg-black/50 text-white">
                                {meeting.participants === meeting.capacity ? 'Sold Out' : (
                                    <>
                                        <Users size={10} /> {meeting.participants}/{meeting.capacity}
                                    </>
                                )}
                            </Badge>
                        </div>
                        <img src={PlaceholderImage} alt="meeting" className="rounded-2xl w-full" />
                    </div>
                    <div className="w-[calc(calc(100%*calc(8/12))-1rem)] text-muted dark:text-foreground text-xs">
                        <TagContainer tags={meeting.tags} />
                        <div className="my-2">
                            <h1 className="font-bold text-foreground text-sm truncate">
                                <Link to={'/meeting-preview'} className="hover:underline">{meeting.title}</Link>
                            </h1>
                            <p className="mb-2 truncate">
                                by <Link to={'/view-profile'} className="text-primary hover:underline">{meeting.presenter}</Link>
                            </p>
                            <p className="flex items-center gap-1">

                            </p>
                        </div>
                        <div className="flex justify-between">
                            <p className="flex items-center gap-1">
                                <Calendar size={10} />
                                {meeting.date}</p>
                            <p className="flex items-center gap-1">
                                <Clock size={10} />
                                {meeting.time}</p>
                            <p className="flex items-center gap-1 text-yellow-500">
                                <Ticket size={10} />
                                {meeting.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}