import React from "react";
import { SidebarItem } from "./SidebarItem";
import SearchIcon from "~/components/icons/SearchIcon";
import InboxIcon from "~/components/icons/InboxIcon";
import FolderIcon from "~/components/icons/FolderIcon";
import ListAllIcon from "~/components/icons/ListAllIcon";
import PlusIcon from "~/components/icons/PlusIcon";
import BullHornIcon from "~/components/icons/BullHornIcon";
import InfoIcon from "~/components/icons/InfoIcon";
import PersonIcon from "~/components/icons/PersonIcon";
import styles from "./sidebar.module.css";
import { Tooltip } from "../../Tooltip/Tooltip";

type Props = {
    isOpen: boolean;
}

function Sidebar({ isOpen }: Props) {
    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
            <div className={styles.top}>
                <button className={styles.header}>
                    <Tooltip label="Account" direction="bottom" display="flex">
                        <PersonIcon width={20} height={20} />
                    </Tooltip>
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
