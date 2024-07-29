"use client";
import { useState } from "react";
import AvatarIcon from "~/components/icons/AvatarIcon";
import ButtonIconOnly from "../buttonIconOnly/ButtonIconOnly";
import AccountPopup from "./account-popup/AccountPopup";
import s from "./styles.module.css";

function AccountButton() {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    return (
        <div className={s.wrapper}>
            <ButtonIconOnly
                onClick={() => {
                    setIsOpened(!isOpened);
                }}
                icon={<AvatarIcon />}
            />
            <AccountPopup isOpened={isOpened} />
        </div>
    );
}

export default AccountButton;
