import React from "react";
import Link from "next/link";
import { PopupMenu } from "../../PopupMenu/PopupMenu";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import { useVisible } from "../../PopupMenu/utils/useVisible";
import { items } from "../../PopupMenu/PopupMenuWithButton";
import ButtonIconOnly from "../../buttonIconOnly/ButtonIconOnly";
import styles from "./sidebar.module.css";

type Props = {
    icon: JSX.Element;
    label: string;
    link: string;
    isActive?: boolean;
    hasMenu?: boolean;
    onClick?: () => void;
};

function SidebarItem({ icon, label, link, isActive = false, hasMenu = false, onClick = () => {} }: Props) {
    const { isVisible, setIsVisible, ref } = useVisible(false);

    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <Link href={link} className={isVisible ? styles.open : ""}>
            <div className={`${styles.item} ${isActive ? styles.active : ""}`} onClick={onClick}>
                <div className={styles.left}>
                    {icon}
                    <span>{label}</span>
                </div>
                {hasMenu && (
                    <div className={styles.right} ref={ref}>
                        <ButtonIconOnly
                            onClick={handleButtonClick}
                            icon={<ThreeDotsIcon />}
                            tooltipLabel="More Options"
                            tooltipDirection="right"
                            tooltipVisible={!isVisible}
                            className={styles.button}
                        />
                        <PopupMenu items={items} direction="right" visible={isVisible} />
                    </div>
                )}
            </div>
        </Link>
    );
}

export { SidebarItem };
