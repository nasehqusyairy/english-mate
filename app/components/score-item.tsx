import { User } from "lucide-react";
import { Link } from "react-router";
import { Badge } from "./ui/badge";

type ScoreItemProps = {
    index: number;
    id: number;
    name: string;
    xp: number;
}

export default ({ index, id, name, xp }: ScoreItemProps) => (
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