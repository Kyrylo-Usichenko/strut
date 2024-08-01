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
    hasMenu?: boolean;
};

function SidebarItem({ icon, label, link, hasMenu = false }: Props) {
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
                        <ButtonIconOnly
                            onClick={handleButtonClick}
                            icon={<ThreeDotsIcon />}
                            tooltipLabel="More Options"
                            tooltipDirection="right"
                            tooltipVisible={!isVisible}
                            className={styles.button}
                        ></ButtonIconOnly>
                        <PopupMenu items={items} direction="right" visible={isVisible} />
                    </div>
                )}
            </div>
        </Link>
    );
}

export { SidebarItem };
