"use client";
import { useState } from "react";
import AvatarIcon from "~/components/icons/AvatarIcon";
import ButtonIconOnly from "../buttonIconOnly/ButtonIconOnly";
import AccountPopup from "./account-popup/AccountPopup";
import s from "./styles.module.css";

function AccountButton() {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const handleTogglePopup = () => {
        setIsOpened((prev) => !prev);
    };

    const handleClosePopup = () => {
        setIsOpened(false);
    };

    return (
        <div className={s.wrapper}>
            <ButtonIconOnly
                onClick={handleTogglePopup}
                icon={<AvatarIcon />}
            />
            {isOpened && <AccountPopup isOpened={isOpened} onClose={handleClosePopup} />}
        </div>
    );
}

export default AccountButton;
