import { Ticket } from "lucide-react"
import TicketList from "~/components/ticket-list"
import UpgradeProCard from "~/components/upgrade-pro-card"
import { toIDR } from "~/lib/utils"
import type { LucideIcon } from "~/models/lucide-icon"
import type { TicketItem } from "~/models/ticket"

export const handle = {
    title: "Tickets"
}

const products: TicketItem[] = [
    {
        id: "1",
        title: "Regular",
        amount: 25,
        price: 25000
    },
    {
        id: "2",
        title: "School",
        amount: 60,
        price: 50000,
    },
    {
        id: "3",
        title: "Bussiness",
        amount: 150,
        price: 100000
    },
    {
        id: "4",
        title: "Super",
        amount: 11000,
        price: 9150000
    }
]

export default () => {
    return (
        <main>
            <div className="flex gap-4 bg-muted-foreground dark:bg-input/30 mb-4 p-4 border-b">
                <Ticket className="text-yellow-500" />
                200
            </div>
            <TicketList items={products} />
            <div className="p-4">
                <UpgradeProCard />
            </div>
        </main>
    )
}
