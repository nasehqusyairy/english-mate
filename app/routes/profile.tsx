import { FileText, HelpCircle, Key, LogOut, Mail, Medal, SunMoon, User } from "lucide-react"
import { Link } from "react-router"
import ProfileAction, { type ProfileActionProps } from "~/components/profile-action"
import { Button } from "~/components/ui/button"
import UpgradeProCard from "~/components/upgrade-pro-card"

const actions: ProfileActionProps[] = [
    {
        title: "Dark Mode",
        icon: SunMoon,
        onClick: () => {
            // jika di localStorage ada key theme = dark, maka berikan class dark pada body
            if (localStorage.getItem("theme") === "dark") {
                document.body.classList.remove("dark");
                localStorage.setItem("theme", "light");
            } else {
                localStorage.setItem("theme", "dark");
                document.body.classList.add("dark");
            }
        },
        target: "switch",
        onMount: (setIsChecked) => {
            setIsChecked(localStorage.getItem("theme") === "dark");
        }
    },
    {
        title: "Change Password",
        icon: Key,
        to: "/profile/change-password"
    },
    {
        title: "Transaction History",
        icon: FileText,
        to: "/profile/transaction-history"
    },
    {
        title: "Member's Benefits",
        icon: Medal,
        to: "/profile/members-benefits"
    },
    {
        title: "Feedback",
        icon: Mail,
        to: "/profile/feedback"
    },
    {
        title: "Help",
        icon: HelpCircle,
        to: "/profile/help"
    },
    {
        title: "Log Out",
        icon: LogOut,
        dialogconfig: {
            title: "Log Out",
            description: "Are you sure you want to log out?",
            ConfirmText: "Log Out",
            onConfirm: () => {
                // Handle log out logic here
            }
        }
    }
]

export default () => {

    return (
        <main>
            <section className="px-4 pt-3">
                <div className="dark:bg-input/30 p-4 border dark:border-input rounded-2xl">
                    <div className="flex items-center gap-4">
                        <div className="flex justify-center items-center bg-primary/10 rounded-full size-15 text-primary shrink-0">
                            <User size={25} />
                        </div>
                        <div className="flex-auto gap-0.5 grid">
                            <h1 className="font-bold truncate">Mohammad Nasyikh Al-Qusyairy</h1>
                            <p className="flex items-center gap-1 text-muted">
                                <Medal size={16} /> Basic
                            </p>
                        </div>
                        <Button className="shrink-0">
                            <Link to="/profile/edit">Edit</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="px-4">
                <UpgradeProCard />
            </section>

            <div className="text-muted text-sm">
                {actions.map(action => (
                    <ProfileAction key={action.title} {...action} />
                ))}
            </div>

            <div className="p-4 text-muted text-xs">
                <p>Version 1.0.0</p>
                <p>© {new Date().getFullYear()} English Mate. All rights reserved.</p>
            </div>

        </main>
    )
}
