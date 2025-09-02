import { User } from "lucide-react";
import { Link } from "react-router";
import RegionSelector from "~/components/region-selector";
import { Badge } from "~/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

const scores = [
    { id: 1, name: "Muhammad Nobel Ilhami", xp: 990 },
    { id: 2, name: "Muhammad Aan Khunaify", xp: 520 },
    { id: 3, name: "Mohammad Nasyikh Al-Qusairy", xp: 98 },
    { id: 4, name: "Dzulfikar Al-Ghozali", xp: 85 },
    { id: 5, name: "Kahfi Nur Vito", xp: 20 },
    { id: 6, name: "Maulana Dzulkufli Faraby", xp: 15 },
    { id: 7, name: "Ahchmad Zakaria", xp: 12 },
    { id: 8, name: "Lorem Ipsum Dolor", xp: 5 },
]

const ranks = [
    "Newbie",
    "Pre Basic",
    "Basic",
    "Master",
    "Advanced",
    "Proficient"
]


type ScoreItemProps = {
    index: number;
    id: number;
    name: string;
    xp: number;
}

const ScoreItem = ({ index, id, name, xp }: ScoreItemProps) => (
    <li className={"flex justify-between items-center p-4 not-last:border-b" + (id === 3 ? " bg-muted-foreground dark:bg-input/30" : "")}>
        <div className="flex items-center gap-2">
            <span>{index + 1}.</span>
            <div className="flex justify-center items-center bg-primary/10 rounded-full size-10 text-primary shrink-0">
                <User />
            </div>
            <Link className="block w-8/12 truncate" to={`/view-profile`}>{name}</Link>
        </div>
        <Badge >{xp} XP</Badge>
    </li>
);

const RankSelector = ({ selected }: { selected: number }) => {
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

export default () => {
    return (
        <>
            <header className="py-4 border-b">
                <div className="flex justify-between items-center gap-4 mb-4 px-4 pb-4 border-b text-muted">
                    <div className="flex items-center gap-4 w-8/12">
                        <div className="flex justify-center items-center bg-primary/10 rounded-full size-10 text-primary shrink-0">
                            <User />
                        </div>
                        <div className="w-10/12">
                            <Link className="block font-bold text-black dark:text-foreground truncate" to={`/view-profile`}>{scores[2].name}</Link>
                            <div className="text-primary text-xs">East Java</div>
                        </div>
                    </div>
                    <div className="pl-4 border-l text-center">
                        <span className="font-bold text-black dark:text-foreground">3</span>
                        <p className="text-xs">Pre Basic</p>
                    </div>
                </div>
                <div className="gap-4 grid px-4">
                    <RegionSelector selected={12} />
                    <RankSelector selected={1} />
                </div>
            </header>
            <main className="h-[calc(100vh-300px)] overflow-x-hidden overflow-y-auto">
                <ol className="list-decimal list-inside">
                    {scores.map(({ id, name, xp }, index) => (
                        <ScoreItem key={id} index={index} id={id} name={name} xp={xp} />
                    ))}
                </ol>
            </main>
        </>
    )
}