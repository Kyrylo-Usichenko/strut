"use client";

import { useState } from "react";

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
import PersonIcon from "~/components/icons/PersonIcon";
import ShopBagIcon from "~/components/icons/ShopBagIcon";
import StarIcon from "~/components/icons/StarIcon";
import TwoPagesIcon from "~/components/icons/TwoPagesIcon";
import СircleIcon from "~/components/icons/СircleIcon";
import СircleWithoutQueaterIcon from "~/components/icons/СircleWithoutQueaterIcon";
import styles from "./StageIconMenu.module.css";
import MenuButton from "../buttonMenu/menuButton";

type stageIconProps = { activeColor: string; onIconSelect: (icon: JSX.Element, color: string) => void };

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

export default function StageIconMenu({ activeColor, onIconSelect }: stageIconProps) {
    const [activeIndex, setActiveIndex] = useState<number>(
        colors.indexOf(activeColor) === -1 ? 0 : colors.indexOf(activeColor)
    );
    const [color, setColor] = useState<string>(colors[activeIndex]);

    function handleColorClick(colorItem: string, index: number) {
        setColor(colorItem);
        setActiveIndex(index);
    }

    return (
        <div className={styles.div}>
            <div className={styles.selectColor}>
                {colors.map((colorItem, index) => {
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
                {icons.map((IconComponent, index) => {
                    return (
                        <li className={styles.item} key={index}>
                            {/* <IconComponent /> */}
                            <MenuButton
                                icon={<IconComponent />}
                                onClick={() => onIconSelect(<IconComponent />, color)}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
