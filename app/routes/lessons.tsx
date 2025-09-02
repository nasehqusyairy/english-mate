import { Search, Settings2 } from "lucide-react";
import { Form, href, Link, Outlet, useLocation, useOutlet } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { meetings, lessons } from "~/lib/samples";
import LessonList from "~/components/lesson-list";
import type { TabItem } from "./tab-nav";
import TabNav from "./tab-nav";

const tabItems: TabItem[] = [
    {
        value: "all",
        label: "All",
        href: "/lessons"
    },
    {
        value: "progress",
        label: "Progress",
        href: "/lessons/progress"
    },
    {
        value: "done",
        label: "Done",
        href: "/lessons/done"
    },
    {
        value: "created",
        label: "Created",
        href: "/lessons/created"
    },
];

export default () => {
    const outlet = useOutlet();

    return (
        <>
            <header className="p-4 pt-3 border-b">
                <Form className="flex gap-2">
                    <div className="relative flex-1">
                        <Input type="search" placeholder="Search..." />
                        <Search className="top-1/2 right-2 absolute -translate-y-1/2 transform" size={16} />
                    </div>
                    <Button asChild type="button">
                        <Link to="/lessons/filter">
                            <Settings2 />
                        </Link>
                    </Button>
                </Form>
            </header>
            <main>
                <TabNav items={tabItems} defaultValue={'all'} className="mx-4 pt-4">
                    {outlet ? <Outlet /> : <LessonList {...{ lessons }} />}
                </TabNav>
            </main>
        </>
    );
}
