"use client";

import BullHornIcon from "~/components/icons/BullHornIcon";
import FolderIcon from "~/components/icons/FolderIcon";
import InboxIcon from "~/components/icons/InboxIcon";
import InfoIcon from "~/components/icons/InfoIcon";
import ListAllIcon from "~/components/icons/ListAllIcon";
import PlusIcon from "~/components/icons/PlusIcon";
import { SidebarItem } from "./SidebarItem";
import AccountButton from "../../account/AccountButton";
import { SearchInput } from "~/components/shared/search-input/SearchInput";
import { useState } from "react";
import styles from "./sidebar.module.css";

type Props = {
    isOpen: boolean;
};

function Sidebar({ isOpen }: Props) {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [activeItem, setActiveItem] = useState<string>("gettingStarted");

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
            <div className={styles.top}>
                <div className={styles.header}>
                    <AccountButton />
                </div>
                <div className={styles.items}>
                    <SearchInput onInputActiveChange={setIsSearchActive} />
                    {!isSearchActive && (
                        <SidebarItem
                            key="inbox"
                            label="Inbox"
                            icon={<InboxIcon />}
                            link=""
                            isActive={activeItem === "inbox"}
                            onClick={() => setActiveItem("inbox")}
                        />
                    )}
                </div>
                {!isSearchActive && (
                    <div className={styles.divider}>
                        <span>Workspaces</span>
                    </div>
                )}
                {!isSearchActive && (
                    <div className={styles.items}>
                        <SidebarItem
                            key="gettingStarted"
                            label="Getting Started Guide"
                            icon={<FolderIcon />}
                            link=""
                            hasMenu={true}
                            isActive={activeItem === "gettingStarted"}
                            onClick={() => setActiveItem("gettingStarted")}
                        />
                        <SidebarItem
                            key="browseAll"
                            label="Browse all"
                            icon={<ListAllIcon />}
                            link=""
                            isActive={activeItem === "browseAll"}
                            onClick={() => setActiveItem("browseAll")}
                        />
                        <SidebarItem
                            label="Add a workspace"
                            icon={<PlusIcon width={8} height={8} className={styles.plusIcon} />}
                            link=""
                        />
                    </div>
                )}
            </div>
            {!isSearchActive && (
                <div className={`${styles.items} ${styles.bottom}`}>
                    <SidebarItem
                        key="brand"
                        label="Brand"
                        icon={<BullHornIcon />}
                        link=""
                        isActive={activeItem === "brand"}
                        onClick={() => setActiveItem("brand")}
                    />
                    <SidebarItem label="Help & Support" icon={<InfoIcon />} link="" />
                </div>
            )}
        </div>
    );
}

export { Sidebar };
