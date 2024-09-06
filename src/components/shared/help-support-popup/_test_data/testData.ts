const testChatData = [
    {
        id: 1,
        text: "Sad that strut will be gone :(",
        date: "2021-10-01",
        time: "4:00 pm",
        from: "user" as any
    },
    {
        id: 2,
        text: `You’ll get replies here and in your email:
✉️ danulo2403@gmail.com\n
The team will be back
🕒 Later today`,
        date: "2021-10-01",
        time: "4:00 pm",
        from: "system" as any
    }
];

const testChatData2 = [
    {
        id: 1,
        text: "Pummel Party go?",
        date: "2021-08-05",
        time: "4:00 pm",
        from: "user" as any
    },
    {
        id: 2,
        text: `Nah not today`,
        date: "2024-08-01",
        time: "5:00 pm",
        from: "interlocutor" as any
    },
    {
        id: 3,
        text: `Maybe tomorrow?`,
        date: "2024-08-01",
        time: "5:00 pm",
        from: "interlocutor" as any
    },
    {
        id: 4,
        text: `Maybe go **** yourself then?`,
        date: "2024-08-01",
        time: "6:02 pm",
        from: "user" as any
    },
    {
        id: 5,
        text: `Maybe you should **** off then? I'm tired of this toxicity so I'm writing a long message to make it look like I'm the good guy and also test long messages!`,
        date: "2024-08-01",
        time: "6:02 pm",
        from: "interlocutor" as any
    },
    {
        id: 6,
        text: `The user has blocked you`,
        date: "2024-08-01",
        time: "6:03 pm",
        from: "system" as any
    },
    {
        id: 7,
        text: `You can no longer send messages to this user`,
        date: "2024-08-01",
        time: "6:03 pm",
        from: "system" as any,
        seen: false
    },
    {
        id: 8,
        text: `Yes I can!`,
        date: "2024-08-01",
        time: "6:03 pm",
        from: "user" as any,
        seen: false
    }
];

const testChatData3 = [
    {
        id: 1,
        text: "Hello",
        date: "2021-10-01",
        time: "4:00 pm",
        from: "user" as any
    },
    {
        id: 2,
        text: "Hi! How can I help you?",
        date: "2021-10-01",
        time: "4:00 pm",
        from: "interlocutor" as any
    }
];

const testMessagesData = [
    {
        imagePath: "https://static.intercomassets.com/avatars/6691399/square_128/kyle-thacker-1705882183.jpg",
        name: "Strut",
        chat: testChatData,
        newMessages: true
    },
    {
        name: "Jordan",
        chat: testChatData2,
        chatMainText: "This is sad story",
        chatSubText: "Maybe even dramatic"
    },
    {
        name: "Ms. Smith",
        chat: testChatData3,
        chatMainText: "Some other story",
        chatSubText: "Not that dramatic"
    }
];

const testCollectionsData = [
    {
        id: "1",
        title: "Welcome to Strut!",
        description: "A quick hello and intro.",
        collectionAmount: 2,
        collectionArticles: ["Getting Started with Strut!", "Learning the Basics"]
    },
    {
        id: "2",
        title: "Documents",
        description: "Learn how to create, format, and organize Documents.",
        collectionAmount: 5
    },
    {
        id: "3",
        title: "Collection 3",
        description: "Description 3",
        collectionAmount: 15
    },
    {
        id: "4",
        title: "Collection 4",
        description: "Description 4",
        collectionAmount: 20
    }
];

export { testMessagesData, testCollectionsData };
