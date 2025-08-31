import { Badge } from "./ui/badge"

export default ({ tags }: { tags: string[] }) => {
    return (
        <div className="flex flex-wrap gap-1 tags">
            {/* show only two maximum */}
            {tags.slice(0, 2).map((tag, index) => (
                <Badge variant={"default"} key={index}>{tag}</Badge>
            ))}

            {/* show more badge if there are more than 2 tags */}
            {tags.length > 2 && (
                <Badge variant={"default"}>
                    +{tags.length - 2}
                </Badge>
            )}
        </div>
    )
}