'use client';

import { useState } from "react";
import styles from "./KanbanViewBottomItem.module.css";
import LabelMenu from "~/app/label-menu/page";
import SmallChekIcon from "~/components/icons/SmallChekIcon"

type Props = {
    icon: React.ReactElement;
    header: string;
    data: string[];
    color: string
};

export default function KanbanViewBottomItem({ icon, header, data, color }: Props) {
    const [isChekIconActive, setIsChekIconActive] = useState<boolean>(false);

    function hahdleCheckIcon(){
        setIsChekIconActive(!isChekIconActive);
    }

    return (
        <div className={`${isChekIconActive ? styles.containerActive : styles.container}`}>
            <a className={`${isChekIconActive ? styles.chekedIconActive : styles.chekedIcon}`} onClick={hahdleCheckIcon}><SmallChekIcon/></a>
            <div className={styles.tag}>
                <LabelMenu />
            </div>
            <h3 className={styles.title}>{header}</h3>
            {data.map((item, index) => (
                <p key={index} className={styles.item}>
                    {item}
                </p>
            ))}
            <div className={styles.icon} style={{color: color}}>{icon}</div>
        </div>
    );
}