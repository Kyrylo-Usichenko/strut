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
    HelpScreenProps,
    TabType,
    HelpSupportPopupProps
} from "./types.module";

export default function HelpSupportPopup({ messagesData, collectionsData }: HelpSupportPopupProps) {
    const [tabs, setTabs] = useState<{ active: TabType; prev: TabType }>({ active: "Home", prev: "Home" });
    const [currentNotificationsCount, setNotificationsCount] = useState<number | undefined>(
        messagesData.filter((m) => m.newMessages).length
    );
    const [chatProps, setChatProps] = useState<ChatScreenProps>({
        chat: [],
        onBackHandler: returnToPreviousTab,
        onCloseHandler: () => {}
    });
    const [homeProps, setHomeProps] = useState<HomeScreenProps>({
        name: "Alexander",
        onMessageClick: () => handleSendMessageClick(),
        onSearchClick: () => {
            changeTab("Help");
            setHelpProps({ ...helpProps, autoFocus: true });
        },
        recentMessage: messagesData[0],
        onRecentMessageClick: () => handleSendMessageClick(messagesData[0].chat)
    });
    const [messagesProps, setMessagesProps] = useState<MessagesScreenProps>({
        messages: messagesData,
        onSendMessageClick: () => handleSendMessageClick([]),
        onChatClick: (message) => handleSendMessageClick(message.chat)
    });
    const [helpProps, setHelpProps] = useState<HelpScreenProps>({
        collections: collectionsData,
        autoFocus: false,
        searchValue: "",
        activeCollection: null,
        setSearchValue: (value: string) => {
            setHelpProps({ ...helpProps, searchValue: value });
        },
        setActiveCollection: (collection: Collection | null) => {
            setHelpProps({ ...helpProps, activeCollection: collection });
        },
        onSendMessageClick: () => handleSendMessageClick()
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
                        onClick={() => {
                            changeTab("Messages");
                            setNotificationsCount(undefined);
                        }}
                        active={tabs.active === "Messages"}
                        notificationsCount={currentNotificationsCount}
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
