import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Outlet } from "react-router";

export default () => {
    return (
        <>
            <Button size={"icon"} className="bottom-[calc(var(--navbar-height)+1rem)] left-1/2 fixed rounded-full translate-x-[calc(calc(calc(var(--body-width)/2)-1rem)-100%)]">
                <Plus />
            </Button>
            <Outlet />
        </>
    );
}
