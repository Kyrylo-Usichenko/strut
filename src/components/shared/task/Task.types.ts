export type ItemType = {
    text: string;
    textType: "documentTitle" | "h1" | "h2" | "h3" | "h4" | "p";
    listType?: "bulleted" | "numbered" | "toDoChecked" | "toDoUnchecked";
    boldParts?: { start: number; end: number }[];
    italicParts?: { start: number; end: number }[];
    strikethroughParts?: { start: number; end: number }[];
    highlightedParts?: { start: number; end: number }[];
    linkParts?: { start: number; end: number; url: string }[];
    id?: string;
    onChange?: (updatedItem: ItemType) => void;
};

export type ContentType = ItemType[];

export type TaskContentProps = {
    content: ContentType;
    setContent: (content: ContentType) => void;
};
