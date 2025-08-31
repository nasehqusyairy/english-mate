import type { Confluence } from "~/models/confluence"
import TagContainer from "./tag-container";
import { Calendar, Clock, Heart, Users } from "lucide-react";
import { Button } from "./ui/button";
import type { Lesson } from "~/models/lesson";
import { Progress } from "./ui/progress";

export default ({ lessons }: { lessons: Lesson[] }) => {
    return (
        <div>
            {lessons.map((lesson, index) => (
                <div className="p-4 not-last:border-b" key={index}>
                    <div className="text-muted dark:text-foreground text-xs">
                        <TagContainer tags={lesson.tags} />
                        <div className="my-2">
                            <h1 className="font-bold text-foreground text-sm hover:underline truncate cursor-pointer">{lesson.title}</h1>
                            <p className="truncate">
                                by <a href="#" className="text-primary hover:underline">{lesson.author}</a>
                            </p>
                        </div>
                        <p className="mb-2">{lesson.description}</p>
                        {lesson.progress && (
                            <>
                                <p className="mb-2">{lesson.progress}%</p>
                                <Progress value={lesson.progress} />
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}