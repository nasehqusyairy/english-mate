import type { Tag } from "~/models/tag";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

type TagCheckBoxesProps = {
    items: Tag[];
};

export default ({ items }: TagCheckBoxesProps) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id} className="py-4 not-last:border-b">
                    <Label>
                        <Checkbox name="tags" value={item.id} />
                        {item.label}
                    </Label>
                </li>
            ))}
        </ul>
    );
};