import type { Meeting } from "~/models/meeting"
import TagContainer from "./tag-container";
import { Lightbulb, Zap } from "lucide-react";
import type { Lesson } from "~/models/lesson";
import { Link } from "react-router";

export default ({ lessons }: { lessons: Lesson[] }) => {
    return (
        <div>
            {lessons.map((lesson, index) => (
                <div className="p-4 not-last:border-b" key={index}>
                    <div className="text-muted dark:text-foreground text-xs">
                        <TagContainer tags={lesson.tags} />
                        <div className="my-2">
                            <h1 className="font-bold text-foreground text-sm hover:underline truncate cursor-pointer">
                                <Link to={`/lessons/${index}`}>{lesson.title}</Link>
                            </h1>
                            <p className="truncate">
                                by <Link to={'/view-profile'} className="text-primary hover:underline">{lesson.author}</Link>
                            </p>
                        </div>
                        <p className="mb-4">{lesson.description}</p>
                        <div className="flex gap-4">
                            <p className="flex items-center gap-1 text-primary">
                                <Zap size={10} />
                                {lesson.xp}
                            </p>
                            <p className="flex items-center gap-1 text-yellow-500">
                                <Lightbulb size={10} />
                                {lesson.completed}/{lesson.topics}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}