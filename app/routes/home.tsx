import { Book, GraduationCap, Medal, MessageCircle, Star, SunMoon, Ticket, Zap } from "lucide-react";
import { Button } from "~/components/ui/button";
import LessonItem from "~/components/lesson-item";
import MeetingItem from "~/components/meeting-item";
import PersonalOverview from "~/components/personal-overview";
import { Link } from "react-router";
import { meetings, lessons } from "~/lib/samples";

const overviews = [
  {
    value: 75,
    title: "Lessons",
    icon: Book
  },
  {
    value: 58,
    title: "Meeting",
    icon: GraduationCap
  },
  {
    value: 98,
    title: "XP Points",
    icon: Zap
  },
  {
    value: "Newbie",
    title: "Rank",
    icon: Star
  }
]

export default function Home() {

  const toggleTheme = () => {
    // jika di localStorage ada key theme = dark, maka berikan class dark pada body
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    }
  }

  return (
    <>
      <header className="flex justify-between items-center p-4 pt-3 border-b">
        <div className="brand">
          <h1>English Mate</h1>
        </div>
        <div className="flex gap-1">
          <Button variant={"outline"} className="bg-yellow-500/10 text-yellow-500">
            <Ticket />
            <span>200</span>
          </Button>
          <Button size={"icon"} variant={"outline"} onClick={toggleTheme}>
            <SunMoon />
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
