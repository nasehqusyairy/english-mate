import { Book, Calendar, Clock, GraduationCap, Medal, MessageCircle, SunMoon, Zap } from "lucide-react";
import { Button } from "~/components/ui/button";
import LessonItem from "~/components/lesson-item";
import ConfluenceItem from "~/components/confluence-item";
import PersonalOverview from "~/components/personal-overview";

const confluences = [
  {
    title: "Speaking About Classroom",
    presenter: "Fadilah Uhti Rianda",
    date: "15/09/2025",
    time: "12.30",
    audience: 24,
    tags: ["Speaking", "Intermediate", "Classroom"]
  },
  {
    title: "Writing Skills Workshop",
    presenter: "John Doe",
    date: "20/09/2025",
    time: "14.00",
    audience: 30,
    tags: ["Writing", "Beginner", "Workshop"]
  },
  {
    title: "Advanced Grammar Techniques",
    presenter: "Jane Smith",
    date: "25/09/2025",
    time: "10.00",
    audience: 20,
    tags: ["Grammar", "Advanced", "Workshop"]
  }
]

const lessons = [
  {
    title: "Simple Present Tense",
    description: "This lesson will teach you about the usage of simple present tense in daily conversation.",
    progress: 75,
    tags: ["Grammar", "Beginner"]
  },
  {
    title: "Past Continuous Tense",
    description: "Learn how to describe actions that were ongoing in the past.",
    progress: 50,
    tags: ["Grammar", "Intermediate"]
  },
  {
    title: "Future Perfect Tense",
    description: "Understand how to express actions that will be completed in the future.",
    progress: 25,
    tags: ["Grammar", "Advanced"]
  }
]

const overviews = [
  {
    value: 75,
    title: "Lessons",
    icon: Book
  },
  {
    value: 58,
    title: "Confluence",
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
    icon: Medal
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
      <header className="app-header">
        <div className="brand">
          <h1>English Mate</h1>
        </div>
        <div className="flex gap-1">
          <Button size={"icon"} variant={"outline"} onClick={toggleTheme}>
            <SunMoon />
          </Button>
          <Button size={"icon"} variant={"outline"}>
            <MessageCircle />
          </Button>
        </div>
      </header>
      <main className="p-4">
        <div className="container">

          <section>
            <div className="flex flex-wrap justify-around gap-4">
              {overviews.map((overview, index) => (
                <PersonalOverview key={'overview-' + index} {...overview} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex justify-between">
              <h1 className="font-bold">My Confluence</h1>
              <Button size={"sm"} variant={"link"}>View all</Button>
            </div>
            <div className="flex flex-nowrap gap-4 py-1 overflow-x-auto">
              {confluences.map((confluence, index) => (
                <ConfluenceItem key={'confluence-' + index} {...confluence} isFavorite />
              ))}
            </div>
          </section>

          <section>
            <div className="flex justify-between">
              <h1 className="font-bold">My Lessons</h1>
              <Button size={"sm"} variant={"link"}>View all</Button>
            </div>
            <div className="flex flex-nowrap gap-4 overflow-x-auto">
              {lessons.map((lesson, index) => (
                <LessonItem key={'lesson-' + index} {...lesson} />
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
