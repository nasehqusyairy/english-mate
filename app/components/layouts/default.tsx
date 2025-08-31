import { Link, Outlet, useLocation, useNavigation } from "react-router";
import { Button } from "../ui/button";
import { Bell, Book, GraduationCap, Home, User } from "lucide-react";
import { useEffect } from "react";
import { Progress } from "../ui/progress";


const navItems = [
    { to: "/confluences", icon: <GraduationCap /> },
    { to: "/lessons", icon: <Book /> },
    { to: "/", icon: <Home /> },
    { to: "/notifications", icon: <Bell /> },
    { to: "/profile", icon: <User /> },
]

export default () => {
    const location = useLocation()

    const navigation = useNavigation()

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
            <Progress className="bg-background rounded-none" value={navigation.state === "loading" ? 75 : 0} />
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