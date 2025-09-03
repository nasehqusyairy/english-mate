import LessonList from "~/components/lesson-list"
import { lessons } from "~/lib/samples"

export default () => {
    return <LessonList lessons={lessons.filter(el => el.completed > 0)} />
}