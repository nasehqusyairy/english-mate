import type { LucideIcon } from "./lucide-icon"

export type TicketItem = {
    id: string
    title: string
    icon?: LucideIcon
    amount: number
    price: number
    bonus?: number
}