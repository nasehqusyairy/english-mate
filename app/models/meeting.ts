export type Meeting = {
    id: string;
    title: string;
    presenter: string;
    date: string;
    time: string;
    participants: number;
    capacity: number;
    price: number;
    tags: string[];
    image?: string;
    isJoined?: boolean;
}