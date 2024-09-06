import { ChatMessage, Message } from "../types.module";

function groupBySender(chat: ChatMessage[]): {
    system: number[];
    interlocutor: number[];
    user: number[];
    all: number[];
    leftSided: number[];
} {
    if (chat.length === 0) return { system: [], interlocutor: [], user: [], all: [], leftSided: [] };
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
    if (chat.length === 0) return [];
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

function timeAgo(dateStr: string, timeStr: string): string {
    const [year, month, day] = dateStr.split("-").map(Number);
    const [time, period] = timeStr.split(" ");
    const [hours, minutes] = time.split(":").map(Number);

    let adjustedHours = period.toLowerCase() === "pm" && hours !== 12 ? hours + 12 : hours;
    if (period.toLowerCase() === "am" && hours === 12) adjustedHours = 0;
    const providedDate = new Date(year, month - 1, day, adjustedHours, minutes);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - providedDate.getTime()) / 1000);

    const secondsInMinute = 60;
    const secondsInHour = 60 * secondsInMinute;
    const secondsInDay = 24 * secondsInHour;
    const secondsInMonth = 30 * secondsInDay;
    const secondsInYear = 12 * secondsInMonth;

    if (diffInSeconds < secondsInMinute) {
        return `${diffInSeconds} second${diffInSeconds !== 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < secondsInHour) {
        const minutes = Math.floor(diffInSeconds / secondsInMinute);
        return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < secondsInDay) {
        const hours = Math.floor(diffInSeconds / secondsInHour);
        return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < secondsInMonth) {
        const days = Math.floor(diffInSeconds / secondsInDay);
        return `${days} day${days !== 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < secondsInYear) {
        const months = Math.floor(diffInSeconds / secondsInMonth);
        return `${months} month${months !== 1 ? "s" : ""} ago`;
    } else {
        const years = Math.floor(diffInSeconds / secondsInYear);
        return `${years} year${years !== 1 ? "s" : ""} ago`;
    }
}

function sortMessages(a: Message, b: Message) {
    const lastMessageA = a.chat[a.chat.length - 1];
    const lastMessageB = b.chat[b.chat.length - 1];

    const [yearA, monthA, dayA] = lastMessageA.date.split("-").map(Number);
    const [timeA, periodA] = lastMessageA.time.split(" ");
    const [hoursA, minutesA] = timeA.split(":").map(Number);

    const [yearB, monthB, dayB] = lastMessageB.date.split("-").map(Number);
    const [timeB, periodB] = lastMessageB.time.split(" ");
    const [hoursB, minutesB] = timeB.split(":").map(Number);

    let adjustedHoursA = periodA.toLowerCase() === "pm" && hoursA !== 12 ? hoursA + 12 : hoursA;
    if (periodA.toLowerCase() === "am" && hoursA === 12) adjustedHoursA = 0;
    const providedDateA = new Date(yearA, monthA - 1, dayA, adjustedHoursA, minutesA);

    let adjustedHoursB = periodB.toLowerCase() === "pm" && hoursB !== 12 ? hoursB + 12 : hoursB;
    if (periodB.toLowerCase() === "am" && hoursB === 12) adjustedHoursB = 0;
    const providedDateB = new Date(yearB, monthB - 1, dayB, adjustedHoursB, minutesB);

    const diffInSeconds = providedDateA.getTime() - providedDateB.getTime();

    return diffInSeconds > 0 ? -1 : 1;
}

export { groupBySender, groupByDate, formatDate, timeAgo, sortMessages };
