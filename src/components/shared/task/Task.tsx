"use client";

import styles from "./styles.module.css";
import ButtonIconOnly from "../buttonIconOnly/ButtonIconOnly";
import SmallCircleIcon from "~/components/icons/SmallCircleIcon";
import DoubleCircleIcon from "~/components/icons/DoubleCircleIcon";
import SmallCrossedCircleIcon from "~/components/icons/SmallCrossedCircleIcon";
import CrossIcon from "~/components/icons/CrossIcon";
import { TaskPopupWithButton } from "../TaskPopupMenu/TaskPopupWithButton";
import TaskContent from "./_components/task-content/TaskContent";
import FormattingPopupMenu from "./_components/formatting-popup-menu/FormattingPopupMenu";
import { useState, useEffect } from "react";
import { ContentType } from "./Task.types";
import { mergeOverlappingIntervals } from "./_components/utils/utils";

const modes = {
    regular: { icon: <SmallCircleIcon />, tooltipLabel: "Zoom Mode" },
    zoom: { icon: <DoubleCircleIcon />, tooltipLabel: "Deep Focus Mode" },
    deepFocus: { icon: <SmallCrossedCircleIcon />, tooltipLabel: "Regular Mode" }
};

export default function Task({ content }: { content: ContentType }) {
    const [activeMode, setActiveMode] = useState<"regular" | "zoom" | "deepFocus">("regular");
    const [currentContent, setCurrentContent] = useState<ContentType>(content || []);
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [popupPosition, setPopupPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
    const [selectedItems, setSelectedItems] = useState<{
        firstId: number;
        lastId: number;
        firstItemStart: number;
        lastItemEnd: number;
    }>({ firstId: 1, lastId: 0, firstItemStart: 0, lastItemEnd: 0 });

    useEffect(() => {
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    function toggleMode() {
        if (activeMode === "regular") {
            setActiveMode("zoom");
        } else if (activeMode === "zoom") {
            setActiveMode("deepFocus");
        } else {
            setActiveMode("regular");
        }
    }

    function handleMouseUp() {
        const selection = window.getSelection();
        if (
            selection &&
            selection.rangeCount > 0 &&
            selection.anchorNode &&
            selection.anchorNode.parentElement &&
            "istaskitem" in selection.anchorNode.parentElement.attributes &&
            selection.focusNode &&
            selection.focusNode.parentElement &&
            ("istaskitem" in selection.focusNode.parentElement.attributes || selection.focusNode.previousSibling)
        ) {
            const range = selection.getRangeAt(0);
            if (range && !range.collapsed && range.toString().length > 0) {
                const rect = range.getBoundingClientRect();
                const firstId = parseInt(selection.anchorNode.parentElement.id) || 1;
                const lastId = parseInt(
                    selection.focusNode.parentElement.id || (selection.focusNode.previousSibling as any).id || "0"
                );
                const firstItemStart = range.startOffset;
                const lastItemEnd = range.endOffset || (selection.focusNode.previousSibling as any).textContent.length;
                setPopupPosition({
                    top: rect.y + window.scrollY - 8 - 36,
                    left: rect.x + window.scrollX + rect.width / 2 - 402 / 2
                });
                setIsPopupOpen(true);
                setSelectedItems({
                    firstId,
                    lastId,
                    firstItemStart,
                    lastItemEnd
                });
            } else {
                setIsPopupOpen(false);
                setSelectedItems({
                    firstId: 1,
                    lastId: 0,
                    firstItemStart: 0,
                    lastItemEnd: 0
                });
            }
        }
    }

    function handleTextFormatClick(textType: "h1" | "h2" | "h3" | "h4" | "p") {
        const updatedContent = currentContent.map((item, index) => {
            if (index >= selectedItems.firstId && index <= selectedItems.lastId) {
                return {
                    ...item,
                    textType: textType
                };
            }
            return item;
        });
        setCurrentContent(updatedContent);
    }

    function handleBoldClick() {
        const updatedContent = currentContent.map((item, index) => {
            if (index >= selectedItems.firstId && index <= selectedItems.lastId) {
                let start = index === selectedItems.firstId ? selectedItems.firstItemStart : 0;
                let end = index === selectedItems.lastId ? selectedItems.lastItemEnd : 0;
                if (item.boldParts) {
                    return {
                        ...item,
                        boldParts: mergeOverlappingIntervals([...item.boldParts, { start, end }])
                    };
                }
                return {
                    ...item,
                    boldParts: [{ start, end }]
                };
            }
            return item;
        });
        setCurrentContent(updatedContent);
    }

    function handleItalicClick() {
        const updatedContent = currentContent.map((item, index) => {
            if (index >= selectedItems.firstId && index <= selectedItems.lastId) {
                let start = index === selectedItems.firstId ? selectedItems.firstItemStart : 0;
                let end = index === selectedItems.lastId ? selectedItems.lastItemEnd : 0;
                if (item.italicParts) {
                    return {
                        ...item,
                        italicParts: mergeOverlappingIntervals([...item.italicParts, { start, end }])
                    };
                }
                return {
                    ...item,
                    italicParts: [{ start, end }]
                };
            }
            return item;
        });
        setCurrentContent(updatedContent);
    }

    function handleStrikethroughClick() {
        const updatedContent = currentContent.map((item, index) => {
            if (index >= selectedItems.firstId && index <= selectedItems.lastId) {
                let start = index === selectedItems.firstId ? selectedItems.firstItemStart : 0;
                let end = index === selectedItems.lastId ? selectedItems.lastItemEnd : 0;
                if (item.strikethroughParts) {
                    return {
                        ...item,
                        strikethroughParts: mergeOverlappingIntervals([...item.strikethroughParts, { start, end }])
                    };
                }
                return {
                    ...item,
                    strikethroughParts: [{ start, end }]
                };
            }
            return item;
        });
        setCurrentContent(updatedContent);
    }

    function handleLinkClick(url: string) {
        const updatedContent = currentContent.map((item, index) => {
            if (index >= selectedItems.firstId && index <= selectedItems.lastId) {
                let start = index === selectedItems.firstId ? selectedItems.firstItemStart : 0;
                let end = index === selectedItems.lastId ? selectedItems.lastItemEnd : 0;
                if (item.linkParts) {
                    const filteredLinkParts = item.linkParts.filter(
                        (linkPart) =>
                            (linkPart.start >= start && linkPart.start <= end) ||
                            (linkPart.end >= start && linkPart.end <= end) ||
                            (linkPart.start <= start && linkPart.end >= end) ||
                            (linkPart.start >= start && linkPart.end <= end)
                    );
                    const overlappingParts = item.linkParts.filter(
                        (linkPart) => filteredLinkParts.indexOf(linkPart) === -1
                    );
                    start = Math.min(start, ...overlappingParts.map((linkPart) => linkPart.start));
                    end = Math.max(end, ...overlappingParts.map((linkPart) => linkPart.end));
                    return {
                        ...item,
                        linkParts: [...filteredLinkParts, { start, end, url }]
                    };
                }
                return {
                    ...item,
                    linkParts: [{ start, end, url }]
                };
            }
            return item;
        });
        setCurrentContent(updatedContent);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.buttons}>
                    <ButtonIconOnly
                        icon={modes[activeMode]["icon"]}
                        tooltipLabel={modes[activeMode]["tooltipLabel"]}
                        tooltipKeys={["CTRL", "+"]}
                        onClick={() => toggleMode()}
                    />
                    <TaskPopupWithButton docInfo={{ words: 0, chars: 0, time: 0 }} />
                    <ButtonIconOnly icon={<CrossIcon />} tooltipLabel="Close" />
                </div>
                <div className={styles.contentBox}>
                    <TaskContent content={currentContent} setContent={setCurrentContent} />
                    <FormattingPopupMenu
                        isOpened={isPopupOpen}
                        position={popupPosition}
                        onTextFormatClick={() => {}}
                        onBoldClick={handleBoldClick}
                        // onBoldClick={() => {}}
                        onItalicClick={() => {}}
                        onStrikethroughClick={() => {}}
                        onLinkClick={() => {}}
                        onMarkClick={() => {}}
                        onBulletedListClick={() => {}}
                        onOrderedListClick={() => {}}
                        onToDoListClick={() => {}}
                        onAiEditClick={() => {}}
                    />
                </div>
            </div>
        </div>
    );
}
