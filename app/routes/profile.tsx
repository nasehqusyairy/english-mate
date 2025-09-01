import { ChevronRight, FileText, HelpCircle, Key, LogOut, Medal, User } from "lucide-react"
import { Link } from "react-router"
import ProfileAction from "~/components/profile-action"
import { Button } from "~/components/ui/button"
import UpgradeProCard from "~/components/ui/upgrade-pro-card"

const actions = [
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
        title: "Help",
        icon: HelpCircle,
        to: "/profile/help"
    }, {
        title: "Log Out",
        icon: LogOut,
        onClick: () => {
            // Handle log out logic here
        }
    }
]

export default () => {
    return (
        <main>
            <section className="px-4 pt-3">
                <div className="p-4 border rounded-2xl">
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
                    <ProfileAction key={action.title} title={action.title} icon={action.icon} to={action.to} />
                ))}
            </div>

            <div className="p-4 text-muted text-xs">
                <p>Version 1.0.0</p>
                <p>© {new Date().getFullYear()} English Mate. All rights reserved.</p>
            </div>

        </main>
    )
}
