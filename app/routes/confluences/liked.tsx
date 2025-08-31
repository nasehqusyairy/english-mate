import ConfluenceList from "~/components/confluence-list"
import { confluences } from "~/lib/samples"

export default () => {
    return <ConfluenceList confluences={confluences.filter(el => el.isJoined)} />
}