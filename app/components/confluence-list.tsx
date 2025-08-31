import type { Confluence } from "~/models/confluence"
import PlaceholderImage from "~/assets/tools-3d.png";
import TagContainer from "./tag-container";
import { Calendar, Clock, Heart, Users } from "lucide-react";
import { Button } from "./ui/button";

export default ({ confluences }: { confluences: Confluence[] }) => {
    return (
        <div>
            {confluences.map((confluence, index) => (
                <div className="flex justify-between items-center p-4 not-last:border-b" key={index}>
                    <div className="relative w-4/12">
                        <div className="top-0 left-0 absolute p-2">
                            <Button size={"icon"} className={"rounded-full" + (confluence.isJoined ? '' : ' bg-black/50')}>
                                <Heart />
                            </Button>
                        </div>
                        <img src={PlaceholderImage} alt="confluence" className="rounded-2xl w-full" />
                    </div>
                    <div className="w-[calc(calc(100%*calc(8/12))-1rem)] text-muted dark:text-foreground text-xs">
                        <TagContainer tags={confluence.tags} />
                        <div className="my-2">
                            <h1 className="font-bold text-foreground text-sm truncate">
                                <a href="#" className="hover:underline">{confluence.title}</a>
                            </h1>
                            <p className="truncate">{confluence.presenter}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="flex items-center gap-1">
                                <Calendar size={10} />
                                {confluence.date}</p>
                            <p className="flex items-center gap-1">
                                <Clock size={10} />
                                {confluence.time}</p>
                            <p className="flex items-center gap-1">
                                <Users size={10} />
                                {confluence.audience}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}