import { User } from "lucide-react";
import { Link } from "react-router";
import RankSelector from "~/components/rank-selector";
import RegionSelector from "~/components/region-selector";
import ScoreItem from "~/components/score-item";

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

export default () => {
    return (
        <>
            <header className="h-[195px]">
                <div className="p-0 py-4 border-b app-header">
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
                </div>
            </header>
            <main>
                <ol className="list-decimal list-inside">
                    {scores.map(({ id, name, xp }, index) => (
                        <ScoreItem key={id} index={index} id={id} name={name} xp={xp} />
                    ))}
                </ol>
            </main>
        </>
    )
}