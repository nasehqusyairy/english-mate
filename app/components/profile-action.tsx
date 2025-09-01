import { ChevronRight, type LucideProps } from "lucide-react"
import { Link } from "react-router";

type ProfileActionProps = {
    title: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    to?: string;
    onClick?: () => void;
}

export default (props: ProfileActionProps) => {

    const Parent = props.to ? Link : "button";

    return (
        <Parent onClick={props.onClick} to={props.to!} className="flex justify-between items-center hover:bg-muted/10 active:bg-muted/15 p-4 not-last:border-b w-full cursor-pointer">
            <div className="flex gap-4">
                <div className="flex justify-center items-center bg-primary/10 rounded size-6 text-primary shrink-0">
                    <props.icon size={16} />
                </div>
                <span>{props.title}</span>
            </div>
            <ChevronRight size={16} />
        </Parent>
    )
}