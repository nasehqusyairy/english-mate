import { Search, Settings2, X } from "lucide-react";
import { Form, Link, Outlet, useLocation, useOutlet } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { meetings } from "~/lib/samples";
import MeetingList from "~/components/meeting-list";
import TabNav from "./tab-nav";
import { Badge } from "~/components/ui/badge";

const tabItems = [
    {
        value: "all",
        label: "All",
        href: "/meetings"
    },
    {
        value: "registered",
        label: "Registered",
        href: "/meetings/registered"
    },
    {
        value: "created",
        label: "Created",
        href: "/meetings/created"
    }
]

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
                        <Link to="/meetings/filter">
                            <Settings2 />
                        </Link>
                    </Button>
                </Form>
            </header>
            <main>
                <TabNav items={tabItems} defaultValue={'all'} className="mx-4 pt-4">
                    {/* <div className="flex flex-wrap gap-2 px-4 pt-4">
                        <Badge variant={"secondary"}> <X /> Speaking</Badge>
                        <Badge variant={"secondary"}> <X /> Writing</Badge>
                        <Badge variant={"secondary"}> <X /> Beginner</Badge>
                        <Badge variant={"secondary"}> <X /> Grammar</Badge>
                        <Badge variant={"secondary"}> <X /> Advanced</Badge>
                    </div> */}
                    {outlet ? <Outlet /> : <MeetingList {...{ meetings }} />}
                </TabNav>
            </main>
        </>
    );
}
