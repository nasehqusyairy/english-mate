import { Bell, Book, GraduationCap, Medal, MessageCircle, Star, SunMoon, Ticket, Zap } from "lucide-react";
import { Button } from "~/components/ui/button";
import LessonItem from "~/components/lesson-item";
import MeetingItem from "~/components/meeting-item";
import PersonalOverview from "~/components/personal-overview";
import { Link } from "react-router";
import { meetings, lessons } from "~/lib/samples";
import { Badge } from "~/components/ui/badge";

/**
 * Rank:
 * - Newbie
 * - Pre Basic (Elementary)
 * - Basic (Intermediate)
 * - Master (Upper Intermediate)
 * - Advanced
 * - Proficient
 */

const overviews = [
  {
    value: 75,
    title: "Lessons",
    icon: Book,
    progress: 25
  },
  {
    value: 58,
    title: "Meetings",
    icon: GraduationCap,
    progress: 58
  },
  {
    value: 98,
    title: "XP Points",
    icon: Zap,
    progress: 75
  },
  {
    value: "Pre Basic",
    title: "Rank",
    icon: Star,
    progress: 2 / 6 * 100
  }
]

export default function Home() {

  return (
    <>
      <header className="flex justify-between items-center p-4 pt-3 border-b">
        <div className="brand">
          <h1>English Mate</h1>
        </div>
        <div className="flex gap-1">
          <Button asChild variant={"outline"} className="bg-yellow-500/10 dark:bg-yellow-500/10 border-yellow-500 dark:border-yellow-500 text-yellow-500 dark:text-yellow-500">
            <Link to={'/tickets'}>
              <Ticket />
              <span>200</span>
            </Link>
          </Button>
          <Button asChild className="relative" variant={"outline"}>
            <Link to={'/notifications'}>
              <Bell />
              <Badge className="-top-1 -right-2 absolute" variant={'destructive'}>2</Badge>
            </Link>
          </Button>
        </div>
      </header>
      <main className="p-4">

        <section>
          <div className="flex flex-wrap justify-around gap-4">
            {overviews.map((overview, index) => (
              <PersonalOverview key={'overview-' + index} {...overview} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between mb-4">
            <h1 className="font-bold">Upcoming Meeting</h1>
            <Link to="/meetings" className="text-primary text-sm">View all</Link>
          </div>
          <div className="flex flex-nowrap gap-4 overflow-x-auto">
            {meetings.map((meeting, index) => (
              <MeetingItem key={'meeting-' + index} {...{ meeting }} />
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between mb-4">
            <h1 className="font-bold">Being Learned</h1>
            <Link to="/lessons" className="text-primary text-sm">View all</Link>
          </div>
          <div className="flex flex-nowrap gap-4 overflow-x-auto">
            {lessons.filter(lesson => lesson.progress).map((lesson, index) => (
              <LessonItem key={'lesson-' + index} {...lesson} />
            ))}
          </div>
        </section>

      </main>
    </>
  )
}
