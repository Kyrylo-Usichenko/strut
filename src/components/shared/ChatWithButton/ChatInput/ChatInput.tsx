import React, { useState } from "react";
import ButtonIconOnly from "../../buttonIconOnly/ButtonIconOnly";
import ArrowIcon from "~/components/icons/ArrowIcon";
import styles from "./input.module.css";

type Props = {
    onSend: (message: string) => void;
};

const ChatInput: React.FC<Props> = ({ onSend }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSend(inputValue);
        setInputValue("");
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Send a message about current workspace"
                autoFocus
            />
            <ButtonIconOnly icon={<ArrowIcon direction="up" />} className={styles.icon} />
        </form>
    );
};

export { ChatInput };
