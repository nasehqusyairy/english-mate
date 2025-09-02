import type { Lesson } from "~/models/lesson"
import { Badge } from "./ui/badge"
import { Progress } from "./ui/progress"
import { Link } from "react-router"

export default ({ tags, title, description, progress, author }: Lesson) => {
    return (
        <div className="gap-2 grid dark:bg-input/30 p-4 border dark:border-input rounded-2xl w-8/12 shrink-0">
            <div className="flex gap-1">
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
            <h2 className="font-bold hover:underline truncate">
                <Link to={'/lessons/preview'}>{title}</Link>
            </h2>
            <p className="text-sm truncate">
                by <Link to={'/view-profile'} className="text-primary hover:underline">{author}</Link>
            </p>
            <p className="text-muted">
                {description}
            </p>
            <div className="gap-1 grid text-right">
                <span className="text-xs">{progress}%</span>
                <Progress value={progress} className="w-full" />
            </div>
        </div>
    )
}