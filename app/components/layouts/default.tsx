import { Link, Outlet, useLocation, useNavigation } from "react-router";
import { Button } from "../ui/button";
import { Bell, Book, GraduationCap, Home, Plus, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { motion, type Variants } from 'framer-motion';


const navItems = [
    { title: 'Meetings', to: "/meetings", icon: <GraduationCap /> },
    { title: 'Lessons', to: "/lessons", icon: <Book /> },
    { title: 'Home', to: "/", icon: <Home /> },
    { title: 'Inbox', to: "/notifications", icon: <Bell /> },
    { title: 'Profile', to: "/profile", icon: <User /> },
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

    const [isFABActive, setIsFABActive] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const pageVariants: Variants = {
        initial: { scale: 0.9, opacity: 0, height: '100vh', overflow: 'hidden' },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.9, opacity: 0 }
    };

    return (
        <motion.div
            className={'main-transition ' + (isAnimating ? "animating" : "h-auto! overflow-auto!")}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25 }}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
        >
            <Button size={"icon"} className={"fab " + (isFABActive ? "lesson-fab" : "")}>
                <Book />
            </Button>
            <Button size={"icon"} className={"fab " + (isFABActive ? "meeting-fab" : "")}>
                <GraduationCap />
            </Button>
            <Button size={"icon"} variant={isFABActive ? "secondary" : "default"} className={"fab " + (isFABActive ? "active" : "")} onClick={() => setIsFABActive(!isFABActive)}>
                <Plus />
            </Button>
            <Progress className="bg-background rounded-none" value={navigation.state === "loading" ? 75 : 0} />
            <Outlet />
            <footer className="app-footer-container">
                <div className="app-footer">
                    {navItems.map((item) => (
                        <div className="relative flex flex-col items-center gap-1 w-1/5" key={item.to}>
                            <Button asChild variant={isActive(item.to) ? "default" : "ghost"} size="icon">
                                <Link key={item.to} to={item.to} className="flex!">
                                    {item.icon}
                                </Link>
                            </Button>
                            <span className="text-xs">{item.title}</span>
                            {item.title === "Inbox" && (
                                <Badge className="-top-1 right-2 absolute" variant={'destructive'}>2</Badge>
                            )}
                        </div>
                    ))}
                </div>
            </footer>
        </motion.div>
    );
}