"use client";

import { useState } from "react";

import AvatarIcon from "~/components/icons/AvatarIcon";
import BlankIcon from "~/components/icons/BlankIcon";
import CalendarIcon from "~/components/icons/CalendarIcon";
import CheckedCircleIcon from "~/components/icons/CheckedCircleIcon";
import CircleHalfIcon from "~/components/icons/CircleHalfIcon";
import CircleQuaterIcon from "~/components/icons/CircleQuaterIcon";
import CircleWithStarIcon from "~/components/icons/CircleWithStarIcon";
import ClockIcon from "~/components/icons/ClockIcon";
import CopiedBlankIcon from "~/components/icons/CopiedBlankIcon";
import DashedCircleIcon from "~/components/icons/DashedCircleIcon";
import FaceIcon from "~/components/icons/FaceIcon";
import HeartIcon from "~/components/icons/HeartIcon";
import LaptopIcon from "~/components/icons/LaptopIcon";
import ShopBagIcon from "~/components/icons/ShopBagIcon";
import StarIcon from "~/components/icons/StarIcon";
import TwoPagesIcon from "~/components/icons/TwoPagesIcon";
import СircleIcon from "~/components/icons/СircleIcon";
import СircleWithoutQueaterIcon from "~/components/icons/СircleWithoutQueaterIcon";
import styles from "./StageIconMenu.module.css";

const icons: React.ComponentType[] = [
    DashedCircleIcon,
    СircleIcon,
    CircleQuaterIcon,
    CircleHalfIcon,
    СircleWithoutQueaterIcon,
    CheckedCircleIcon,
    CircleWithStarIcon,
    BlankIcon,
    FaceIcon,
    AvatarIcon,
    LaptopIcon,
    ShopBagIcon,
    TwoPagesIcon,
    CalendarIcon,
    HeartIcon,
    ClockIcon,
    CopiedBlankIcon,
    StarIcon
];

const colors: string[] = [
    "rgba(255, 255, 255, 0.5)",
    "rgb(153, 92, 191)",
    "rgb(188, 87, 73)",
    "rgb(255, 181, 70)",
    "rgb(92, 106, 228)",
    "rgb(1, 114, 100)"
];

export default function StageIconMenu() {
    const [color, setColor] = useState<string>("rgba(255, 255, 255, 0.5)");
    const [activeIndex, setActiveIndex] = useState<number>();
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    function handleColorClick(colorItem: string, index: number) {
        setColor(colorItem);
        setActiveIndex(index);
    }

    return (
        <div className={styles.div}>
            <div className={styles.selectColor}>
                {colors.map((colorItem, index) => {
                    return (
                        <button
                            key={index}
                            className={styles.border}
                            style={{
                                border:
                                    activeIndex === index || hoverIndex === index ? `2px solid ${colorItem}` : "none"
                            }}
                            onClick={() => handleColorClick(colorItem, index)}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <div
                                className={styles.circle}
                                style={{
                                    background: colorItem
                                }}
                            ></div>
                        </button>
                    );
                })}
            </div>
            <ul className={styles.list} style={{ color }}>
                {icons.map((IconComponent, index) => {
                    return (
                        <li className={styles.item} key={index}>
                            <IconComponent />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
