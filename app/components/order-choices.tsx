import type { OrderKey } from "~/models/order-key";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

type OrderChoicesProps = {
    items: OrderKey[];
};


export default ({ items }: OrderChoicesProps) => {
    return (
        <RadioGroup className="gap-4 grid mb-4">
            {items.map(item => (
                <Label key={item.value}>
                    <RadioGroupItem value={item.value} />
                    {item.label}
                </Label>
            ))}
        </RadioGroup>
    );
};