export type Confluence = {
    id: string;
    title: string;
    presenter: string;
    date: string;
    time: string;
    audience: number;
    tags: string[];
    image?: string;
    isJoined?: boolean;
}