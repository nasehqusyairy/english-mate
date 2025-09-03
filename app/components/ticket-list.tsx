import { Ticket } from "lucide-react"
import { toIDR } from "~/lib/utils"
import type { LucideIcon } from "~/models/lucide-icon"
import type { TicketItem } from "~/models/ticket"


type TicketCardProps = {
    items: TicketItem[]
}

export default ({ items }: TicketCardProps) => {
    return (
        <div className="flex flex-wrap gap-2 px-4">
            {items.map((item) => {
                const Icon = item.icon || Ticket

                return (
                    <div className="border dark:border-input rounded-2xl w-[calc(calc(100%/3)-0.5rem)]" key={item.id}>
                        <div className="p-4">
                            <h2 className="mb-4 font-bold">
                                {item.title}
                            </h2>
                            <div className="flex items-center gap-1">
                                <Icon className="text-yellow-500" />
                                {item.amount}
                                {item.bonus && (
                                    <span className="text-muted-foreground text-xs">
                                        +{item.bonus}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="bg-muted-foreground dark:bg-input/30 p-4 border-t rounded-bl-2xl rounded-br-2xl text-xs">
                            {toIDR(item.price)}
                        </div>
                    </div>
                )
            })}
        </div>

    )
}