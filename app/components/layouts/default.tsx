import { Link, Outlet, useLocation } from "react-router";
import { Button } from "../ui/button";
import { Bell, Book, GraduationCap, Home, User } from "lucide-react";
import { useEffect } from "react";


const navItems = [
    { to: "/confluences", icon: <GraduationCap /> },
    { to: "/lessons", icon: <Book /> },
    { to: "/", icon: <Home /> },
    { to: "/notifications", icon: <Bell /> },
    { to: "/profile", icon: <User /> },
]

export default () => {
    const location = useLocation()

    const isActive = (path: string) => {
        if (path === "/") {
            // khusus root, cocok kalau eksak "/"
            return location.pathname === "/"
        }
        return location.pathname.startsWith(path)
    }

    useEffect(() => {
        // Check for saved theme preference in localStorage
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, []);

    return (
        <>
            <Outlet />
            <footer className="app-footer-container">
                <div className="app-footer">
                    {navItems.map((item) => (
                        <Button asChild key={item.to} variant={isActive(item.to) ? "default" : "ghost"} size="lg">
                            <Link key={item.to} to={item.to}>
                                {item.icon}
                            </Link>
                        </Button>
                    ))}
                </div>
            </footer>
        </>
    );
}