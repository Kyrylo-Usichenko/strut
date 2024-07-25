import BullHornIcon from "~/components/icons/BullHornIcon";
import FolderIcon from "~/components/icons/FolderIcon";
import InboxIcon from "~/components/icons/InboxIcon";
import InfoIcon from "~/components/icons/InfoIcon";
import ListAllIcon from "~/components/icons/ListAllIcon";

import AvatarIcon from "~/components/icons/AvatarIcon";
import PlusIcon from "~/components/icons/PlusIcon";
import SearchIcon from "~/components/icons/SearchIcon";
import { Tooltip } from "../../Tooltip/Tooltip";
import styles from "./sidebar.module.css";
import { SidebarItem } from "./SidebarItem";

type Props = {
    isOpen: boolean;
};

function Sidebar({ isOpen }: Props) {
    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
            <div className={styles.top}>
                <button className={styles.header}>
                    <AvatarIcon />
                </button>
                <div className={styles.items}>
                    <Tooltip label="Search" direction="right" keys={["CTRL", "/"]}>
                        <SidebarItem label="Search" icon={<SearchIcon />} link="" />
                    </Tooltip>
                    <SidebarItem label="Inbox" icon={<InboxIcon />} link="" />
                </div>
                <div className={styles.divider}>
                    <span>Workspaces</span>
                </div>
                <div className={styles.items}>
                    <SidebarItem label="Getting Started Guide" icon={<FolderIcon />} link="" hasMenu={true} />
                    <SidebarItem label="Browse all" icon={<ListAllIcon />} link="" />
                    <SidebarItem label="Add a workspace" icon={<PlusIcon />} link="" />
                </div>
            </div>
            <div className={`${styles.items} ${styles.bottom}`}>
                <SidebarItem label="Brand" icon={<BullHornIcon />} link="" />
                <SidebarItem label="Help & Support" icon={<InfoIcon />} link="" />
            </div>
        </div>
    );
}

export { Sidebar };
