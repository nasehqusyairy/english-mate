import { Calendar, Clock, Heart, Users } from "lucide-react"
import { Badge } from "./ui/badge"
import PlaceholderImage from "~/assets/tools-3d.jpg";
import { Button } from "./ui/button";

type ConfluenceItemProps = {
    title: string;
    presenter: string;
    date: string;
    time: string;
    audience: number;
    tags: string[];
    image?: string;
    isFavorite?: boolean;
}

export default ({ title, presenter, date, time, audience, tags, image, isFavorite = false }: ConfluenceItemProps) => {
    return (
        <div className="gap-4 grid dark:bg-input/30 hover:shadow-md p-4 border hover:border-primary! dark:border-input rounded-2xl w-10/12 transition-shadow cursor-pointer shrink-0">

            <div className="relative">
                <div className="top-0 bottom-0 absolute p-1.5">
                    <Button size={"icon"} variant={isFavorite ? "default" : "outline"} className="rounded-full">
                        <Heart />
                    </Button>
                </div>
                <img src={image ? image : PlaceholderImage} alt="illustration" className="rounded-2xl w-full" />
            </div>

            <div className="gap-1.5 grid">
                <h2 className="font-bold truncate">
                    {title}
                </h2>
                <p className="text-muted text-xs">{presenter}</p>
                <div className="flex gap-2">
                    {/* show only two maximum */}
                    {tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index}>{tag}</Badge>
                    ))}

                    {/* show more badge if there are more than 2 tags */}
                    {tags.length > 2 && (
                        <Badge variant={"secondary"}>
                            +{tags.length - 2}
                        </Badge>
                    )}
                </div>
            </div>
            <hr />
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 text-muted text-xs">
                    <Calendar size={16} /> <span>{date}</span>
                </div>
                <div className="flex items-center gap-1 text-muted text-xs">
                    <Clock size={16} /> <span>{time} WIB</span>
                </div>
                <div className="flex items-center gap-1 text-muted text-xs">
                    <Users size={16} /> <span>{audience}</span>
                </div>
            </div>
        </div>
    )
}