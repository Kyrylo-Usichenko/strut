"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./BrandVoiceMenu.module.css";
import CheckIcon from "~/components/icons/CheckIcon";
import PlusIcon from "~/components/icons/PlusIcon";

export type InitialDataType = { text: string; isChecked: boolean }[];

type Props = {
    onMenuClick: (test: string, data: InitialDataType) => void;
    initialData: InitialDataType;
};

export default function BrandVoiceMenu({ onMenuClick, initialData }: Props) {
    const [data, setData] = useState<InitialDataType>(initialData);
    const [selectedText, setSelectedText] = useState<string>(
        data.find((item) => item.isChecked)?.text || "Brand Voice"
    );
    const [filterText, setFilterText] = useState<string>("");
    const [hoveredItem, setHoveredItem] = useState<string | null>("No brand Voice");
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.focus();
        }
    }, []);

    function handleCheck(text: string) {
        if (text === "No brand Voice") {
            const newData = data.map((item) => ({ ...item, isChecked: false }));
            setData(newData);
            setSelectedText("Brand Voice");
            onMenuClick("Brand Voice", newData);
        } else {
            const newData = data.map((item) =>
                item.text === text ? { ...item, isChecked: true } : { ...item, isChecked: false }
            );
            setData(newData);
            setSelectedText(text);
            onMenuClick(text, newData);
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(e.target.value);
    };

    const filteredData = data.filter((item) => item.text.toLowerCase().includes(filterText.toLowerCase()));

    const isAnyChecked = data.some((item) => item.isChecked);
    const showNoResultsButton = filteredData.length === 0 && filterText.length > 0;

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            e.preventDefault();
            const items = ["No brand Voice", ...filteredData.map((item) => item.text)];
            const currentIndex = items.indexOf(hoveredItem || "");
            let newIndex;
            if (e.key === "ArrowUp") {
                newIndex = (currentIndex - 1 + items.length) % items.length;
            } else {
                newIndex = (currentIndex + 1) % items.length;
            }
            setHoveredItem(items[newIndex]);
        } else if (e.key === "Enter" && hoveredItem) {
            handleCheck(hoveredItem);
        }
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <div className={styles.container} onKeyDown={handleKeyDown} tabIndex={0} ref={containerRef}>
            <input
                type="text"
                className={styles.input}
                placeholder="Pick a brand voice"
                value={filterText}
                onChange={handleInputChange}
            />

            {showNoResultsButton || data.length === 0 ? (
                <a className={styles.noResultsButton}>
                    <PlusIcon width={12} height={12} />
                    Create a brand voice
                </a>
            ) : (
                <div className={styles.list} onMouseLeave={handleMouseLeave}>
                    <div
                        className={`${styles.noBrandVoice} ${hoveredItem === "No brand Voice" ? styles.hovered : ""}`}
                        onClick={() => handleCheck("No brand Voice")}
                        onMouseEnter={() => setHoveredItem("No brand Voice")}
                    >
                        {!isAnyChecked && (
                            <div className={styles.checkedIcon}>
                                <CheckIcon />
                            </div>
                        )}
                        No brand Voice
                    </div>
                    {filteredData.map((item, index) => (
                        <div
                            className={`${styles.item} ${hoveredItem === item.text ? styles.hovered : ""}`}
                            key={index}
                            onClick={() => handleCheck(item.text)}
                            onMouseEnter={() => setHoveredItem(item.text)}
                        >
                            {item.isChecked && (
                                <div className={styles.checkedIcon}>
                                    <CheckIcon />
                                </div>
                            )}
                            {item.text}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
