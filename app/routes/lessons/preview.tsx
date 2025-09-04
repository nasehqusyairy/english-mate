import { Lightbulb, Lock, Zap } from "lucide-react";
import { Link } from "react-router";
import TagContainer from "~/components/tag-container";
import { lessons } from "~/lib/samples"
import PlaceholderImage from "~/assets/tools-3d.png";
import { Button } from "~/components/ui/button";
import type { Route } from "./+types/preview";

export const handle = {
    title: "Lesson Preview"
}

export default ({ params }: Route.ComponentProps) => {
    const lesson = lessons[parseInt(params.id) || 0] || lessons[0];
    return (
        <>
            <main>
                <div className="mb-4 p-4 border-b">
                    <div className="text-muted dark:text-foreground">
                        <TagContainer tags={lesson.tags} />
                        <div className="my-2">
                            <h1 className="font-bold text-foreground hover:underline truncate cursor-pointer">
                                {lesson.title}
                            </h1>
                            <p className="truncate">
                                by <Link to={'/view-profile'} className="text-primary hover:underline">{lesson.author}</Link>
                            </p>
                        </div>
                        <p className="mb-4">{lesson.description}</p>
                        <div className="flex gap-4">
                            <p className="flex items-center gap-1 text-primary">
                                <Zap size={16} />
                                {lesson.xp}
                            </p>
                            <p className="flex items-center gap-1 text-yellow-500">
                                <Lightbulb size={16} />
                                {lesson.completed}/{lesson.topics}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mb-4 px-4">
                    <div className="p-4 border rounded-2xl">
                        <h2 className="mb-2 font-bold">✍️ Prerequisites</h2>
                        <p className="text-muted dark:text-foreground text-justify">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea rerum illum iste delectus cum, ipsam nemo eaque doloremque quidem magni corporis reiciendis beatae possimus sapiente reprehenderit nobis amet consequatur quae.
                        </p>
                    </div>
                </div>
                <div className="mb-4 px-4">
                    <div className="p-4 border rounded-2xl">
                        <h2 className="mb-2 font-bold">💭 Outcomes</h2>
                        <ul className="text-muted dark:text-foreground list-disc list-inside">
                            <li>Lorem ipsum dolor sit amet </li>
                            <li>Consectetur adipisicing elit.</li>
                            <li>Sit amet consectetur Quisquam, quod.</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-4 px-4">
                    {Array.from({ length: lesson.topics }).map((_, index) => (
                        <div className="flex justify-between items-center p-4 not-last:border-b" key={index}>
                            <div className="relative w-4/12">
                                <img src={PlaceholderImage} alt="meeting" className="rounded-2xl w-full" />
                            </div>
                            <div className="w-[calc(calc(100%*calc(8/12))-1rem)] text-muted dark:text-foreground text-xs">

                                <div className="my-2">
                                    <h1 className="font-bold text-foreground text-sm truncate">
                                        <Link to={'/meetings/preview'} className="hover:underline">Lorem Ipsum</Link>
                                    </h1>
                                    <p className="mb-2 text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quod consequuntur sapiente suscipit ab doloremque in fuga.
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="flex items-center gap-1">
                                        <Lock size={10} />
                                        Not Started
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <footer className="app-footer-container">
                <div className="justify-end p-4 app-footer">
                    <Button>Continue</Button>
                </div>
            </footer>
        </>
    )
}
