import { ReactNode } from "react";

export type Message = {
    imagePath?: string;
    name: string;
    messagePreview: string;
    timeAgo: string;
    chat?: ChatMessage[];
};

export type ChatMessage = {
    id: number;
    text: string;
    date: string;
    time: string;
    from: "user" | "support";
};

export type ChatScreenProps = {
    chat?: ChatMessage[];
    onBackHandler?: () => void;
    onCloseHandler?: () => void;
};

export type HomeScreenProps = {
    name: string;
    recentMessage?: Message;
    onMessageClick?: () => void;
    onSearchClick?: () => void;
    onRecentMessageClick?: () => void;
};

export type MessagesScreenProps = {
    messages?: Message[];
    onSendMessageClick?: () => void;
    onChatClick?: (message: Message) => void;
};

export type Collection = {
    id: string;
    title: string;
    description: string;
    collectionAmount: number;
    collectionArticles?: string[];
};

export type HelpScreenProps = {
    collections: Collection[];
    autoFocus?: boolean;
};
