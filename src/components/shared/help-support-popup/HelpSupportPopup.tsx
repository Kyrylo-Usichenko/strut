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
import { ChatScreenProps, HomeScreenProps, MessagesScreenProps } from "./types.module";

type TabType = "Home" | "Messages" | "Help" | "Chat" | "Collection";

export default function HelpSupportPopup() {
    const [activeTab, setActiveTab] = useState<TabType>("Home");
    const [prevActiveTab, setPrevActiveTab] = useState<TabType>("Home");
    const [chatProps, setChatProps] = useState<ChatScreenProps>({
        chat: [],
        onBackHandler: () => changeTab(prevActiveTab),
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
        onSendMessageClick: () => {
            changeTab("Chat");
            setChatProps({ ...chatProps, chat: [] });
        },
        onChatClick: (message) => {
            changeTab("Chat");
            setChatProps({ ...chatProps, chat: message.chat, onBackHandler: () => changeTab(prevActiveTab) });
        }
    });
    const [helpProps, setHelpProps] = useState({ collections: testCollectionsData, autoFocus: false });

    function changeTab(tab: TabType) {
        setPrevActiveTab(activeTab);
        setActiveTab(tab);
    }

    return (
        <div className={styles.main}>
            {activeTab === "Chat" && <ChatScreen {...chatProps} />}
            <div className={styles.content}>
                {activeTab === "Home" && <HomeScreen {...homeProps} />}
                {activeTab === "Messages" && <MessagesScreen {...messagesProps} />}
                {activeTab === "Help" && <HelpScreen {...helpProps} />}
            </div>
            {activeTab != "Chat" && (
                <div className={styles.bottomMenu}>
                    <MenuButton
                        icon={<HelpSupportHomeIcon />}
                        activeIcon={<HelpSupportHomeActiveIcon />}
                        text="Home"
                        onClick={() => changeTab("Home")}
                        active={activeTab === "Home"}
                    />
                    <MenuButton
                        icon={<HelpSupportMessagesIcon />}
                        activeIcon={<HelpSupportMessagesActiveIcon />}
                        text="Messages"
                        onClick={() => changeTab("Messages")}
                        active={activeTab === "Messages"}
                    />
                    <MenuButton
                        icon={<HelpSupportHelpIcon />}
                        activeIcon={<HelpSupportHelpActiveIcon />}
                        text="Help"
                        onClick={() => {
                            changeTab("Help");
                            setHelpProps({ ...helpProps, autoFocus: false });
                        }}
                        active={activeTab === "Help"}
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
