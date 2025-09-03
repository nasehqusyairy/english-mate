import type { Lesson } from "~/models/lesson"
import type { Meeting } from "~/models/meeting"

export const meetings: Meeting[] = [
    {
        id: "2",
        title: "Writing Skills Workshop",
        presenter: "John Doe",
        date: "20 Sep",
        time: "14.00",
        xp: 20,
        capacity: 50,
        price: 25,
        participants: 30,
        tags: ["Writing", "Beginner"]
    },
    {
        id: "1",
        title: "Speaking About Classroom",
        presenter: "Fadilah Uhti Rianda",
        date: "15 Sep",
        time: "12.30",
        xp: 30,
        capacity: 12,
        price: 30,
        participants: 8,
        tags: ["Speaking"],
        isJoined: true
    },
    {
        id: "3",
        title: "Advanced Grammar Techniques",
        presenter: "Jane Smith",
        date: "25 Sep",
        time: "10.00",
        xp: 12,
        capacity: 15,
        price: 0,
        participants: 15,
        tags: ["Grammar", "Advanced", "Workshop", "other"]
    }
]

export const lessons: Lesson[] = [
    {
        id: "1",
        title: "Simple Present Tense",
        author: "Jane Doe",
        description: "This lesson will teach you about the usage of simple present tense in daily conversation.",
        xp: 10,
        topics: 5,
        completed: 2,
        tags: ["Grammar", "Beginner"]
    },
    {
        id: "2",
        author: "Fadilah Uhti Rianda",
        title: "Past Continuous Tense",
        description: "Learn how to describe actions that were ongoing in the past.",
        xp: 15,
        topics: 5,
        completed: 3,
        tags: ["Grammar", "Intermediate", "Other"]
    },
    {
        id: "3",
        author: "Jane Doe",
        title: "Future Perfect Tense",
        description: "Understand how to express actions that will be completed in the future.",
        xp: 20,
        topics: 5,
        completed: 0,
        tags: ["Grammar", "Advanced"]
    }
]