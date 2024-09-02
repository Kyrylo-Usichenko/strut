"use client";

import HelpSupportPopup from "~/components/shared/help-support-popup/HelpSupportPopup";
import s from "./styles.module.css";

export default function Page() {
    return (
        <div className={s.item}>
            <span className={s.title}>Help Support Popup</span>
            <div>
                <HelpSupportPopup />
            </div>
        </div>
    );
}
