import { useState } from "react";
import MenuButton from "./_components/buttons/menu-button/MenuButton";
import HelpSupportHomeIcon from "~/components/icons/HelpSupportHomeIcon";
import HelpSupportHomeActiveIcon from "~/components/icons/HelpSupportHomeActiveIcon";
import HelpSupportMessagesIcon from "~/components/icons/HelpSupportMessagesIcon";
import HelpSupportMessagesActiveIcon from "~/components/icons/HelpSupportMessagesActiveIcon";
import HelpSupportHelpIcon from "~/components/icons/HelpSupportHelpIcon";
import HelpSupportHelpActiveIcon from "~/components/icons/HelpSupportHelpActiveIcon";
import HomeScreen from "./_components/screens/home/HomeScreen";
import MessagesScreen from "./_components/screens/messages/MessagesScreen";
import ChatScreen from "./_components/screens/chat/ChatScreen";
import HelpScreen from "./_components/screens/help/HelpScreen";
import styles from "./styles.module.css";
import {
    ChatScreenProps,
    HomeScreenProps,
    MessagesScreenProps,
    ChatMessage,
    Collection,
    HelpScreenProps
} from "./types.module";

type TabType = "Home" | "Messages" | "Help" | "Chat" | "Collection";

export default function HelpSupportPopup() {
    const [tabs, setTabs] = useState<{ active: TabType; prev: TabType }>({ active: "Home", prev: "Home" });
    const [chatProps, setChatProps] = useState<ChatScreenProps>({
        chat: [],
        onBackHandler: returnToPreviousTab,
        onCloseHandler: () => {}
    });
    const [homeProps, setHomeProps] = useState<HomeScreenProps>({
        name: "Alexander",
        onMessageClick: () => {
            changeTab("Chat");
            setChatProps({ ...chatProps, chat: [] });
        },
        onSearchClick: () => {
            changeTab("Help");
            setHelpProps({ ...helpProps, autoFocus: true });
        },
        recentMessage: testMessagesData[0],
        onRecentMessageClick: () => {
            changeTab("Chat");
            setChatProps({ ...chatProps, chat: testChatData });
        }
    });
    const [messagesProps, setMessagesProps] = useState<MessagesScreenProps>({
        messages: testMessagesData,
        onSendMessageClick: () => handleSendMessageClick([]),
        onChatClick: (message) => handleSendMessageClick(message.chat)
    });
    const [helpProps, setHelpProps] = useState<HelpScreenProps>({
        collections: testCollectionsData,
        autoFocus: false,
        searchValue: "",
        activeCollection: null,
        setSearchValue: (value: string) => {
            setHelpProps({ ...helpProps, searchValue: value });
        },
        setActiveCollection: (collection: Collection | null) => {
            setHelpProps({ ...helpProps, activeCollection: collection });
        }
    });

    function changeTab(tab: TabType) {
        setTabs((prevState) => ({ active: tab, prev: prevState.active }));
    }

    function returnToPreviousTab() {
        setTabs((prevState) => ({ active: prevState.prev, prev: prevState.active }));
    }

    function handleSendMessageClick(chat?: ChatMessage[]) {
        setTabs((prevState) => ({ active: "Chat", prev: prevState.active }));

        setChatProps({
            ...chatProps,
            chat: chat || [],
            onBackHandler: returnToPreviousTab
        });
    }

    return (
        <div className={styles.main}>
            {tabs.active === "Chat" && <ChatScreen {...chatProps} />}
            <div className={styles.content}>
                {tabs.active === "Home" && <HomeScreen {...homeProps} />}
                {tabs.active === "Messages" && <MessagesScreen {...messagesProps} />}
                {tabs.active === "Help" && <HelpScreen {...helpProps} />}
            </div>
            {tabs.active != "Chat" && (
                <div className={styles.bottomMenu}>
                    <MenuButton
                        icon={<HelpSupportHomeIcon />}
                        activeIcon={<HelpSupportHomeActiveIcon />}
                        text="Home"
                        onClick={() => changeTab("Home")}
                        active={tabs.active === "Home"}
                    />
                    <MenuButton
                        icon={<HelpSupportMessagesIcon />}
                        activeIcon={<HelpSupportMessagesActiveIcon />}
                        text="Messages"
                        onClick={() => changeTab("Messages")}
                        active={tabs.active === "Messages"}
                    />
                    <MenuButton
                        icon={<HelpSupportHelpIcon />}
                        activeIcon={<HelpSupportHelpActiveIcon />}
                        text="Help"
                        onClick={() => {
                            changeTab("Help");
                            setHelpProps({ ...helpProps, autoFocus: false });
                        }}
                        active={tabs.active === "Help"}
                    />
                </div>
            )}
        </div>
    );
}

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
        name: "Alexander",
        messagePreview: "Hey, how are you?",
        timeAgo: "2h ago",
        chat: testChatData
    },
    {
        name: "Denis",
        messagePreview: "Pummel Party go?",
        timeAgo: "3w ago",
        chat: testChatData2
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
