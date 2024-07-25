"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./KanbanItemHeader.module.css";
import StageIconMenu from "~/components/shared/stage-icon-menu/StageIconMenu";
import PlusIcon from '~/components/icons/PlusIcon';
import ThreeDotsIcon from '~/components/icons/ThreeDotsIcon'

type Props = {
    icon: React.ReactElement;
    title?: string;
    number: number;
    color: string
};

export default function KanbanItemHeader({ icon, title = "Untilted", number, color }: Props) {
    const [inputValue, setInputValue] = useState<string>(title);
    const [isInputActive, setIsInputActive] = useState<boolean>(false);
    const [isStageMenuOpened, setIsStageMenuOpened] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const stageMenuRef = useRef<HTMLDivElement>(null);

    function handleClickOutside(event: MouseEvent) {
        if (
            inputRef.current && !inputRef.current.contains(event.target as Node) ||
            stageMenuRef.current && !stageMenuRef.current.contains(event.target as Node)
        ) {
            setIsInputActive(false);
            setIsStageMenuOpened(false);
        }
    }

    useEffect(() => {
        if (isInputActive || isStageMenuOpened) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isInputActive, isStageMenuOpened]);

    return (
        <div className={styles.container}>
            <button className={styles.iconBtn} onClick={() => setIsStageMenuOpened(true)} style={{color: color}}>
                {icon}
            </button>
            {isStageMenuOpened && (
                <div ref={stageMenuRef} className={styles.stageMenu}>
                    <StageIconMenu />
                </div>
            )}
            <input
                ref={inputRef}
                className={isInputActive ? styles.activeInput : styles.input}
                type="text"
                name="title"
                id="title"
                value={inputValue}
                placeholder="Untilted"
                onChange={(e) => setInputValue(e.target.value)}
                onClick={() => setIsInputActive(true)}
            />
            {!isInputActive && (
                <div className={styles.hidden}>
                    <p className={styles.number}>{number}</p>
                    <div className={styles.plusIcon}><PlusIcon/></div>
                    <div className={styles.treeDotsIcon}><ThreeDotsIcon/></div>
                </div>
            )}
        </div>
    );
}
