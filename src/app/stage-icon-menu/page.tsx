"use client";

import { useState } from "react";
import styles from "./StageIconMenu.module.css";
import DashedCircleIcon from "../../components/icons/DashedCircleIcon";
import СircleIcon from "../../components/icons/СircleIcon";
import CircleQuaterIcon from "../../components/icons/CircleQuaterIcon";
import CircleHalfIcon from "../../components/icons/CircleHalfIcon";
import СircleWithoutQueaterIcon from "../../components/icons/СircleWithoutQueaterIcon";
import CheckedCircleIcon from "../../components/icons/CheckedCircleIcon";
import CircleWithStarIcon from "../../components/icons/CircleWithStarIcon";
import BlankIcon from "../../components/icons/BlankIcon";
import PersonIcon from "../../components/icons/PersonIcon";
import FaceIcon from "../../components/icons/FaceIcon";
import LaptopIcon from "../../components/icons/LaptopIcon";
import ShopBagIcon from "../../components/icons/ShopBagIcon";
import HeartIcon from "../../components/icons/HeartIcon";
import CalendarIcon from "../../components/icons/CalendarIcon";
import ClockIcon from "../../components/icons/ClockIcon";
import CopiedBlankIcon from "../../components/icons/CopiedBlankIcon";
import TwoPagesIcon from "../../components/icons/TwoPagesIcon";
import StarIcon from "../../components/icons/StarIcon";

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
    PersonIcon,
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
    const [activeIndex, setActiveIndex] = useState<number>(0);

    function handleColorClick(colorItem: string, index: number) {
        setColor(colorItem);
        setActiveIndex(index);
    }

    return (
        <div className={styles.div}>
            <div className={styles.selectColor}>
                {colors.map(function (colorItem, index) {
                    return (
                        <div
                            key={index}
                            className={styles.border}
                            style={{
                                border: activeIndex === index ? `2px solid ${colorItem}` : "none"
                            }}
                            onClick={() => handleColorClick(colorItem, index)}
                        >
                            <div
                                className={styles.circle}
                                style={{
                                    background: colorItem
                                }}
                            ></div>
                        </div>
                    );
                })}
            </div>
            <ul className={styles.list} style={{ color }}>
                {icons.map(function (IconComponent, index) {
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
