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
        from: "support" as any
    }
];

const testChatData2 = [
    {
        id: 1,
        text: "Pummel Party go?",
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
        from: "support" as any
    }
];

const testMessagesData = [
    {
        imagePath: "https://static.intercomassets.com/avatars/6691399/square_128/kyle-thacker-1705882183.jpg",
        name: "Strut",
        messagePreview: "Hey, how are you?",
        timeAgo: "2h ago",
        chat: testChatData,
        newMessages: true
    },
    {
        name: "Denis",
        messagePreview: "Pummel Party go?",
        timeAgo: "3w ago",
        chat: testChatData2,
        newMessages: true,
        chatMainText: "This is sample text",
        chatSubText: "This is sample subtext"
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
