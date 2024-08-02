export type ItemType = {
    text?: string;
    textType?: "documentTitle" | "h1" | "h2" | "h3" | "h4" | "p";
    bold?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    link?: string;
    listType?: "bulleted" | "numbered" | "toDoChecked" | "toDoUnchecked";
    highlighted?: boolean;
    onChange?: (updatedItem: ItemType) => void;
};

export type ContentType = ItemType[];

export type TaskContentProps = {
    content: ContentType;
    setContent: (content: ContentType) => void;
};
