import { Link, Outlet, useOutlet } from "react-router"
import type { TabItem } from "./tab-nav"
import TabNav from "./tab-nav"
import type { NotifItem } from "~/components/notif-list"
import NotifList from "~/components/notif-list"
import { handle } from "~/handlers/notifications"

export { handle }

const tabItems: TabItem[] = [
    {
        href: "/notifications",
        label: "System",
        value: "system"
    },
    {
        href: "/notifications/missions",
        label: "Mission",
        value: "missions"
    }
]

const notifItems: NotifItem[] = [
    {
        date: new Date("2025-08-31T15:42:00"),
        title: "Welcome to English Mate!",
        message: "We're glad to have you here. Explore and enjoy your learning journey! Here you can find various resources to help you improve your English skills.",
        link: {
            href: "/meetings",
            label: "Go to Meetings"
        }
    },
    {
        date: new Date("2025-08-31T15:42:00"),
        title: "Upgrade to Pro!",
        message: "Enjoy exclusive features and content by upgrading to Pro. Take your learning to the next level!",
        link: {
            href: "#",
            label: "Upgrade Now"
        }
    }
]

export default () => {
    const outlet = useOutlet();

    return (
        <main>
            <TabNav items={tabItems} defaultValue={'system'} className="px-4">
                {outlet ? <Outlet /> : <NotifList items={notifItems} />}
            </TabNav>
        </main>
    )
}
