import React, { useEffect, useState, useCallback, useRef } from "react";
import { MenuItem } from "../PopupMenu/PopupMenu";
import { PopupMenuItem } from "../PopupMenu/PopupMenuItem";
import styles from "../PopupMenu/menu.module.css";
import status from "./status.module.css";

type Props = {
    items: MenuItem[];
    direction?: "top" | "bottom" | "left" | "right";
    visible: boolean;
    onItemClick: (item: MenuItem) => void;
};

function StatusMenu({ items, visible = false, direction, onItemClick }: Props) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [hasMouseEntered, setHasMouseEntered] = useState(false);
    const filteredItems = items.filter((item) => item.label.toLowerCase().includes(searchQuery.toLowerCase()));

    useEffect(() => {
        setSearchQuery("");
        setHasMouseEntered(false);
        setActiveIndex(0);
    }, [visible]);

    const handleMouseEnter = () => {
        setHasMouseEntered(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };
    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (!visible) return;
            switch (e.key) {
                case "ArrowDown":
                    setActiveIndex((prevIndex) => (prevIndex === null ? 0 : (prevIndex + 1) % filteredItems.length));
                    setHasMouseEntered(false);
                    break;
                case "ArrowUp":
                    setActiveIndex((prevIndex) =>
                        prevIndex === null
                            ? filteredItems.length - 1
                            : (prevIndex - 1 + filteredItems.length) % filteredItems.length
                    );
                    setHasMouseEntered(false);
                    break;
                case "Enter":
                    if (activeIndex !== null && filteredItems[activeIndex]) {
                        onItemClick(filteredItems[activeIndex]);
                    }
                    break;
                default:
                    break;
            }
        },
        [visible, filteredItems, activeIndex, onItemClick]
    );

    if (!visible) return null;

    return (
        <div
            className={`${styles.menu} ${direction ? styles[direction] : ""} ${status.menu}`}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            <input
                className={status.input}
                type="text"
                placeholder="Change status"
                value={searchQuery}
                onChange={handleInputChange}
                autoFocus
            />
            <div>
                <div className={status.items}>
                    {filteredItems.map((item, index) => (
                        <div key={index} onClick={() => onItemClick(item)} onMouseEnter={handleMouseEnter}>
                            <PopupMenuItem {...item} isActive={!hasMouseEntered && index === activeIndex} />
                        </div>
                    ))}
                </div>
                {filteredItems.length === 0 && (
                    <div className={status.noResult}>
                        <span>No results</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export { StatusMenu };
