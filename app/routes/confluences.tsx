import { Search, Settings2 } from "lucide-react";
import { Form, Link, Outlet, useOutlet } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { confluences } from "~/lib/samples";
import ConfluenceList from "~/components/confluence-list";


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
                                <Link to="/confluences">All</Link>
                            </TabsTrigger>
                            <TabsTrigger asChild value="joined">
                                <Link to="/confluences/joined">Joined</Link>
                            </TabsTrigger>
                            <TabsTrigger asChild value="created">
                                <Link to="/confluences/created">Created</Link>
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    {outlet ? <Outlet /> : <ConfluenceList {...{ confluences }} />}
                </Tabs>
            </main>
        </>
    );
}
