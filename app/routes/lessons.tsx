import { Search, Settings2 } from "lucide-react";
import { Form, Link, Outlet, useOutlet } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { confluences, lessons } from "~/lib/samples";
import LessonList from "~/components/lesson-list";


export default () => {
    const outlet = useOutlet();
    return (
        <>
            <header className="p-4 border-b">
                <Form className="flex gap-2">
                    <div className="relative flex-1">
                        <Input type="search" placeholder="Search..." />
                        <Search className="top-1/2 right-2 absolute -translate-y-1/2 transform" size={16} />
                    </div>
                    <Button type="button">
                        <Settings2 />
                    </Button>
                </Form>
            </header>
            <main>
                <Tabs defaultValue="all">
                    <div className="px-4 pt-4">
                        <TabsList className="mb-2 w-full">
                            <TabsTrigger asChild value="all">
                                <Link to="/lessons">All</Link>
                            </TabsTrigger>
                            <TabsTrigger asChild value="progress">
                                <Link to="/lessons/progress">Progress</Link>
                            </TabsTrigger>
                            <TabsTrigger asChild value="done">
                                <Link to="/lessons/done">Done</Link>
                            </TabsTrigger>
                            <TabsTrigger asChild value="created">
                                <Link to="/lessons/created">Created</Link>
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    {outlet ? <Outlet /> : <LessonList {...{ lessons }} />}
                </Tabs>
            </main>
        </>
    );
}
