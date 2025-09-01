import MeetingList from "~/components/meeting-list"
import { meetings } from "~/lib/samples"

export default () => {
    return <MeetingList meetings={meetings.filter(el => el.isJoined)} />
}