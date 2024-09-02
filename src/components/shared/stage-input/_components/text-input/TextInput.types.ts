export type TextInputProps = {
    value: string;
    width: number;
    styleMode: "list" | "grid" | "kanban";
    isCreated?: boolean;
    onChange: (value: string) => void;
    setWidth: (width: number) => void;
    onBlur?: () => void;
};
