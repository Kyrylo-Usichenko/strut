"use client";

import { useState } from "react";
import Button from "../button/Button";
import styles from "./BrandVoiceButton.module.css";
import BullHornIcon from "~/components/icons/BullHornIcon";
import { useVisible } from "../PopupMenu/utils/useVisible";
import BrandVoiceMenu, { InitialDataType } from "~/components/shared/brand-voice-menu/page";
import { Tooltip } from "../Tooltip/Tooltip";

export const initialData = [
    { text: "Apple", isChecked: false },
    { text: "Nike", isChecked: false },
    { text: "Coca-cola", isChecked: false },
    { text: "Slack", isChecked: true },
    { text: "IKEA", isChecked: false },
    { text: "Dove", isChecked: false }
];

export default function BrandVoiceButton() {
    const [btnText, setBtnText] = useState<string>(initialData.find((item) => item.isChecked)?.text || "Brand Voice");
    const [data, setData] = useState<InitialDataType>(initialData);
    const { ref, isVisible, setIsVisible } = useVisible(false);

    function onMenuItemClick(text: string, data: InitialDataType) {
        setBtnText(text);
        setIsVisible(false);
        setData(data);
    }
    return (
        <div className={styles.container} ref={ref}>
            <Tooltip label="Brand voice" direction="bottom" visible={!isVisible}>
                <Button
                    text={btnText}
                    icon={<BullHornIcon />}
                    onClick={() => (isVisible ? setIsVisible(false) : setIsVisible(true))}
                />
            </Tooltip>
            {isVisible && (
                <div className={styles.brandVoiceMenu}>
                    <BrandVoiceMenu onMenuClick={onMenuItemClick} initialData={data} />
                </div>
            )}
        </div>
    );
}
