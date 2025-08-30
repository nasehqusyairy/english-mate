import { Outlet } from "react-router";
import { Button } from "../ui/button";
import { Bell, Book, GraduationCap, Home, MessageCircle, User } from "lucide-react";


export default () => {
    return (
        <>

            <Outlet />
            <div className="app-footer-container">
                <footer className="app-footer">
                    <Button size={"lg"} variant={"ghost"}><GraduationCap /></Button>
                    <Button size={"lg"} variant={"ghost"}><Book /></Button>
                    <Button size={"lg"} variant={"default"}><Home /></Button>
                    <Button size={"lg"} variant={"ghost"}><Bell /></Button>
                    <Button size={"lg"} variant={"ghost"}><User /></Button>
                </footer>
            </div>
        </>
    );
}