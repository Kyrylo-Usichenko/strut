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
import CreateMessageScreen from "./_components/screens/create-message/CreateMessageScreen";
import HelpScreen from "./_components/screens/help/HelpScreen";
import styles from "./styles.module.css";
import { Message } from "./types.module";

type TabType = "Home" | "Messages" | "Help" | "Create Message";

type HelpSupportPopupProps = {
    messages: Message[];
};

export default function HelpSupportPopup({ messages }: HelpSupportPopupProps) {
    const [activeTab, setActiveTab] = useState<TabType>("Home");
    const [prevActiveTab, setPrevActiveTab] = useState<TabType>("Home");

    function changeTab(tab: TabType) {
        console.log(prevActiveTab, activeTab);
        setPrevActiveTab(activeTab);
        setActiveTab(tab);
        console.log(prevActiveTab, activeTab);
    }

    return (
        <div className={styles.main}>
            {activeTab === "Create Message" && (
                <CreateMessageScreen
                    chat={[
                        {
                            id: 1,
                            text: "Sad that strut will be gone :(",
                            date: "2021-10-01",
                            from: "user"
                        },
                        {
                            id: 2,
                            text: `You’ll get replies here and in your email:
✉️ danulo2403@gmail.com\n
The team will be back
🕒 Later today`,
                            date: "2021-10-01",
                            from: "support"
                        }
                    ]}
                    onBackHandler={() => changeTab(prevActiveTab)}
                />
            )}
            <div className={styles.content}>
                {activeTab === "Home" && (
                    <HomeScreen
                        name="Alexander"
                        onMessageClick={() => changeTab("Create Message")}
                        onSearchClick={() => changeTab("Help")}
                        recentMessage={messages[0]}
                    />
                )}
                {activeTab === "Messages" && (
                    <MessagesScreen messages={messages} onSendMessageClick={() => changeTab("Create Message")} />
                )}
                {activeTab === "Help" && <HelpScreen />}
            </div>
            {activeTab != "Create Message" && (
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
                        onClick={() => changeTab("Help")}
                        active={activeTab === "Help"}
                    />
                </div>
            )}
        </div>
    );
}
