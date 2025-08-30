import { Badge } from "./ui/badge"
import { Progress } from "./ui/progress"

type LessonItemProps = {
    tags: string[];
    title: string;
    description: string;
    progress: number;
}

export default ({ tags, title, description, progress }: LessonItemProps) => {
    return (
        <div className="gap-2 grid dark:bg-input/30 hover:shadow-md p-4 border hover:border-primary! dark:border-input rounded-2xl w-10/12 transition-shadow cursor-pointer shrink-0">
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
            <h2 className="font-bold">{title}</h2>
            <p className="text-muted text-sm">
                {description}
            </p>
            <div className="gap-1 grid text-right">
                <span className="text-xs">{progress}%</span>
                <Progress value={progress} className="w-full" />
            </div>
        </div>
    )
}