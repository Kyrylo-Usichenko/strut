export type Message = {
    imagePath?: string;
    name: string;
    chat: ChatMessage[];
    chatMainText?: string;
    chatSubText?: string;
};

export type ChatMessage = {
    id: number;
    text: string;
    date: string;
    time: string;
    from: ChatMessageFromType;
    seen?: boolean;
};

export type ChatMessageFromType = "user" | "interlocutor" | "system";

export type ChatScreenProps = {
    chat?: ChatMessage[];
    chatName?: string;
    chatPhoto?: string;
    chatMainText?: string;
    chatSubText?: string;
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
    searchValue?: string;
    setSearchValue?: (value: string) => void;
    activeCollection?: Collection | null;
    setActiveCollection?: (collection: Collection | null) => void;
    onSendMessageClick?: () => void;
};

export type TabType = "Home" | "Messages" | "Help" | "Chat" | "Collection";

export type HelpSupportPopupProps = {
    messagesData: Message[];
    collectionsData: Collection[];
};
