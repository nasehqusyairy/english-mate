import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export const ranks = [
    "Newbie",
    "Pre Basic",
    "Basic",
    "Master",
    "Advanced",
    "Proficient"
]

export default ({ selected }: { selected: number }) => {
    return (
        <Select defaultValue={ranks[selected]}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Rank..." />
            </SelectTrigger>
            <SelectContent>
                {ranks.map((rank) => (
                    <SelectItem key={rank} value={rank}>{rank}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};