export type Meeting = {
    id: string;
    title: string;
    presenter: string;
    date: string;
    time: string;
    tickets: number;
    tags: string[];
    image?: string;
    isJoined?: boolean;
}