import React from "react";
import Link from "next/link";
import { PopupMenuComponent } from "../../PopupMenu/PopupMenuComponent";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import { useVisible } from "../../PopupMenu/utils/useVisible";
import ExportIcon from "~/components/icons/ExportIcon";
import EyeIcon from "~/components/icons/EyeIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import DuplicateIcon from "~/components/icons/DuplicateIcon";
import styles from "./sidebar.module.css";
import { Tooltip } from "../../Tooltip/Tooltip";

type Props = {
    icon: JSX.Element;
    label: string;
    link: string;
    hasMenu?: boolean;
}

function SidebarItem({ icon, label, link, hasMenu = false }: Props) {
    const items = [
        { icon: <ExportIcon />, label: "Export to Markdown", link: "" },
        { icon: <EyeIcon />, label: "Hide from Sidebar", link: "" },
        { icon: <TrashBinIcon />, label: "Delete Workspace", link: "" },
        { icon: <DuplicateIcon />, label: "Duplicate Workspace", link: "" }
    ];
    const { isVisible, setIsVisible, ref } = useVisible(false);

    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <Link href={link} className={isVisible ? styles.open : ""}>
            <div className={styles.item}>
                <div className={styles.left}>
                    {icon}
                    <span>{label}</span>
                </div>
                {hasMenu && (
                    <div className={styles.right} ref={ref}>
                        <Tooltip label="More Options" direction="right" visible={!isVisible}>
                            <button onClick={handleButtonClick} className={styles.button}>
                                <ThreeDotsIcon />
                            </button>
                        </Tooltip>
                        <PopupMenuComponent items={items} direction="right" visible={isVisible} />
                    </div>
                )}
            </div>
        </Link>
    );
}

export { SidebarItem };
