"use client";

import TagIcon from "~/components/icons/TagIcon";
import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./styles.module.css";
import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";
import CheckIcon from "~/components/icons/CheckIcon";

export type Tags = { text: string; isChecked: boolean }[];

type Props = {
    tags: Tags;
    onTagChecked: (data: Tags) => void;
    handleCLickLabel?: (isVisible: boolean) => void;
};

export default function LabelMenu({ tags, onTagChecked, handleCLickLabel = () => {} }: Props) {
    // const [tagsData, setTagsData] = useState<Tags>(tags);
    const [inputValue, setInputValue] = useState<string>("");
    const [hoveredItem, setHoveredItem] = useState<number | null>(0);
    const menuRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const ref = useRef<HTMLDivElement | null>(null);
    const { isVisible, setIsVisible } = useVisible(false);

    const filteredTagsData = tags.filter((item) => item.text.toLowerCase().includes(inputValue.toLowerCase()));

    function handleInputEnter(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value.trim());
    }

    function handleOpenMenu() {
        setIsVisible(!isVisible);
        setInputValue("");
        handleCLickLabel(true);
    }

    useEffect(() => {
        if (isVisible && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isVisible, onTagChecked]);

    useEffect(() => {
        if (isVisible) {
            setHoveredItem(0);
        }
    }, [isVisible]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            e.preventDefault();
            const items = [...filteredTagsData.map((item, index) => index)];
            const currentIndex = items[hoveredItem || 0];
            let newIndex;
            if (e.key === "ArrowUp") {
                newIndex = (currentIndex - 1 + items.length) % items.length;
            } else {
                newIndex = (currentIndex + 1) % items.length;
            }
            setHoveredItem(items[newIndex]);
        } else if (e.key === "Enter") {
            if (filteredTagsData.length > 0 && hoveredItem !== null) {
                onTagClick(hoveredItem);
            } else if (inputValue) {
                handleCreateTag();
            }
        }
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const onTagClick = (index: number) => {
        const updatedTags = [...tags];
        updatedTags[index].isChecked = !updatedTags[index].isChecked;
        // setTagsData(updatedTags);
        onTagChecked(updatedTags);
        setIsVisible(false);
        handleCLickLabel(false);
    };

    const handleCreateTag = () => {
        const newTag = { text: inputValue, isChecked: true };
        const updatedTags = [...tags, newTag];
        // setTagsData(updatedTags);
        onTagChecked(updatedTags);
        setInputValue("");
        setIsVisible(false);
        handleCLickLabel(false);
    };

    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsVisible(false);
                handleCLickLabel(false);
            }
        },
        [setIsVisible, handleCLickLabel]
    );

    const handleEscapePress = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsVisible(false);
                handleCLickLabel(false);
            }
        },
        [setIsVisible, handleCLickLabel]
    );

    useEffect(() => {
        if (isVisible) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEscapePress);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapePress);
        };
    }, [isVisible, handleClickOutside, handleEscapePress]);

    return (
        <div className={styles.container} ref={ref}>
            <ButtonIconOnly
                onClick={handleOpenMenu}
                icon={<TagIcon />}
                tooltipLabel="Add a tag"
                tooltipVisible={!isVisible}
            />

            {isVisible && (
                <div ref={menuRef} className={styles.menu} onKeyDown={handleKeyDown} tabIndex={0}>
                    <input
                        ref={inputRef}
                        type="text"
                        className={styles.input}
                        onChange={handleInputEnter}
                        placeholder="Add a tag..."
                        autoComplete="off"
                        value={inputValue}
                    />

                    <div className={styles.list} onMouseLeave={handleMouseLeave}>
                        {filteredTagsData.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => onTagClick(index)}
                                className={`${styles.item} ${hoveredItem === index ? styles.hovered : ""}`}
                                onMouseEnter={() => setHoveredItem(index)}
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

                    {inputValue && filteredTagsData.length === 0 && (
                        <button className={styles.createBtn} onClick={handleCreateTag}>
                            Create&nbsp;
                            <span>{`"${inputValue}"`}</span>
                        </button>
                    )}

                    {tags.length === 0 && !inputValue && <p className={styles.tagText}>No tags yet</p>}
                </div>
            )}
        </div>
    );
}
