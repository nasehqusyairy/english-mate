import { Book, GraduationCap, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Outlet } from "react-router";
import { useState } from "react";

export default () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <Button size={"icon"} className={"fab " + (isActive ? "lesson-fab" : "")}>
                <Book />
            </Button>
            <Button size={"icon"} className={"fab " + (isActive ? "confluence-fab" : "")}>
                <GraduationCap />
            </Button>
            <Button size={"icon"} variant={isActive ? "secondary" : "default"} className={"fab " + (isActive ? "active" : "")} onClick={() => setIsActive(!isActive)}>
                <Plus />
            </Button>
            <Outlet />
        </>
    );
}
