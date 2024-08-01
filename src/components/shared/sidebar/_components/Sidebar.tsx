"use client";

import BullHornIcon from "~/components/icons/BullHornIcon";
import FolderIcon from "~/components/icons/FolderIcon";
import InboxIcon from "~/components/icons/InboxIcon";
import InfoIcon from "~/components/icons/InfoIcon";
import ListAllIcon from "~/components/icons/ListAllIcon";
import PlusIcon from "~/components/icons/PlusIcon";
import SearchIcon from "~/components/icons/SearchIcon";
import { Tooltip } from "../../Tooltip/Tooltip";
import { SidebarItem } from "./SidebarItem";
import styles from "./sidebar.module.css";
import AccountButton from "../../account/AccountButton";
import SearchInput from "~/app/search-input/page";
import { useState } from "react";

type Props = {
    isOpen: boolean;
};

function Sidebar({ isOpen }: Props) {
    const [isSearchActive, setIsSearchActive] = useState(false);

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
            <div className={styles.top}>
                <div className={styles.header}>
                    <AccountButton />
                </div>
                <div className={styles.items}>
                    <SearchInput onInputActiveChange={setIsSearchActive} />
                    {!isSearchActive && <SidebarItem label="Inbox" icon={<InboxIcon />} link="" />}
                </div>
                {!isSearchActive && (
                    <div className={styles.divider}>
                        <span>Workspaces</span>
                    </div>
                )}
                {!isSearchActive && (
                    <div className={styles.items}>
                        <SidebarItem label="Getting Started Guide" icon={<FolderIcon />} link="" hasMenu={true} />
                        <SidebarItem label="Browse all" icon={<ListAllIcon />} link="" />
                        <SidebarItem
                            label="Add a workspace"
                            icon={<PlusIcon width={8} height={8} className={styles.plusIcon} />}
                            link=""
                        />
                    </div>
                )}
            </div>
            <div className={`${styles.items} ${styles.bottom}`}>
                <SidebarItem label="Brand" icon={<BullHornIcon />} link="" />
                <SidebarItem label="Help & Support" icon={<InfoIcon />} link="" />
            </div>
        </div>
    );
}

export { Sidebar };
