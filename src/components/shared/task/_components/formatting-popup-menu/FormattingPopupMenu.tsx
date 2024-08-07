import Popup from "~/components/shared/popup/Popup";
import PopupButtonLong from "../popup-buttons/PopupButtonLong";
import PopupButtonSmall from "../popup-buttons/PopupButtonSmall";
import AiEditIcon from "./icons/AiEditIcon";
import BoldIcon from "./icons/BoldIcon";
import ItalicIcon from "./icons/ItalicIcon";
import LinkIcon from "./icons/LinkIcon";
import StrikethroughIcon from "./icons/StrikethroughIcon";
import HighlightIcon from "./icons/HighlightIcon";
import BulletedListIcon from "./icons/BulletedListIcon";
import OrderedListIcon from "./icons/OrderedListIcon";
import ToDoListIcon from "./icons/ToDoListIcon";
import styles from "./styles.module.css";
import { useState } from "react";
import { createPortal } from "react-dom";

type isCurrentlyClickedType = {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    link: boolean;
    mark: boolean;
    bulletedList: boolean;
    orderedList: boolean;
    toDoList: boolean;
};

type FormattingPopupMenuProps = {
    isOpened: boolean;
    position: { top: number; left: number };
    onTextFormatClick: () => void;
    onBoldClick: () => void;
    onItalicClick: () => void;
    onStrikethroughClick: () => void;
    onLinkClick: () => void;
    onMarkClick: () => void;
    onBulletedListClick: () => void;
    onOrderedListClick: () => void;
    onToDoListClick: () => void;
    onAiEditClick: () => void;
};

export default function FormattingPopupMenu({
    isOpened,
    position,
    onTextFormatClick,
    onBoldClick,
    onItalicClick,
    onStrikethroughClick,
    onLinkClick,
    onMarkClick,
    onBulletedListClick,
    onOrderedListClick,
    onToDoListClick,
    onAiEditClick
}: FormattingPopupMenuProps) {
    const [propertiesClicked, setPropertiesClicked] = useState<isCurrentlyClickedType>({
        bold: false,
        italic: false,
        strikethrough: false,
        link: false,
        mark: false,
        bulletedList: false,
        orderedList: false,
        toDoList: false
    });

    if (!isOpened) {
        return <></>;
    }
    return createPortal(
        <div
            className={styles.popupContent}
            style={{
                top: position.top,
                left: position.left
            }}
        >
            <PopupButtonLong
                onClick={() => {
                    onTextFormatClick();
                }}
                text="Text"
            />
            <div className={styles.separator} />
            <PopupButtonSmall
                onClick={() => {
                    onBoldClick();
                    setPropertiesClicked({ ...propertiesClicked, bold: !propertiesClicked.bold });
                }}
                icon={<BoldIcon />}
                isClicked={propertiesClicked.bold}
            />
            <PopupButtonSmall
                onClick={() => {
                    onItalicClick();
                    setPropertiesClicked({ ...propertiesClicked, italic: !propertiesClicked.italic });
                }}
                icon={<ItalicIcon />}
                isClicked={propertiesClicked.italic}
            />
            <PopupButtonSmall
                onClick={() => {
                    onStrikethroughClick();
                    setPropertiesClicked({
                        ...propertiesClicked,
                        strikethrough: !propertiesClicked.strikethrough
                    });
                }}
                icon={<StrikethroughIcon />}
                isClicked={propertiesClicked.strikethrough}
            />
            <div className={styles.separator} />
            <PopupButtonSmall
                onClick={() => {
                    onBulletedListClick();
                    setPropertiesClicked({
                        ...propertiesClicked,
                        bulletedList: !propertiesClicked.bulletedList
                    });
                }}
                icon={<BulletedListIcon />}
                isClicked={propertiesClicked.bulletedList}
            />
            <PopupButtonSmall
                onClick={() => {
                    onOrderedListClick();
                    setPropertiesClicked({ ...propertiesClicked, orderedList: !propertiesClicked.orderedList });
                }}
                icon={<OrderedListIcon />}
                isClicked={propertiesClicked.orderedList}
            />
            <PopupButtonSmall
                onClick={() => {
                    onToDoListClick();
                    setPropertiesClicked({ ...propertiesClicked, toDoList: !propertiesClicked.toDoList });
                }}
                icon={<ToDoListIcon />}
                isClicked={propertiesClicked.toDoList}
            />
            <div className={styles.separator} />
            <PopupButtonSmall
                onClick={() => {
                    onLinkClick();
                    setPropertiesClicked({ ...propertiesClicked, link: !propertiesClicked.link });
                }}
                icon={<LinkIcon />}
                isClicked={propertiesClicked.link}
            />
            <div className={styles.separator} />
            <PopupButtonSmall
                onClick={() => {
                    onMarkClick();
                    setPropertiesClicked({ ...propertiesClicked, mark: !propertiesClicked.mark });
                }}
                icon={<HighlightIcon />}
                isClicked={propertiesClicked.mark}
            />
            <div className={styles.separator} />
            <PopupButtonLong
                onClick={() => {
                    onAiEditClick();
                }}
                text="Ai edit"
                icon={<AiEditIcon />}
            />
        </div>,
        document.body
    );
}
