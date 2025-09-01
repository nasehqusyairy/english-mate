import { useEffect } from "react";
import { Outlet } from "react-router";

export default () => {
    useEffect(() => {
        // Check for saved theme preference in localStorage
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, []);
    return <Outlet />;
}