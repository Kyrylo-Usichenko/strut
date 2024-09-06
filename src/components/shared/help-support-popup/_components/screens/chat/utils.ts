import { ChatMessage } from "../../../types.module";

function groupBySender(chat: ChatMessage[]): {
    system: number[];
    interlocutor: number[];
    user: number[];
    all: number[];
    leftSided: number[];
} {
    const groupEndIds = [{ from: chat[chat.length - 1].from, id: chat[chat.length - 1].id }];
    let lastSentFrom = chat[chat.length - 1].from;
    for (let i = chat.length - 1; i >= 0; i--) {
        if (chat[i].from !== lastSentFrom) {
            groupEndIds.push({ from: chat[i].from, id: chat[i].id });
            lastSentFrom = chat[i].from;
        }
    }
    const systemGroupEndIds = groupEndIds.filter((message) => message.from === "system").map((message) => message.id);
    const interlocutorGroupEndIds = groupEndIds
        .filter((message) => message.from === "interlocutor")
        .map((message) => message.id);
    const userGroupEndIds = groupEndIds.filter((message) => message.from === "user").map((message) => message.id);
    return {
        system: systemGroupEndIds,
        interlocutor: interlocutorGroupEndIds,
        user: userGroupEndIds,
        all: [...systemGroupEndIds, ...userGroupEndIds, ...interlocutorGroupEndIds],
        leftSided: [...systemGroupEndIds, ...interlocutorGroupEndIds]
    };
}

function groupByDate(chat: ChatMessage[]): { date: string; id: number }[] {
    const groupedEndIds = [{ date: chat[0].date, id: chat[0].id }];
    let lastDate = chat[0].date;
    for (let i = 1; i < chat.length; i++) {
        if (chat[i].date !== lastDate) {
            groupedEndIds.push({ date: chat[i].date, id: chat[i].id });
            lastDate = chat[i].date;
        }
    }
    return groupedEndIds;
}

function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const currentYear = new Date().getFullYear();
    const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric" };
    if (date.getFullYear() !== currentYear) {
        options.year = "numeric";
    }

    return date.toLocaleDateString("en-US", options);
}

export { groupBySender, groupByDate, formatDate };
