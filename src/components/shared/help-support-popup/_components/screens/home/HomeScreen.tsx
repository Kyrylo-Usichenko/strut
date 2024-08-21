import styles from "./HomeScreen.module.css";
import logo from "../../../_images/logo.png";
import dude from "../../../_images/dude.png";
import Image from "next/image";
import NavigationButton from "../../buttons/navigation-button/NavigationButton";
import HomeButton from "../../buttons/home-button/HomeButton";
import SendMessageIcon from "~/components/icons/HelpSupportSendMessageIcon";
import SearchIcon from "~/components/icons/HelpSupportSearchIcon";
import { HomeScreenProps } from "../../../types.module";

export default function HomeScreen({
    name,
    recentMessage,
    onMessageClick,
    onSearchClick,
    onRecentMessageClick
}: HomeScreenProps) {
    return (
        <div className={styles.homeWrapper}>
            <div className={styles.headerWrapper}>
                <div className={styles.header}>
                    <div className={styles.imageDiv}>
                        <Image
                            src={logo}
                            alt="Strut logo"
                            className={styles.logo}
                            width={32}
                            height={32}
                            unoptimized={true}
                        />
                        <Image
                            src={dude}
                            alt="Kyle Thacker"
                            className={styles.dude}
                            width={40}
                            height={40}
                            unoptimized={true}
                        />
                    </div>
                    <div className={styles.textDiv}>
                        <span className={styles.h1}>Hi {name} 👋</span>
                        <span className={styles.h2}>{`We'd love to hear your feedback!`}</span>
                    </div>
                </div>
            </div>
            <div className={styles.buttonDivWrapper}>
                <div className={styles.buttonDiv}>
                    {recentMessage && (
                        <HomeButton mainText="Recent message" message={recentMessage} onClick={onRecentMessageClick} />
                    )}
                    <HomeButton
                        mainText="Send us a message"
                        subText="We'll reply as soon as we can"
                        icon={<SendMessageIcon />}
                        onClick={onMessageClick}
                    />
                    <HomeButton mainText="Search for help" icon={<SearchIcon />} onClick={onSearchClick} />
                </div>
            </div>
            <NavigationButton />
        </div>
    );
}
