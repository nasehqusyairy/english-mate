import { Search, Settings2 } from "lucide-react";
import { Form } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default () => {
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
            <main className="p-4">
                <Tabs defaultValue="all">
                    {/* <div className="flex justify-center w-full"> */}
                    <TabsList className="w-full">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="joined">Joined</TabsTrigger>
                        <TabsTrigger value="created">Created</TabsTrigger>
                    </TabsList>
                    {/* </div> */}
                    <TabsContent value="all">View all your lessons here.</TabsContent>
                    <TabsContent value="joined">View your joined lessons here.</TabsContent>
                    <TabsContent value="created">View your created lessons here.</TabsContent>
                </Tabs>
            </main>
        </>
    );
}
