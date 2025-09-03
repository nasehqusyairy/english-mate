import MissionList, { type MissionItem } from "~/components/mission-list";
import { handle } from "~/handlers/notifications";

export { handle };

const missions: MissionItem[] = [
    {
        title: "Tutorial",
        message: "Start to join a Meeting",
        href: "/meetings",
        xp: 20,
        target: 5,
        current: 2,
    },
    {
        title: "Tutorial",
        message: "Start to learn a Lesson",
        href: "/lessons",
        xp: 15,
        target: 3,
        current: 1,
    },
    {
        title: "Tutorial",
        message: "Review 2 Lessons",
        href: "/lessons",
        xp: 25,
        target: 2,
        current: 0,
    },
    {
        title: "Introduce yourself",
        message: "Join Meeting with an 'Introduction' tag",
        href: "/meetings",
        xp: 40,
        target: 1,
        current: 0,
    },
    {
        title: "Meeting Target",
        message: "Join 3 Meetings",
        href: "/meetings",
        xp: 30,
        target: 3,
        current: 1,
    },
    {
        title: "Meeting Streak",
        message: "Join Meetings 5 days in a row",
        href: "/meetings",
        xp: 50,
        target: 5,
        current: 3,
    },
    {
        title: "Lesson Target",
        message: "Complete 3 Lessons",
        href: "/lessons",
        xp: 30,
        target: 3,
        current: 2,
    },
    {
        title: "Lesson Target",
        message: "Learn about English Basics",
        href: "/lessons",
        xp: 45,
        target: 1,
        current: 1,
    },
    {
        title: "XP Target",
        message: "Earn 100 XP to level up",
        href: "/",
        xp: 100,
        target: 100,
        current: 60,
    },
    {
        title: "Do a Homework",
        message: "Finish a Homework given by your teacher from a Meeting",
        href: "/meetings",
        xp: 35,
        target: 1,
        current: 0,
    },
];


export default () => {
    return <MissionList items={missions} />;
}
