export type TextInputProps = {
    value: string;
    width: number;
    styleMode: "list" | "grid" | "kanban";
    onChange: (value: string) => void;
    setWidth: (width: number) => void;
};
